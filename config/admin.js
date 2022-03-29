const INSTITUTION_OPTION = 'INSTITUTION_OPTION';
const GRADE_OPTION = 'GRADE_OPTION'
const SUBJECT_OPTION = 'SUBJECT_OPTION'
const TEACHER_OPTION = 'TEACHER_OPTION'
const STUDENT_OPTION = 'STUDENT_OPTION'
const ATTENDANT_OPTION = 'ATTENDANT_OPTION'

export const ADMIN_SECTIONS = [
  {
    name: 'Administración',
    options: [
      {
        id: INSTITUTION_OPTION,
        name: 'Instituciones',
      },
      {
        id: GRADE_OPTION,
        name: 'Cursos',
      },
      {
        id: SUBJECT_OPTION,
        name: 'Asignaturas',
      },
      {
        id: TEACHER_OPTION,
        name: 'Profesores',
      },
      {
        id: STUDENT_OPTION,
        name: 'Estudiantes',
      },
      {
        id: ATTENDANT_OPTION,
        name: 'Acudientes',
      }
    ]
  },
  {
    name: 'Configuración',
    options: [
      {
        id: 'PROFILE',
        name: 'Cuenta'
      },
      {
        id: 'SIGN_OUT',
        name: 'Cerrar Sesión'
      }
    ]
  }
]