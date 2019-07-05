import students from "../jsons/students.json";

const INITIAL_STATE = {
   students : students
}

/** 
 * @param state
 * @param action
 * @returns state
 */
function StudentReducer(state = INITIAL_STATE, action) {

    if (!action){
        console.log("No action");
        
        return state;
    }

    if (action.type === "") {
        
    }

   

    else {
        console.log("else");
        return state;
    }
}

export default StudentReducer;