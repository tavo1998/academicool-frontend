import { SUBJECT_TEACHER_OPTION, PROFILE_TEACHER_OPTION, SIGN_OUT_OPTION } from "./common"

export const ASSIGNMENTS_STATISTICS = 'ASSIGNMENTS_STATISTICS'
export const ASSISTANCES_STATISTICS = 'ASSISTANCES_STATISTICS'

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

  return attendantOptions
}