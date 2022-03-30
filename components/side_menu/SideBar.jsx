import SideHeader from "./SideHeader"
import SectionHeader from "./SectionHeader"
import OptionButton from "./OptionButton"
import useSideBar from "../../store/sidebar"

const SideBar = ({ sections }) => {
  const isOpen = useSideBar(state => state.isOpen)
  const optionSelected = useSideBar(state => state.optionSelected)

  console.log(optionSelected)

  return (
    <div className={`transition-all duration-75 ease-linear absolute lg:relative top-0 left-0 h-screen ${isOpen ? 'w-3/4 p-4' : 'w-0'} lg:p-4 lg:w-1/5 bg-primaryColor overflow-hidden`}>
      <SideHeader name="Gustavo Adolfo Pinto" description="Admin"/>
      <div className="mt-4">
        { sections.map(section => {
          return (
            <div key={section.name}>
              <SectionHeader text={section.name} />
              <ul className="mt-2 mb-2 space-y-2 lg:space-y-3">
                { section.options.map(option => {
                  return (
                    <li key={option.id}>
                      <OptionButton option={option}/>
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