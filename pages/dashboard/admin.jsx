import { ADMIN_OPTIONS, INSTITUTION_CREATE_OPTION, INSTITUTION_OPTION } from "../../config/admin";
import { getAuthenticatedRedirect } from "../../services/user";
import SideBar from "../../components/side_menu/SideBar";
import useStore from "../../store";
import InstitutionSection from "../../components/admin_dashboard/InstitutionSection";
import InstitutionDetailSection from "../../components/admin_dashboard/InstitutionDetailSection";

const AdminDashboard = () => {
  const sectionSelected = useStore(state => state.sectionSelected)
  
  const renderSection = () => {
    if(sectionSelected.id === null) return <h1>Ninguna opción seleccionada</h1>
    if(sectionSelected.id === INSTITUTION_OPTION) return <InstitutionSection />
    if(sectionSelected.id === INSTITUTION_CREATE_OPTION) return <InstitutionDetailSection />
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

  return await getAuthenticatedRedirect(user_auth_token)
}

export default AdminDashboard
