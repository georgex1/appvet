import { URL_API } from "../../constants/database";
import { ObjToArray } from "../../utils/utilsFunctions";
import * as FileSystem from 'expo-file-system';

import { db_getPets, db_insertPet, db_deletePet } from "../../db";

export const SELECT_PET = 'SELECT_PET';
export const ADD_PET = 'ADD_PET';
export const GET_PETS = 'GET_PETS';
export const DELETE_PET = 'DELETE_PET';

export const selectPet = (id) => ({
    type: SELECT_PET,
    id
})

export const getPets = (user) => {
    return async dispatch => {
      try {
          const result = await db_getPets(user);

          dispatch({ type: GET_PETS, items: result.rows?._array });
      } catch (error) {
          throw error;
      }
    }
}

export const getPetsFirebase = (user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/pets/${user}.json`);
      const result = await response.json();
      const items = ObjToArray(result);
      
      dispatch({ type: GET_PETS, items });
    } catch (err) {
      console.log(err.message);
    }
  }
}

export const addPet = (petInfo, user, id = null) => {
    return async (dispatch) => {

        const fileName = petInfo.image.split('/').pop()
        const imagePath = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: petInfo.image,
                to: imagePath,
            });

            let petInfoS = {
                date: Date.now(),
                name: petInfo.name,
                age: petInfo.age,
                treatments: "0",
                image: imagePath
            }

            const response = await fetch(`${URL_API}/pets/${user}.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(petInfoS)
            })
            
            const result = await response.json();
            petInfoS['firebaseId'] = result.name;

            //insert into local database:
            const resultDb = await db_insertPet(petInfoS, user);
            petInfoS['id'] = resultDb.insertId;
            
            // console.log(resultDb)
            
            dispatch({
                type: ADD_PET,
                petInfo: petInfoS
            });

        } catch(err){
            console.log(err.message)
            throw err;
        }
    }
}

export const deletePet = (id, firebaseId, user) => {
    return async dispatch => {
      try {
        await fetch(`${URL_API}/pets/${user}/${firebaseId}.json`, {
          method: 'DELETE',
        });

        const resultDb = await db_deletePet(id);
        // console.log(resultDb)


        dispatch({ type: DELETE_PET, pet_id: id });
      } catch (err) {
        console.log(err.message);
      }
    }
}


