import SideHeader from "./SideHeader"
import SectionHeader from "./SectionHeader"
import SectionOption from "./SectionOption"
import useStore from "../../store"

const SideBar = ({ sections }) => {
  const isSideBarOpen = useStore(state => state.isSideBarOpen)

  return (
    <div className={`transition-all duration-75 ease-linear absolute lg:relative top-0 left-0 h-screen ${isSideBarOpen ? 'w-3/4 p-4' : 'w-0'} lg:p-4 lg:w-1/5 bg-primaryColor overflow-hidden`}>
      <SideHeader name="Gustavo Adolfo Pinto" description="Admin"/>
      <div className="mt-4">
        { sections.map((section, index) => {
          return (
            <div key={index}>
              <SectionHeader text={section.name} />
              <ul className="mt-2 mb-2 space-y-2 lg:space-y-3">
                { section.options.map((option, index) => {
                  return (
                    <li key={index}>
                      <SectionOption option={option} index={index}/>
                    </li>
                  )
                }) }
              </ul>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default SideBar