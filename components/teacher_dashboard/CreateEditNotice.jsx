import TextInputField from "../common/TextInputField"
import TextAreaField from "../common/TextAreaField"
import AccentButton from "../common/AccentButton"
import useStore from "../../store"
import { NOTICES_TAB } from "../../config/common"

const CreateEditNotice = () => {
  const setTabSelected = useStore(state => state.setTabSelected)

  return (
      <form className="space-y-2">
      <h1 className="text-customGrey font-semibold mt-3 mb-1 lg:text-lg">Crear Comunicado</h1>
      <TextInputField
        maxLength={100}
        title="Título"
        placeholder="Ingresa el título"
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
          onClick={() => setTabSelected(NOTICES_TAB)}
          className="py-1"
          text="Cancelar"/>
      </div>
    </form>
  )
}

export default CreateEditNotice