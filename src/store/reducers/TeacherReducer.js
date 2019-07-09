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



    return state;

}

export default StudentReducer;