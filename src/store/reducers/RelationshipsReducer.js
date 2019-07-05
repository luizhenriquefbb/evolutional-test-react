import relationships from "../jsons/relationships.json";

const INITIAL_STATE = {
    relationships
}

/** 
 * @param state
 * @param action
 * @returns state
 */
function relationsReducer(state = INITIAL_STATE, action) {

    if (!action){
        console.log("No action");
        
        return state;
    }

    if (action.type === "____") {
        return state;
    }

   

    else {
        console.log("else");
        return state;
    }
}

export default relationsReducer;