import { useState } from "react";
import { getAuthenticatedRedirect } from "../../services/user";
import { ADMIN_SECTIONS } from "../../config/admin";
import OptionButton from "../../components/side_menu/OptionButton";
import SectionHeader from "../../components/side_menu/SectionHeader";
import SideHeader from "../../components/side_menu/SideHeader";
import StudentDetailSection from "../../components/admin_dashboard/StudentDetailSection";
import useSideBar from "../../store/sidebar";


const AdminDashboard = ({ user }) => {
  const isOpen = useSideBar(state => state.isOpen)
  const [optionSelected, setOptionSelected] = useState(null)

  const handleOptionSelected = (option) => {
    setOptionSelected(option)
  }


  return (
    <div className="relative lg:flex">
      <div className={`transition-all  duration-75 ease-linear absolute lg:relative top-0 left-0 h-screen ${isOpen ? 'w-3/4 lg:w-1/5' : 'w-0'} bg-primaryColor ${ isOpen && 'p-4'} overflow-hidden`}>
        <SideHeader name="Gustavo Adolfo Pinto" description="Admin"/>
        <div className="mt-4">
          { ADMIN_SECTIONS.map(section => {
            return (
              <div key={section.name}>
                <SectionHeader text={section.name} />
                <ul className="mt-2 mb-2 space-y-2 lg:space-y-3">
                  { section.options.map(option => {
                    return (
                      <li key={option.id}>
                        <OptionButton text={option.name} optionSelected={optionSelected} handleOptionSelected={handleOptionSelected}/>
                      </li>
                    )
                  }) }
                </ul>
              </div>
            )
          }) }
        </div>
      </div>
      <div className="p-4 lg:w-full">
        <StudentDetailSection />
      </div>
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  return await getAuthenticatedRedirect(user_auth_token)
}

export default AdminDashboard
