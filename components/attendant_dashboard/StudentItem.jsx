import useStore from "../../store"

const StudentItem = ({ student }) => {
  const setIsSideBarOpen = useStore(state => state.setIsSideBarOpen)
  const isSideBarOpen = useStore(state => state.isSideBarOpen)
  const setStudentSelected = useStore(state => state.setStudentSelected)

  const handleClick = () => {
    setStudentSelected(student)
    if(!isSideBarOpen) {
      setIsSideBarOpen()
    }
  }

  return (
    <button
      onClick={handleClick} 
      className="w-3/5 lg:w-2/5 flex flex-col items-center bg-primaryColor bg-opacity-10 p-4 rounded-md">
      <div className="rounded-full bg-customGrey bg-opacity-30 h-20 w-20" />
      <h1 className="text-customGrey font-semibold mt-2">{student.first_name} {student.last_name}</h1>
      <h1 className="text-customGrey text-sm">Grado: {student.grade.name}</h1>
    </button>
  )
}

export default StudentItem