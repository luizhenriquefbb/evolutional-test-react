export function new_relation(teacherId, matterId, degreeId, classPosition) {
    return {
        type:"CREATE_NEW_RELATION",
        teacherId,
        matterId,
        degreeId,
        classPosition
    }
}