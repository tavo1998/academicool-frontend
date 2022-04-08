import { useState } from "react"
import { areEqualDates, formatDateYMD, getLocalDate } from "../../lib/calendar"
import AssistanceList from "./AssistanceList"
import Calendar from "../common/Calendar"
import ErrorComponent from "../common/ErrorComponent"
import AssistanceToday from "./AssistanceToday"
import useStore from "../../store"
import useSWR from "swr"
import fetcher from "../../services/fetcher"

const getAssistancesUrl = (subjectId, date) => {
  return `/api/v1/subjects/${subjectId}/assistances?date=${formatDateYMD(date)}`
}

const AssistanceTab = () => {
  const subject = useStore(state => state.sectionSelected.data)
  const [selectedDate, setSelectedDate] = useState(getLocalDate())
  const { data, error } = useSWR(getAssistancesUrl(subject.id, selectedDate), fetcher)

  const handleDate = (date) => {
    setSelectedDate(date)
  }

  if(error) {
    return (
      <ErrorComponent error={error}>
        <h1>Ocurrió un error</h1>
      </ErrorComponent>
    )
  }

  const render = () => {
    if(!data) return <h1>Cargando</h1>

    if(areEqualDates(selectedDate, getLocalDate())){
      return <AssistanceToday data={data.data}/>
    }else {
      return <AssistanceList data={data.data} />
    }
  }

  return (
    <div>
      <Calendar handleDate={handleDate} />
      { render() }
    </div>
  )
}

export default AssistanceTab