export function getRoleRedirectUrl(role) {
  switch(role) {
    case "TEACHER":
      return '/dashboard/teacher'
    case "ATTENDANT":
      return '/dashboard/attendant'
  }
}
