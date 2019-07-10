export function getClassById(classes, class_id) {
    return classes.find(_class => _class.id === class_id);
}

export function getDegreeById(degrees, degree_id) {
    return degrees.find(degree => degree.id === degree_id);
}

export function getMattersByTeacherId(matters, relations, teacher_id) {
    let matters_result = [];
    
    for (const relation of relations) {
        if (relation.teacherId === teacher_id){
            matters_result.push(matters.find(matter => matter.id === relation.matterId));
        }
    }

    return matters_result;
}

export function getStudentById(students, student_id) {
    return students.find(student => student.id === student_id);
}

export function getClassesOfADegree(classes, relations, degreeId) {

    const allClasses = classes;
    const allRelations = relations;

    let allRelationsDegrees = allRelations.map(allRelations => allRelations.degrees); // get only degrees relationship
    allRelationsDegrees = [].concat.apply([], allRelationsDegrees); // merge in a single list

    const allDegreesWithId = allRelationsDegrees.filter(el => el.degreeId === degreeId);

    let classesForThisDegree = allDegreesWithId.map(el => el.classes);
    classesForThisDegree = [].concat.apply([], classesForThisDegree);

    const listOfClasses = allClasses.filter(a_class => {
        return (classesForThisDegree.find(b_class => {
            // the data are inconsistent: some relatioships have key "classPosition" others "classId" 
            if (b_class.hasOwnProperty("classPosition")) {
                b_class.id = b_class.classPosition
            } else {
                b_class.id = b_class.classId;
            }

            return b_class.id === a_class.id
        }))
    });



    return listOfClasses;
}

/**
 * Filter also by teacher_id
 * @param {*} classes 
 * @param {*} relations 
 * @param {*} degreeId 
 * @param {*} teacher_id 
 */
export function getClassesOfADegree2(classes, relations, degreeId, teacher_id) {

    let listOfClasses = []
    let degrees_relation = [];

    for (const relation of relations) {
        if (relation.teacherId === teacher_id) {

            degrees_relation = degrees_relation.concat(relation.degrees);

            for (const degree_relation of relation.degrees) {
                if (degree_relation.degreeId === degreeId) {
                    for (const class_ of degree_relation.classes) {

                        // the data are inconsistent: some relatioships have key "classPosition" others "classId" 
                        if (class_.hasOwnProperty("classPosition")) {
                            class_.id = class_.classPosition
                        } else {
                            class_.id = class_.classId;
                        }

                        listOfClasses.push(getClassById(classes, class_.id));
                    }
                }
            }
        }
    }

    return listOfClasses;
}

export function getDegreesOfATeacher(relations, degrees, teacher_id) {

    // let degrees_relation = [];
    const degrees_found = [];

    for (const relation of relations) {
        if (relation.teacherId === teacher_id) {

            // degrees_relation = degrees_relation.concat(relation.degrees);

            for (const degree_relation of relation.degrees) {
                const getDegreeResult = getDegreeById(degrees, degree_relation.degreeId);
                if (getDegreeResult) {
                    degrees_found.push(getDegreeResult);
                }
            }
        }
    }

    return degrees_found;
}

export function getStudentsOfAClass(students, class_id, degree_id) {

    const studentsOfTheSameClass = students.filter(student => (student.degreeId === degree_id && student.classId === class_id));
    const students_result = [];
    for (const student of studentsOfTheSameClass) {
        students_result.push(getStudentById(students, student.id));
    }

    return students_result;
}

export function getStudentsOfADegree(students, degree_id) {

    const students_result = students.filter(student => student.degreeId === degree_id);

    return students_result;
}