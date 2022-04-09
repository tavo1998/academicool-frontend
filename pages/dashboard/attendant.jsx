import { getUserAuthenticated } from "../../services/user"
import { getRoleRedirectUrl } from "../../lib/redirect"
import { ATTENDANT_ROLE } from "../../config/common"
import SelectStudent from "../../components/attendant_dashboard/SelectStudent"
import useStore from "../../store"

const AttendantDashboard = () => {
  const studentSelected = useStore(state => state.studentSelected)

  if(!studentSelected){
    return (
      <SelectStudent />
    )
  }
  
  return (
    <div>
      Probando
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  const user = await getUserAuthenticated(user_auth_token)

  if(!user) {
    return {
      redirect: { permanent: false, destination: '/login' }
    }
  }

  if(user.role !== ATTENDANT_ROLE) {
    return {
      redirect: { permanent: false, destination: getRoleRedirectUrl(user.role) }
    }
  }

  return {
    props: { 
      user
    }
  }
}

export default AttendantDashboard