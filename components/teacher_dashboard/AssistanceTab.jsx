import { useState } from "react"
import { areEqualDates, getLocalISOString, formatDateString } from "../../lib/calendar"
import AssistanceList from "./AssistanceList"
import Calendar from "../common/Calendar"
import ErrorComponent from "../common/ErrorComponent"
import AssistanceToday from "./AssistanceToday"
import useStore from "../../store"
import useSWR from "swr"
import fetcher from "../../services/fetcher"

const AssistanceTab = () => {
  const subject = useStore(state => state.sectionSelected.data)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const { 
    data, 
    error 
  } = useSWR(
    `/api/v1/subjects/${subject.id}/assistances?date=${formatDateString(getLocalISOString(selectedDate))}`,
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
    if(!data) return <h1 className="text-customGrey text-center mt-4">Cargando asistencias...</h1>
    if(areEqualDates(selectedDate, new Date())){
      return <AssistanceToday data={data.data}/>
    }else {
      return <AssistanceList data={data.data} />
    }
  }

  return (
    <div>
      <h1 className='text-base text-customGrey font-semibold hidden lg:block'>Asistencias</h1>
      <div className="mx-auto lg:w-4/5">
        <Calendar handleDate={handleDate} />
      </div>
      { render() }
    </div>
  )
}

export default AssistanceTab