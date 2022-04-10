import { useState } from "react"
import { formatDateString } from "../../lib/calendar"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

const StudentAssignmentItem = ({className, assignment }) => {
  const [itemExpanded, setItemExpanded] = useState(false)

  const handleExpanded = () => {
    setItemExpanded(!itemExpanded)
  }

  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 lg:p-4 rounded-sm`}>
      <div className="flex text-customGrey justify-between items-start">
        <div className="lg:flex items-center lg:space-x-2">
          <h1 className="text-customGrey text-sm font-semibold lg:text-base">
            {assignment.title}
          </h1>
          <span className="text-customGrey text-xs lg:text-base font-normal">{formatDateString(assignment.created_at)}</span>
        </div>
        <div className="flex items-center space-x-2">
          {
            itemExpanded ?
            <MdKeyboardArrowUp 
                onClick={handleExpanded}
                className="text-customGrey h-6 w-6 lg:hidden"
            /> :
              <MdKeyboardArrowDown
                onClick={handleExpanded}
                className="text-customGrey h-6 w-6 lg:hidden"/> 
          }
        </div>
      </div>
      <h1 className="text-customGrey text-sm">Fecha de entrega: {formatDateString(assignment.delivery_date)}</h1>
      <h1 className="text-customGrey text-sm">
        Calificación: {assignment.scores.length === 0 ? 'No calificado' : assignment.scores[0].score}
      </h1>
      <p 
        className={`${itemExpanded ? 'h-full mt-2' : 'h-0 overflow-hidden'} text-sm text-customGrey lg:h-full lg:mt-2`}>
        { assignment.description }
      </p>
    </div>
  )
}

export default StudentAssignmentItem