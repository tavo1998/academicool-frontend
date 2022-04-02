import { useEffect, useState } from "react"
import { areEqualDates } from "../../lib/calendar"

const ButtonCalendar = ({ date, prev, handleSelectedDate, selectedDate }) => {
  const [isSelected, setIsSelected] = useState(false)
  const isToday = date.toDateString() === new Date().toDateString()

  useEffect(() => {
    if(selectedDate) {
      setIsSelected(areEqualDates(date, selectedDate))
    }
  }, [date, selectedDate])

  const handleClick = () => {
    handleSelectedDate(date)
  }

  return (
    <button
      onClick={handleClick} 
      className={`${isSelected ? 'bg-primaryColor text-white' : ''} ${isToday && !isSelected ? 'text-primaryColor font-semibold' : ''} ${prev ? 'text-opacity-50' : ''} w-full text-customGrey`}
    >
      {date.getDate()}
    </button>
  )
}

export default ButtonCalendar