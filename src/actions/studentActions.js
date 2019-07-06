export function createMoreStudents(allDegrees, allRelations, allClasses) {

    return {
        type: "CREATE_MORE_STUDENTS",
        allDegrees,
        allRelations,
        allClasses
    }
}


export function editOneStudent(studentId) {

    return {
        type: "EDIT_ONE_STUDENT",
        studentId
    }
}