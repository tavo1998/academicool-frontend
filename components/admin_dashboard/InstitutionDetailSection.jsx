import AccentButton from "../common/AccentButton"
import OptionHeader from "./OptionHeader"
import TextAreaField from "../common/TextAreaField"
import TextInputField from "../common/TextInputField"

const InstitutionDetailSection = () => {
  return (
    <>
      <OptionHeader title="Editar Institución"/>
      <div className="mb-2"/>
      <div className="lg:hidden">
        <TextInputField 
          title="Nombre"
          placeholder="Nombre de la Institución"
        />
        <div className="mb-2"/>
        <div className="flex space-x-2">
          <TextInputField 
            title="Ciudad"
            placeholder="Nombre de la ciudad"
          />
          <TextInputField 
            title="Dirección"
            placeholder="Dirección"
          />
        </div>
        <div className="mb-2"/>
        <TextAreaField 
          title="Misión"
          rows={6}
          maxLength={255}
          placeholder="Escriba una misión"
        />
        <TextAreaField 
          title="Visión"
          rows={6}
          maxLength={255}
          placeholder="Escriba una visión"
        />
        <div className="flex space-x-2 mt-2">
          <AccentButton text="Cancelar"/>
          <AccentButton text="Guardar Cambios"/>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-between space-x-8">
          <TextInputField 
            title="Nombre"
            placeholder="Nombre de la Institución"
          />
          <TextInputField 
              title="Ciudad"
              placeholder="Nombre de la ciudad"
            />
          <TextInputField 
            title="Dirección"
            placeholder="Dirección"
          />
        </div>
        <div className="flex space-x-8 mt-4">
          <TextAreaField 
            title="Misión"
            rows={5}
            maxLength={255}
            placeholder="Escriba una misión"
          />
          <TextAreaField 
            title="Visión"
            rows={5}
            maxLength={255}
            placeholder="Escriba una visión"
          />
        </div>
        <div className="flex justify-center mt-6">
          <div className="w-1/2 flex space-x-8">
            <AccentButton text="Cancelar"/>
            <AccentButton text="Guardar Cambios"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstitutionDetailSection