import { ADMIN_OPTIONS, INSTITUTION_CREATE_OPTION, INSTITUTION_OPTION, INSTITUTION_UPDATE_OPTION } from "../../config/admin";
import { getAuthRedirectResponse, getRoleRedirectUrl } from "../../lib/redirect";
import SideBar from "../../components/side_menu/SideBar";
import useStore from "../../store";
import InstitutionSection from "../../components/admin_dashboard/InstitutionSection";
import InstitutionDetailSection from "../../components/admin_dashboard/InstitutionDetailSection";
import { getUserAuthenticated } from "../../services/user";

const AdminDashboard = () => {
  const sectionSelected = useStore(state => state.sectionSelected)
  
  const renderSection = () => {
    if(sectionSelected.id === null) return <h1>Ninguna opción seleccionada</h1>
    if(sectionSelected.id === INSTITUTION_OPTION) return <InstitutionSection />
    if(sectionSelected.id === INSTITUTION_CREATE_OPTION) return <InstitutionDetailSection />
    if(sectionSelected.id === INSTITUTION_UPDATE_OPTION) return <InstitutionDetailSection isEdit/>
  }

  return (
    <div className="relative lg:flex">
      <SideBar sections={ADMIN_OPTIONS} />
      <div className="p-4 lg:w-full">
        { renderSection() }
      </div>
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  const user = await getUserAuthenticated(user_auth_token)

  console.log(user)

  if(!user) {
    return {
      redirect: { permanent: false, destination: '/login' }
    }
  }

  if(user.role !== 'ADMIN') {
    return {
      redirect: { permanent: false, destination: getRoleRedirectUrl(user.role) }
    }
  }

  return {
    props: { user }
  }
}

export default AdminDashboard
