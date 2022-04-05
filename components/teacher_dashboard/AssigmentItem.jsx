import { useState  } from 'react';
import { MdModeEdit, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { formatDateString } from '../../lib/calendar';

const AssigmentItem = ({ className, assignment }) => {
  const [itemExpanded, setItemExpanded] = useState(false)

  const handleExpanded = () => {
    setItemExpanded(!itemExpanded)
  }

  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 rounded-sm`}>
      <div className="flex text-customGrey justify-between items-center">
        <h1 className="text-customGrey text-sm font-semibold">
          {assignment.title}
        </h1>
        <div className="flex items-center space-x-2">
          <MdModeEdit className="text-customGrey" />
          {
            itemExpanded ?
             <MdKeyboardArrowUp 
                onClick={handleExpanded}
                className="text-customGrey h-6 w-6"
             /> :
              <MdKeyboardArrowDown
                onClick={handleExpanded}
                className="text-customGrey h-6 w-6"/> 
          }
        </div>
      </div>
      <span className="text-customGrey text-xs font-normal">{formatDateString(assignment.created_at)}</span>
      <h1 className="text-customGrey text-sm">Fecha de entrega: {formatDateString(assignment.delivery_date)}</h1>
      <h1 className="text-customGrey text-sm">Calificación: No calificado</h1>
      <p 
        className={`${itemExpanded ? 'h-full mt-2' : 'h-0 overflow-hidden'} text-sm text-customGrey`}>
        { assignment.description }
      </p>
    </div>
  )
}

export default AssigmentItem