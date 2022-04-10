import { ADMIN_ROLE, ATTENDANT_ROLE, TEACHER_ROLE } from "../config/common";

export const getUserRoleName = (role) => {
  switch(role) {
    case TEACHER_ROLE:
      return "Profesor"
    case ATTENDANT_ROLE:
      return "Acudiente"
    case ADMIN_ROLE:
      return "Administrador"
  }
}