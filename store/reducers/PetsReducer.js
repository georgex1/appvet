// import { PETS } from '../../data/pets';
import { SELECT_PET, ADD_PET, GET_PETS, DELETE_PET } from '../actions/petsAction';

const INITIAL_STATE = {
    list: [],
    selected: null,
}

export default PetsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SELECT_PET:
            
            const idx = state.list.findIndex(a => a.id === action.id);
            if(idx === -1) return {...state}

            return {
                ...state,
                selected: state.list[idx]
            }
        case ADD_PET:
            
            let newPet = action.petInfo;
            
            return {
                ...state,
                list: state.list.concat(newPet),
                selected: newPet
            }
        case GET_PETS:
            return {
                list: action.items,
            }
        case DELETE_PET:
            const updated = state.list.filter(item => item.id !== action.pet_id);
            return {
                ...state,
                list: updated,
            };

        default:
            return { ...state }
    }
}