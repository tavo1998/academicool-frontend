import { PROFILE_OPTION, SIGN_OUT_OPTION, SUBJECT_OPTION, SUPPORT_OPTION } from "./common"

export const EXAM = 'EXAM'
export const HOMEWORK = 'HOMEWORK'
export const WORKSHOP = 'WORKSHOP'
export const LECTURE = 'LECTURE'
export const PARTICIPATION = 'PARTICIPATION'
export const QUIZ = 'QUIZ'
export const PROJECT = 'PROJECT'

export const ASSIGNMENT_TYPES = [
  HOMEWORK,
  WORKSHOP,
  LECTURE,
  EXAM,
  PARTICIPATION,
  QUIZ,
  PROJECT
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
    case QUIZ:
      return "Quiz"
    case PROJECT:
      return "Proyecto"
  }
}

export const createTeacherSideBarOptions = (subjects) => {
  const teacherOptions = [
    {
      name: 'Asignaturas',
      options: subjects.map(subject => ({
        id: subject.id,
        name: subject.name,
        sectionType: SUBJECT_OPTION,
        data: subject
      }))
    },
    {
      name: 'Configuración',
      options: [
        {
          id: PROFILE_OPTION,
          name: "Cuenta",
          sectionType: PROFILE_OPTION
        },
        {
          id: SUPPORT_OPTION,
          name: "Soporte",
          sectionType: SUPPORT_OPTION
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