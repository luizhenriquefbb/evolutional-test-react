import { combineReducers } from "redux";
import studentReducer from "./StudentReducer"
import relationsReducer from "./RelationshipsReducer"
import classesReducer from "./ClassesReducer"
import degreesReducer from "./DegreesReducer"
import teacherReducer from "./TeacherReducer"
import matterReducer from "./MatterReducer"


const rootReducer = combineReducers({
    studentReducer,
    relationsReducer,
    classesReducer,
    degreesReducer,
    teacherReducer,
    matterReducer

    
});

export default rootReducer;