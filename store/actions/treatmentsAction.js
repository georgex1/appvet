import { URL_API } from "../../constants/database";
import { ObjToArray } from "../../utils/utilsFunctions";

import { db_getTreatments, db_insertTreatment, db_deleteTreatment } from "../../db";

export const SELECT_TREATMENT = 'SELECT_TREATMENT';
export const FITER_TREATMENTS = 'FITER_TREATMENTS';
export const ADD_TREATMENT = 'ADD_TREATMENT';
export const DELETE_TREATMENT = 'DELETE_TREATMENT';

export const selectTreatment = (id) => ({
    type: SELECT_TREATMENT,
    treatmentID: id
})

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

export const filterTreatmentsFirebase = (petId, userid = null) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/treatments/${userid}/${petId}.json`);
            const result = await response.json();
            
            const items = (result == null) ? [] : ObjToArray(result);
            
            dispatch({ type: FITER_TREATMENTS, items });
        } catch (err) {
            console.log(err.message);
        }
    }
}

export const addTreatment = (treatmentInfo, medicationList, userid = null) => {
    return async (dispatch) => {
        try {
            let treatmentInfoS = {
                pet_id: treatmentInfo.pet_id,
                name: treatmentInfo.treatmentName,
                startDate: treatmentInfo.startDate,
                medications: medicationList
            }

            const response = await fetch(`${URL_API}/treatments/${userid}/${treatmentInfo.pet_id}.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(treatmentInfoS)
            })

            const result = await response.json();
            treatmentInfoS['firebaseId'] = result.name;
            treatmentInfoS['medications'] = JSON.stringify(medicationList)

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

export const deleteTreatment = (id, firebaseId, user) => {
    return async dispatch => {
      try {
        await fetch(`${URL_API}/treatments/${user}/${firebaseId}.json`, {
          method: 'DELETE',
        });

        const resultDb = await db_deleteTreatment(id);
        // console.log(resultDb)


        dispatch({ type: DELETE_TREATMENT, id: id });
      } catch (err) {
        console.log(err.message);
      }
    }
}