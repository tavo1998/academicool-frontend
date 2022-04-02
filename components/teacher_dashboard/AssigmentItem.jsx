import { useState  } from 'react';
import { MdModeEdit, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"

const AssigmentItem = ({ className, assignment }) => {
  const [itemExpanded, setItemExpanded] = useState(false)

  const handleExpanded = () => {
    setItemExpanded(!itemExpanded)
  }

  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2`}>
      <div className="flex text-customGrey justify-between items-center">
        <h1 className="text-customGrey text-sm font-semibold">
          Ejercicio Teorema de Pitagoras
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
      <span className="text-customGrey text-xs font-normal">2022-03-12</span>
      <h1 className="text-customGrey text-sm">Fecha de entrega: 2022-03-15</h1>
      <h1 className="text-customGrey text-sm">Calificación: No calificado</h1>
      <p 
        className={`${itemExpanded ? 'h-full mt-2' : 'h-0 overflow-hidden'} text-sm text-customGrey`}>
        Aqui va toda la información respecto a la descripción de la asignación que se ha propuesto
      </p>
    </div>
  )
}

export default AssigmentItem