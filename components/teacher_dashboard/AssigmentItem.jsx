import { useState  } from 'react';
import { MdModeEdit, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { EDIT_ASSIGNMENT } from '../../config/common';
import { formatDateString } from '../../lib/calendar';
import useStore from '../../store';
import AccentButton from '../common/AccentButton';

const AssigmentItem = ({ className, assignment }) => {
  const setTabSelected = useStore(state => state.setTabSelected)
  const setTabSelectedData = useStore(state => state.setTabSelectedData)
  const [itemExpanded, setItemExpanded] = useState(false)

  const handleEdit= () =>{
    setTabSelectedData({ ...assignment, delivery_date: formatDateString(assignment.delivery_date)})
    setTabSelected(EDIT_ASSIGNMENT)
  }

  const handleExpanded = () => {
    setItemExpanded(!itemExpanded)
  }

  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 lg:p-4 rounded-sm`}>
      <div className="flex text-customGrey justify-between items-center">
        <div className="lg:flex items-center lg:space-x-2">
          <h1 className="text-customGrey text-sm font-semibold lg:text-base">
            {assignment.title}
          </h1>
          <span className="text-customGrey text-xs lg:text-base font-normal">{formatDateString(assignment.created_at)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={handleEdit}>
            <MdModeEdit className="text-customGrey lg:h-5 lg:w-5" />
          </button>
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
      <h1 className="text-customGrey text-sm lg:text-base">Fecha de entrega: {formatDateString(assignment.delivery_date)}</h1>
      <h1 className="text-customGrey text-sm lg:text-base">Calificación: No calificado</h1>
      <p 
        className={`${itemExpanded ? 'h-full mt-2' : 'h-0 overflow-hidden'} text-sm text-customGrey lg:h-full lg:text-base lg:mt-2`}>
        { assignment.description }
      </p>
      <AccentButton
        className="w-3/12 py-1 mt-2"
        text="Calificar"
        />
    </div>
  )
}

export default AssigmentItem