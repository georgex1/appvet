import { FITER_TREATMENTS, ADD_TREATMENT } from '../actions/treatmentsAction';

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

        // case SELECT_TREATMENTS:

        //     return {
        //         ...state,
        //         selected: state.list.filter(a=> a.id === action.id )
        //     }

        case ADD_TREATMENT:
            let newTreatment = action.treatmentInfo

            return {
                ...state,
                filteredTreatments: state.filteredTreatments.concat(newTreatment)
            }

        default:
            return { ...state }
    }
}
