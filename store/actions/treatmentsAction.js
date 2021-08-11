import { URL_API } from "../../constants/database";
import { ObjToArray } from "../../utils/utilsFunctions";

import { db_getTreatments, db_insertTreatment, db_deleteTreatment } from "../../db";

export const SELECT_TREATMENTS = 'SELECT_TREATMENTS';
export const FITER_TREATMENTS = 'FITER_TREATMENTS';
export const ADD_TREATMENT = 'ADD_TREATMENT';

// export const selectTreatments = (id) => ({
//     type: SELECT_TREATMENTS,
//     treatmentID: id
// })

export const filterTreatments = (petId) => {
    return async dispatch => {
        try {
            const result = await db_getTreatments(petId);
            // console.log(result);
            dispatch({ type: FITER_TREATMENTS, items: result.rows?._array });

        } catch (err) {
            console.log(err.message);
        }
    }
}

export const filterTreatmentsFirebase = (petId) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/treatments/${petId}.json`);
            const result = await response.json();
            
            const items = (result == null) ? [] : ObjToArray(result);
            
            dispatch({ type: FITER_TREATMENTS, items });
        } catch (err) {
            console.log(err.message);
        }
    }
}

export const addTreatment = (treatmentInfo, id = null) => {
    return async (dispatch) => {
        try {
            let treatmentInfoS = {
                pet_id: treatmentInfo.pet_id,
                name: treatmentInfo.treatmentName,
                startDate: treatmentInfo.startDate,
                medications: []
            }

            const response = await fetch(`${URL_API}/treatments/${treatmentInfo.pet_id}.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(treatmentInfoS)
            })

            const result = await response.json();
            treatmentInfoS['firebaseId'] = result.name;

            //insert into local database:
            const resultDb = await db_insertTreatment(treatmentInfoS);
            treatmentInfoS['id'] = resultDb.insertId;            

            dispatch({
                type: ADD_TREATMENT,
                treatmentInfo: treatmentInfoS
            });

        } catch(err){
            console.log(err.message)
            throw err;
        }
    }
}