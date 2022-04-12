import { SIGN_OUT_OPTION } from "./common"

export const SUBJECT_TEACHER_OPTION = 'SUBJECT_TEACHER_OPTION'
export const PROFILE_TEACHER_OPTION = 'PROFILE_TEACHER_OPTION'

export const EXAM = 'EXAM'
export const HOMEWORK = 'HOMEWORK'
export const WORKSHOP = 'WORKSHOP'
export const LECTURE = 'LECTURE'
export const PARTICIPATION = 'PARTICIPATION'

export const ASSIGNMENT_TYPES = [
  HOMEWORK,
  WORKSHOP,
  LECTURE,
  EXAM,
  PARTICIPATION
]

export const getAssignmentTypeName = (assignmentType) => {
  switch(assignmentType) {
    case EXAM:
      return "Examen"
    case HOMEWORK:
      return "Tarea"
    case WORKSHOP:
      return "Taller"
    case LECTURE:
      return "Exposición"
    case PARTICIPATION:
      return "Participación en clase"
  }
}

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
      options: [
        {
          id: PROFILE_TEACHER_OPTION,
          name: "Cuenta",
          sectionType: PROFILE_TEACHER_OPTION
        },
        {
          id: SIGN_OUT_OPTION,
          name: "Cerrar Sesión",
          sectionType: SIGN_OUT_OPTION
        }
      ]
    }
  ]

  return teacherOptions
}