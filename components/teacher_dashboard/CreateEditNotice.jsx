import TextInputField from "../common/TextInputField"
import TextAreaField from "../common/TextAreaField"
import AccentButton from "../common/AccentButton"

const CreateEditNotice = ({ handleCancel }) => {
  return (
      <form className="space-y-2">
      <h1 className="text-customGrey font-semibold mt-3 mb-1">Crear Comunicado</h1>
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
          onClick={handleCancel}
          className="py-1"
          text="Cancelar"/>
      </div>
    </form>
  )
}

export default CreateEditNotice