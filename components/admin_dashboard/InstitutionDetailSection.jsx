import AccentButton from "../common/AccentButton"
import OptionHeader from "./OptionHeader"
import TextAreaField from "../common/TextAreaField"
import TextInputField from "../common/TextInputField"

const InstitutionDetailSection = () => {
  return (
    <div className="lg:w-1/2 lg:mx-auto">
      <OptionHeader title="Editar Institución"/>
      <div className="mb-2"/>
      <div className="grid grid-cols-1 lg:grid-cols-2 space-y-1 lg:space-y-0 gap-4">
        <TextInputField 
          title="Nombre"
          placeholder="Nombre de la Institución"
        />
        <TextInputField 
          title="Ciudad"
          placeholder="Nombre de la ciudad"
        />
        <div className="lg:col-span-2">
          <TextInputField 
            title="Dirección"
            placeholder="Dirección"
          />
        </div>
        <div className="lg:col-span-2">
          <TextAreaField 
            title="Misión"
            rows={6}
            maxLength={255}
            placeholder="Escriba una misión"
          />
        </div>
        <div className="lg:col-span-2">
          <TextAreaField 
            title="Visión"
            rows={6}
            maxLength={255}
            placeholder="Escriba una visión"
          />
        </div>
      </div>
      <div className="flex space-x-2 mt-2 lg:mt-4">
        <AccentButton text="Cancelar"/>
        <AccentButton text="Guardar Cambios"/>
      </div>
    </div>
  )
}

export default InstitutionDetailSection