import { ADMIN_OPTIONS, INSTITUTION_CREATE_OPTION, INSTITUTION_OPTION, INSTITUTION_UPDATE_OPTION } from "../../config/admin";
import { getRoleRedirectUrl } from "../../lib/redirect";
import SideBar from "../../components/side_menu/SideBar";
import useStore from "../../store";
import InstitutionSection from "../../components/admin_dashboard/InstitutionSection";
import InstitutionDetailSection from "../../components/admin_dashboard/InstitutionDetailSection";
import NoSectionSelected from "./../../components/common/NoSectionSelected";
import { getUserAuthenticated } from "../../services/user";

const AdminDashboard = () => {
  const sectionSelected = useStore(state => state.sectionSelected)
  
  const renderSection = () => {
    switch(sectionSelected.id) {
      case null:
        return <NoSectionSelected />
      case INSTITUTION_OPTION:
        return <InstitutionSection />
      case INSTITUTION_CREATE_OPTION:
        return <InstitutionDetailSection />
      case INSTITUTION_UPDATE_OPTION:
        return <InstitutionDetailSection isEdit/>
      default:
        return <h1>Error</h1>
    }
  }

  return (
    <div className="relative lg:flex">
      <SideBar sections={ADMIN_OPTIONS} />
      <div className="flex-1">
        { renderSection() }
      </div>
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
