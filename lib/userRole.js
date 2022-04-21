import { ATTENDANT_ROLE, TEACHER_ROLE } from "../config/common";

export const getUserRoleName = (role) => {
  switch(role) {
    case TEACHER_ROLE:
      return "Profesor"
    case ATTENDANT_ROLE:
      return "Estudiante"
  }
}