import { ADD_PLACE, GET_PLACES } from '../actions/placesAction';

const INITIAL_STATE = {
    list: []
}

export default PlacesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        
        case ADD_PLACE:
            
            let newPlace = action.petInfo;
            
            return {
                ...state,
                list: state.list.concat(newPlace)
            }

        case GET_PLACES:
            return {
                list: action.items,
            }

        default:
            return { ...state }
    }
}

