import { useState } from "react"
import Calendar from "../common/Calendar"
import AssistanceCheckBox from "./AssitanceCheckBox"

const AssistanceTab = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const handleDate = (date) => {
    setSelectedDate(date)
  }

  return (
    <div>
      <Calendar handleDate={handleDate} />
      { selectedDate ? <h1 className="mt-2">{selectedDate.toString()}</h1>  : <></>}
      <AssistanceCheckBox
        className="mt-2"
      />
      <AssistanceCheckBox
        className="mt-2"
      />
      <AssistanceCheckBox
        className="mt-2"
      />
      
    </div>
  )
}

export default AssistanceTab