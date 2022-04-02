export const SUBJECT_TEACHER_OPTION = 'SUBJECT_TEACHER_OPTION'

export const createTeacherSideBarOptions = (subjects) => {
  const teacherOptions = [
    {
      name: 'Asignaturas',
      options: subjects.map(subject => ({
        id: subject.id,
        name: subject.name,
        sectionType: SUBJECT_TEACHER_OPTION,
        data: subject
      }))
    },
    {
      name: 'Configuración',
      options: []
    }
  ]

  return teacherOptions
}