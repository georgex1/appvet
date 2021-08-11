import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import PetsReducer from './reducers/PetsReducer';
import TreatmentsReducer from './reducers/TreatmentsReducer';
import AuthReducer from './reducers/AuthReducer';
import PlaceReducer from './reducers/PlaceReducer';

const RootReducer = combineReducers({
    pets: PetsReducer,
    treatments: TreatmentsReducer,
    auth: AuthReducer,
    places: PlaceReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))