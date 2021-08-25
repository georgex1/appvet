import { FITER_TREATMENTS, ADD_TREATMENT, DELETE_TREATMENT, SELECT_TREATMENT } from '../actions/treatmentsAction';

const INITIAL_STATE = {
    list: null,
    filteredTreatments: [],
    selected: null,
}

export default TreatmentsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FITER_TREATMENTS:

            return {
                ...state,
                filteredTreatments: action.items
            }

        case SELECT_TREATMENT:

            return {
                ...state,
                selected: state.filteredTreatments.filter(a=> a.id === action.id )
            }

        case ADD_TREATMENT:
            let newTreatment = action.treatmentInfo

            return {
                ...state,
                filteredTreatments: state.filteredTreatments.concat(newTreatment)
            }
        case DELETE_TREATMENT:
            const updated = state.filteredTreatments.filter(item => item.id !== action.id);
            return {
                ...state,
                filteredTreatments: updated,
            };

        default:
            return { ...state }
    }
}
