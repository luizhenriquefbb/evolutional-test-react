export function createMoreStudents(allDegrees, allRelations, allClasses) {

    return {
        type: "CREATE_MORE_STUDENTS",
        allDegrees,
        allRelations,
        allClasses
    }
}


export function editOneStudent(studentId, name, classId,  degreeId) {

    return {
        type: "EDIT_ONE_STUDENT",
        studentId, 
        name, 
        classId, 
        degreeId
    }
}