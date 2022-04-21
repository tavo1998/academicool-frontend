import { useState } from  "react"
import { formatDateString, getLocalISOString } from "../../lib/calendar"
import useStore from "../../store"
import useSWR from "swr"
import fetcher from "../../services/fetcher"
import Calendar from "../common/Calendar"
import ErrorComponent from "../common/ErrorComponent"
import StudentAssistanceStatus from "./StudentAssistanceStatus"

const StudentAssistanceTab = () => {
  const student = useStore(state => state.studentSelected)
  const subject = useStore(state => state.sectionSelected.data)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const { 
    data, 
    error 
  } = useSWR(
    `/api/v1/students/${student.id}/assistances?subject=${subject.id}&date=${formatDateString(getLocalISOString(selectedDate))}`,
    fetcher
  )

  const handleDate = (date) => {
    setSelectedDate(date)
  }

  const render = () => {
    if(error) {
      return (
        <ErrorComponent error={error}>
          <h1 className="text-customGrey text-center mt-4">Ocurrió un error al traer las asistencias, intentalo más tarde</h1>
        </ErrorComponent>
      )
    }
    if(!data) return <h1 className="text-customGrey text-center mt-4">Cargando asistencia...</h1>
    if(!data.data) return <h1 className="text-customGrey text-center mt-4">No se ha calificado asistencia este día</h1>
    if(data.data) return <StudentAssistanceStatus assistance={data.data} />
  }

  return (
    <div>
      <h1 className='text-base text-customGrey font-semibold hidden lg:block'>Asistencias</h1>
      <div className="mx-auto lg:w-3/5">
        <Calendar handleDate={handleDate} />
        {render()}
      </div>
    </div>
  )
}

export default StudentAssistanceTab