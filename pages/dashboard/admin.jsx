import { ADMIN_SECTIONS, INSTITUTION_CREATE_OPTION, INSTITUTION_OPTION } from "../../config/admin";
import { getAuthenticatedRedirect } from "../../services/user";
import SideBar from "../../components/side_menu/SideBar";
import useSideBar from "../../store/sidebar";
import InstitutionSection from "../../components/admin_dashboard/InstitutionSection";
import InstitutionDetailSection from "../../components/admin_dashboard/InstitutionDetailSection";

const AdminDashboard = () => {
  const optionSelected = useSideBar(state => state.optionSelected)

  console.log(optionSelected)
  const renderSection = () => {
    if(optionSelected === null) return <h1>Ninguna opción seleccionada</h1>
    if(optionSelected === INSTITUTION_OPTION) return <InstitutionSection />
    if(optionSelected === INSTITUTION_CREATE_OPTION) return <InstitutionDetailSection />
  }

  return (
    <div className="relative lg:flex">
      <SideBar sections={ADMIN_SECTIONS} />
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
