import { useState } from "react"
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md"
import { createPrevDates, createDates, daysOfWeek, monthsOfYear} from "../../lib/calendar"
import ButtonCalendar from "./ButtonCalendar"

const Calendar = ({ handleDate }) => {
  const [date, setDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSelectedDate = (date) => {
    setSelectedDate(date)
    if(handleDate) handleDate(date)
  }

  const handleNextMoth = () => {
    const newDate = new Date(date)
    newDate.setMonth(date.getMonth(date) + 1)
    setDate(newDate)
  }

  const handlePrevMonth = () => {
    const newDate = new Date(date)
    newDate.setMonth(date.getMonth() - 1)
    setDate(newDate)
  } 

  return (
    <div>
      <div className="flex justify-center items-center space-x-4">
        <button onClick={handlePrevMonth}>
          <MdKeyboardArrowLeft className="text-customGrey h-6 w-6" />
        </button>
        <h1 className="text-customGrey font-semibold">{date.getFullYear()} - {monthsOfYear[date.getMonth()]}</h1>
        <button onClick={handleNextMoth}>
          <MdKeyboardArrowRight className="text-customGrey h-6 w-6" />
        </button>
      </div>
      <div className="grid grid-cols-7 justify-items-center mt-2 gap-y-2">
        { daysOfWeek.map((day, index) => <h1 className="text-customGrey font-semibold" key={index}>{day}</h1>) }
        { 
          [
            ...createPrevDates(date), 
            ...createDates(date)
          ].map((date,i) => <ButtonCalendar selectedDate={selectedDate} handleSelectedDate={handleSelectedDate} key={i} date={date} />)
        }
      </div>
    </div>
  )
}

export default Calendar