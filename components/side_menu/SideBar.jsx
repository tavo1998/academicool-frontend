import SideHeader from "./SideHeader"
import SideBarOptionTitle from "./SideBarOptionTitle"
import SectionOption from "./SectionOption"
import useStore from "../../store"
import GradeDirectorHeader from "./GradeDirectorHeader"

const SideBar = ({ sections }) => {
  const isSideBarOpen = useStore(state => state.isSideBarOpen)

  return (
    <div className={`transition-all duration-75 ease-linear fixed lg:relative top-0 left-0 h-screen overflow-y-auto ${isSideBarOpen ? 'w-3/4 p-4' : 'w-0'} lg:p-4 lg:w-1/5 bg-primaryColor overflow-hidden`}>
      <SideHeader/>
      <GradeDirectorHeader/>
      <div className="mt-4">
        { sections.map((section, index) => {
          return (
            <div key={index}>
              <SideBarOptionTitle text={section.name} />
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