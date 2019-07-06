import degrees from "../jsons/degrees.json";

const INITIAL_STATE = {
    degrees
}

/** 
 * @param state
 * @param action
 * @returns state
 */
function degreesReducer(state = INITIAL_STATE, action) {

    if (!action){
        console.log("No action");
        
        return state;
    }

    if (action.type === "____") {
        return state;
    }

    return state;
}

export default degreesReducer;