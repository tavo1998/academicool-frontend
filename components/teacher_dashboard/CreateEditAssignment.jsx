import TextInputField from "../common/TextInputField"
import DateInputField from "../common/DateInputField"
import TextAreaField from "../common/TextAreaField"
import { formatDateYMD } from "../../lib/calendar"
import AccentButton from "../common/AccentButton"
import useStore from "../../store"
import { ASSIGNMENT_TAB } from "../../config/common"

const CreateEditAssignment = ({ handleCancel }) => {
  const setTabSelected = useStore(state => state.setTabSelected)

  return (
    <form className="space-y-2">
      <h1 className="text-customGrey font-semibold lg:text-lg">Crear Asignacion</h1>
      <TextInputField
        maxLength={100}
        title="Título"
        placeholder="Ingresa el título"
      />
      <DateInputField 
        title="Fecha de entrega"
        min={formatDateYMD(new Date())}
      />
      <TextAreaField
        title="Descripción"
        placeholder="Escribe una descripción"
        rows={7}
        maxLength={280}
      />
      <div className="flex space-x-2">
        <AccentButton
          className="py-1"
          text="Crear"/>
        <AccentButton
          onClick={() => setTabSelected(ASSIGNMENT_TAB)}
          className="py-1"
          text="Cancelar"/>
      </div>
    </form>
  )
}

export default CreateEditAssignment