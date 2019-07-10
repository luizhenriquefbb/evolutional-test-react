import teachers from "../jsons/teachers.json";

const INITIAL_STATE = {
    teachers: teachers
}

/** 
 * @param state
 * @param action
 * @returns state
 */
function StudentReducer(state = INITIAL_STATE, action) {

    if (!action) {
        console.log("No action");

        return state;
    }

    if(action.type === "CREATE_NEW_TEACHER"){
        // clone original state
        const newState = JSON.parse(JSON.stringify(state));

        const {teacherName, teacherId} = action;
        const newTeacher = {
            id: teacherId,
            name: teacherName
        }

        newState.teachers.push(newTeacher);

        return newState;
    }



    return state;

}

export default StudentReducer;