import { SIGN_OUT_OPTION, PROFILE_OPTION } from "./common"
import { SUBJECT_TEACHER_OPTION } from "./teacher"

export const ASSIGNMENTS_STATISTICS = 'ASSIGNMENTS_STATISTICS'
export const ASSISTANCES_STATISTICS = 'ASSISTANCES_STATISTICS'
export const CHANGE_STUDENT = 'CHANGE_STUDENT'

export const createAttendantSideBarOptions = (subjects) => {
  const attendantOptions = [
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
      name: 'Estadísticas',
      options: [
        {
          id: ASSIGNMENTS_STATISTICS,
          name: "Calificaciones",
          sectionType: ASSIGNMENTS_STATISTICS
        },
        {
          id: ASSISTANCES_STATISTICS,
          name: "Asistencias",
          sectionType: ASSISTANCES_STATISTICS
        }
      ]
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
          id: CHANGE_STUDENT,
          name: "Cambiar de estudiante",
          sectionType: CHANGE_STUDENT
        },
        {
          id: SIGN_OUT_OPTION,
          name: "Cerrar Sesión",
          sectionType: SIGN_OUT_OPTION
        }
      ]
    }
  ]

  return attendantOptions
}