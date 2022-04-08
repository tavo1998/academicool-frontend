import { useState } from "react"
import Calendar from "../common/Calendar"
import AccentButton from "./../common/AccentButton"
import useStore from "../../store"
import { QUALIFY_ASSISTANCE } from "../../config/common"

const AssistanceTab = () => {
  const setTabSelected = useStore(state => state.setTabSelected)
  const [selectedDate, setSelectedDate] = useState(null)
  const handleDate = (date) => {
    setSelectedDate(date)
  }

  return (
    <div>
      <Calendar handleDate={handleDate} />
      { selectedDate ? <h1 className="mt-2">{selectedDate.toString()}</h1>  : <></>}
      <AccentButton
        onClick={() => setTabSelected(QUALIFY_ASSISTANCE)}
        className="py-1 mt-2"
        text="Calificar" 
      />
    </div>
  )
}

export default AssistanceTab