import ButtonTab from "./ButtonTab"

const SubjectTabs = ({className, tabs }) => {
  return (
    <div className={`${className} flex justify-between`}>
      {
        tabs.map(tab => <ButtonTab key={tab.id} id={tab.id} title={tab.name}/>)
      }
    </div>
  )
}

export default SubjectTabs