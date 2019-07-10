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

    if(action.type === "CREATE_NEW_RELATION"){
        // copy original state
        const newState = JSON.parse(JSON.stringify(state));

        const {teacherId, matterId, degreeId, classPosition} = action;
        
        const newRelation = {
            "id": state.relationships.length+1,
            "teacherId": teacherId,
            "matterId": matterId,
            "degrees": [
                {
                    "degreeId": degreeId,
                    "classes": [
                        {
                            "classPosition": classPosition
                        }
                    ]
                }
            ]
        }

        newState.relationships.push(newRelation)
        return newState;

    }

    return state;
}

export default relationsReducer;