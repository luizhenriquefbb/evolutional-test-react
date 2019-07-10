export function create_new_teacher(teacherName, teacherId) {
    return {
        type: "CREATE_NEW_TEACHER",
        teacherName,
        teacherId
    }
}