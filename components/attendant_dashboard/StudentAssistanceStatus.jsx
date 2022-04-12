import useStore from "../../store"

const StudentAssistanceStatus = ({ assistance }) => {
  const studentSelected = useStore(state => state.studentSelected)

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-customGrey font-semibold mb-2">{studentSelected.first_name} {studentSelected.last_name}</h1>
      {
        assistance.attended ? 
          <h1 className="bg-green-600 text-white p-2 rounded-full">Asistió el día de hoy</h1> :
          <h1 className="bg-red-600 text-white p-2 rounded-full">No asistió a la clase el día de hoy</h1>
      }
    </div>
  )
}

export default StudentAssistanceStatus