import matters from "../jsons/matters.json";

const INITIAL_STATE = {
    matters
}

/** 
* @param state
* @param action
* @returns state
*/
function MatterReducer(state = INITIAL_STATE, action) {
    if (!action) {
        console.log("No action");

        return state;
    }

    return state;

}
export default MatterReducer;