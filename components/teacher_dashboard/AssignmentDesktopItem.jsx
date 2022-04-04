import { MdModeEdit } from "react-icons/md"
import AccentButton from "../common/AccentButton"

const AssignmentDesktopItem = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between">
        <h1 className="text-customGrey font-semibold">
          Ejercicio teorema de pitagoras<span className="text-sm font-normal"> - 2022/03/04</span>
        </h1>
        <div className="flex items-center space-x-2">
          <MdModeEdit className="h-5 w-5 text-customGrey"/>
          <AccentButton
            className="w-auto px-2 py-1" 
            text="Calificar"/>
        </div>
      </div>
      <h1 className="text-customGrey">Fecha de entrega: 2022/03/15</h1>
      <h1 className="text-customGrey">Calificación: Pendiente</h1>
      <p className="mt-2 text-customGrey">
        Realizar los ejercicios propuestos sobre el teorema de pitagoras planteado en la clase anterior, ademas deben justificar por qué
      </p>
      <div className="bg-customGrey opacity-30 h-[1px] mt-2" />
    </div>
  )
}

export default AssignmentDesktopItem