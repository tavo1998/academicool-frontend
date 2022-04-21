import { useState  } from 'react';
import { MdModeEdit, MdDelete, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { EDIT_ASSIGNMENT, EDIT_ASSIGNMENT_SCORE, QUALIFY_ASSIGNMENT } from '../../config/common';
import { getAssignmentTypeName } from './../../config/teacher'
import { addLocalOffset, formatDateString, getLocalISOString } from '../../lib/calendar';
import useStore from '../../store';
import AccentButton from '../common/AccentButton';

const AssigmentItem = ({ className, assignment, handleDelete }) => {
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

  const handleQualification = () => {
    if(assignment.is_qualified) setTabSelected(EDIT_ASSIGNMENT_SCORE)
    else setTabSelected(QUALIFY_ASSIGNMENT)
    setTabSelectedData(assignment)
  }

  return (
    <div
      onClick={handleExpanded} 
      className={`${className} bg-primaryColor bg-opacity-10 p-2 lg:p-4 rounded-sm cursor-pointer lg:cursor-default`}
    >
      <div className="flex text-customGrey justify-between items-start">
        <div className='mb-2'>
          <h1 className="text-customGrey text-sm font-semibold lg:text-base">
            {assignment.title}
          </h1>
          <span className="text-customGrey text-sm font-normal">
            {formatDateString(getLocalISOString(addLocalOffset(new Date(assignment.created_at))))}
          </span>
        </div>
        <div className="flex items-start space-x-2">
          <button onClick={handleEdit}>
            <MdModeEdit className="text-customGrey" />
          </button>
          <button onClick={() => handleDelete(assignment)}>
            <MdDelete className="text-customGrey" />
          </button>
          {
            itemExpanded ?
            <MdKeyboardArrowUp
                className="text-customGrey h-5 w-5 lg:hidden"
            /> :
              <MdKeyboardArrowDown
                className="text-customGrey h-5 w-5 lg:hidden"/> 
          }
        </div>
      </div>
      <h1 className="text-customGrey text-sm">Tipo: {getAssignmentTypeName(assignment.assignment_type)}</h1>
      <h1 className="text-customGrey text-sm">Fecha de entrega: {formatDateString(assignment.delivery_date)}</h1>
      <h1 className="text-customGrey text-sm">Calificación: {assignment.is_qualified ? 'Calificado' : 'No calificado'} </h1>
      <p 
        className={`${itemExpanded ? 'h-full mt-2' : 'h-0 overflow-hidden'} text-sm text-customGrey lg:h-full lg:mt-2`}>
        { assignment.description }
      </p>
      <AccentButton
        onClick={handleQualification}
        className="w-auto px-2 py-1 mt-2"
        text={assignment.is_qualified ? "Ver calificacion": "Calificar"}
        />
    </div>
  )
}

export default AssigmentItem