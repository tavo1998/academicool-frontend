import { SIGN_OUT_OPTION } from "./common"

export const SUBJECT_TEACHER_OPTION = 'SUBJECT_TEACHER_OPTION'
export const PROFILE_TEACHER_OPTION = 'PROFILE_TEACHER_OPTION'

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