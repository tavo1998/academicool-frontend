import { useState } from "react"
import { formatDateString, getLocalISOString, addLocalOffset } from "../../lib/calendar"
import { getScoreBgColor } from "../../lib/scoreColor"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { getAssignmentTypeName } from "../../config/teacher"

const StudentAssignmentItem = ({className, assignment }) => {
  const [itemExpanded, setItemExpanded] = useState(false)

  const handleExpanded = () => {
    setItemExpanded(!itemExpanded)
  }

  return (
    <div 
      onClick={handleExpanded} 
      className={`${className} bg-primaryColor bg-opacity-10 p-2 lg:p-4 rounded-sm cursor-pointer lg:cursor-default`}
    >
      <div className="flex text-customGrey justify-between items-start">
        <div className="mb-2 w-4/5 break-words">
          <h1 className="text-customGrey text-sm font-semibold lg:text-base">
            {assignment.title}
          </h1>
          <span className="text-customGrey text-sm  font-normal">
            {formatDateString(getLocalISOString(addLocalOffset(new Date(assignment.created_at))))}
          </span>
        </div>
        <div className="flex justify-end items-center space-x-2 w-1/5">
          {
            itemExpanded ?
            <MdKeyboardArrowUp 
                className="text-customGrey h-6 w-6 lg:hidden"
            /> :
              <MdKeyboardArrowDown
                className="text-customGrey h-6 w-6 lg:hidden"/> 
          }
        </div>
      </div>
      <h1 className="text-customGrey text-sm">
        <span className="font-medium">Tipo:</span> {getAssignmentTypeName(assignment.assignment_type)}
      </h1>
      <h1 className="text-customGrey text-sm">
        <span className="font-medium">Fecha de entrega:</span> {formatDateString(assignment.delivery_date)}
      </h1>
      <h1 className="text-customGrey text-sm">
        <span className="font-medium">Calificación:</span> 
        { 
          assignment.scores.length === 0 ? 
            ' No calificado' : 
            <span className={`${getScoreBgColor(parseFloat(assignment.scores[0].score))} text-white px-3 rounded-full ml-1`}>
              {assignment.scores[0].score}
            </span>
        }
      </h1>
      <h1 className="text-customGrey text-sm">
        <span className="font-medium">Comentario:</span> {assignment.scores.length === 0 ? 'No calificado' : assignment.scores[0].commentary}
      </h1>
      <p 
        className={`${itemExpanded ? 'h-full mt-2' : 'h-0 overflow-hidden'} text-sm text-customGrey lg:h-full lg:mt-2 break-words`}>
        { assignment.description }
      </p>
    </div>
  )
}

export default StudentAssignmentItem