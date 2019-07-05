import classes from "../jsons/classes.json";

const INITIAL_STATE = {
    classes
}

/** 
 * @param state
 * @param action
 * @returns state
 */
function classesReducer(state = INITIAL_STATE, action) {

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

export default classesReducer;