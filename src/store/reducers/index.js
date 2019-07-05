import { combineReducers } from "redux";
import studentReducer from "./StudentReducer"
import relationsReducer from "./RelationshipsReducer"
import classesReducer from "./ClassesReducer"
import degreesReducer from "./DegreesReducer"


const rootReducer = combineReducers({
    studentReducer,
    relationsReducer,
    classesReducer,
    degreesReducer

    
});

export default rootReducer;