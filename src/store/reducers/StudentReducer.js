import students from "../jsons/students.json";

const INITIAL_STATE = {
    students: students
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

    if (action.type === "CREATE_MORE_STUDENTS") {
        console.log("CREATE_MORE_STUDENTS");

        const allDegrees = action.allDegrees;
        const allRelations = action.allRelations;
        const allClasses = action.allClasses;

        // colone original state
        const newState = JSON.parse(JSON.stringify(state));

        // get last id of a student
        const last_id = Math.max.apply(Math, state.students.map(function(student) { return student.id; }));
        for (let index = last_id + 1; index < last_id + 300; index++) {
            try {

                // get random degreeID
                const randomDegree = allDegrees[Math.floor(Math.random() * allDegrees.length)];

                // get random classID of this degree (like a join in sql)
                let allRelationsDegrees = allRelations.map(allRelations => allRelations.degrees); // get only degrees relationship
                allRelationsDegrees = [].concat.apply([], allRelationsDegrees); // merge in a single list

                const allDegreesWithId = allRelationsDegrees.filter(el => el.degreeId == randomDegree.id);

                const randomDegreeWithId = allDegreesWithId[Math.floor(Math.random() * allDegreesWithId.length)];

                const randomClassPosition = randomDegreeWithId.classes[Math.floor(Math.random() * randomDegreeWithId.classes.length)];

                const the_class = allClasses.find(a_class => {
                    // the data are inconsistent: some relatioships have key "classPosition" others "classId" 
                    if (randomClassPosition.hasOwnProperty("classPosition")) {
                        return a_class.id == randomClassPosition.classPosition;
                    } else {
                        return a_class.id == randomClassPosition.classId;
                    }
                });

                newState.students.push({
                    "id": index,
                    "ra": index,
                    "name": "Nome do aluno " + index,
                    "degreeId": randomDegree.id,
                    "classId": the_class.id
                });


            } catch (error) {
                console.warn("Some error with the data. Total of students until now: " + newState.students.length);
                index -= 1; // step back until the x students are make
            }

        }

        return newState;
    }

    if (action.type === "EDIT_ONE_STUDENT") {
        console.log("EDIT_ONE_STUDENT");

        // colone original state
        const newState = JSON.parse(JSON.stringify(state));



        return newState;
    }

    return state;

}

export default StudentReducer;