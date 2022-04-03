export function getRoleRedirectUrl(role) {
  switch(role) {
    case "ADMIN":
      return '/dashboard/admin'
    case "TEACHER":
      return '/dashboard/teacher'
    case "ATTENDANT":
      return '/dashboard/attendant'
  }
}
