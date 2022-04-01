export const INSTITUTION_OPTION = 'INSTITUTION_OPTION';
export const INSTITUTION_CREATE_OPTION = 'INSTITUTION_CREATE_OPTION';
export const INSTITUTION_UPDATE_OPTION = 'INSTITUTION_UPDATE_OPTION'
export const GRADE_OPTION = 'GRADE_OPTION'
export const SUBJECT_OPTION = 'SUBJECT_OPTION'
export const TEACHER_OPTION = 'TEACHER_OPTION'
export const STUDENT_OPTION = 'STUDENT_OPTION'
export const ATTENDANT_OPTION = 'ATTENDANT_OPTION'
export const PROFILE_OPTION = 'PROFILE_OPTION'
export const SIGN_OUT_OPTION = 'SIGN_OUT_OPTION'

export const ADMIN_OPTIONS = [
  {
    name: 'Administración',
    options: [
      {
        id: INSTITUTION_OPTION,
        name: 'Instituciones',
        sectionType: INSTITUTION_OPTION
      },
      {
        id: GRADE_OPTION,
        name: 'Cursos',
        sectionType: GRADE_OPTION
      },
      {
        id: SUBJECT_OPTION,
        name: 'Asignaturas',
        sectionType: SUBJECT_OPTION
      },
      {
        id: TEACHER_OPTION,
        name: 'Profesores',
        sectionType: TEACHER_OPTION
      },
      {
        id: STUDENT_OPTION,
        name: 'Estudiantes',
        sectionType: STUDENT_OPTION
      },
      {
        id: ATTENDANT_OPTION,
        name: 'Acudientes',
        sectionType: ATTENDANT_OPTION
      }
    ]
  },
  {
    name: 'Configuración',
    options: [
      {
        id: PROFILE_OPTION,
        name: 'Cuenta',
        sectionType: PROFILE_OPTION
      },
      {
        id: SIGN_OUT_OPTION,
        name: 'Cerrar Sesión',
        sectionType: SIGN_OUT_OPTION
      }
    ]
  }
]