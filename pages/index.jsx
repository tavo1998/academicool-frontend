import { useState } from "react";
import { getAuthenticatedRedirect } from "./../services/user";
import { ADMIN_SECTIONS } from "../config/admin";
import OptionButton from "../components/side_menu/OptionButton";
import SectionHeader from "./../components/side_menu/SectionHeader";
import SideHeader from "../components/side_menu/SideHeader";
import OptionHeader from "../components/admin_dashboard/OptionHeader";
import SearchInput from "../components/admin_dashboard/SearchInput";
import InstitutionCard from "../components/admin_dashboard/InstitutionCard";


const Home = ({ user }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [optionSelected, setOptionSelected] = useState(null)

  const handleOpen = () => {
    setSideBarOpen(!sideBarOpen)
  }

  const handleOptionSelected = (option) => {
    setOptionSelected(option)
  }


  return (
    <div className="relative">
      <div className={`transition-all  duration-75 ease-linear absolute top-0 left-0 h-screen ${sideBarOpen ? 'w-3/4 lg:w-1/4' : 'w-0'} bg-primaryColor ${ sideBarOpen && 'p-4'} overflow-hidden`}>
        <SideHeader name="Gustavo Adolfo Pinto" description="Admin" handleOpen={handleOpen}/>
        <div className="mt-4">
          { ADMIN_SECTIONS.map(section => {
            return (
              <>
                <SectionHeader text={section.name} />
                <ul className="mt-2 mb-2 space-y-2 lg:space-y-0">
                  { section.options.map(option => {
                    return (
                      <li>
                        <OptionButton id={option.id} text={option.name} handleClose={handleOpen} optionSelected={optionSelected} handleOptionSelected={handleOptionSelected}/>
                      </li>
                    )
                  }) }
                </ul>
              </>
            )
          }) }
        </div>
      </div>
      <div className="p-4">
        <OptionHeader />
        <SearchInput />
        <InstitutionCard 
          name="1 - Institución Educativa Cristobal Colón"
          city="Cali"
          address="Calle 25 #33-25"
        />
      </div>
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  //return await getAuthenticatedRedirect(user_auth_token)
  return { props: {} }
}

export default Home
