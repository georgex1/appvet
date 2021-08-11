import { db_insertPlace, db_getPlaces }  from "../../db";

import { URL_API } from '../../constants/database';

export const ADD_PLACE = 'ADD_PLACE';
export const GET_PLACES = 'GET_PLACES';



export const getPlaces = (user) => {
    return async dispatch => {
      try {
          const result = await db_getPlaces(user);
          // console.log(result);

          dispatch({ type: GET_PLACES, items: result.rows?._array });
      } catch (error) {
          throw error;
      }
    }
}

export const getPlacesFirebase = (user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/places/${user}.json`);
      const result = await response.json();
      const items = ObjToArray(result);
      
      dispatch({ type: GET_PLACES, items });
    } catch (err) {
      console.log(err.message);
    }
  }
}

export const addPlace = (placeInfo, user) => {
    return async (dispatch) => {


        try {

            let placeInfoS = {
                date: Date.now(),
                name: placeInfo.name,
                lat: placeInfo.location.lat,
                lng: placeInfo.location.lng
            }

            const response = await fetch(`${URL_API}/places/${user}.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(placeInfoS)
            })
            
            const result = await response.json();
            placeInfoS['firebaseId'] = result.name;

            //insert into local database:
            const resultDb = await db_insertPlace(placeInfoS, user);
            placeInfoS['id'] = resultDb.insertId;
            
            // console.log(resultDb)
            
            dispatch({
                type: ADD_PLACE,
                petInfo: placeInfoS
            });

        } catch(err){
            console.log(err.message)
            throw err;
        }
    }
}



