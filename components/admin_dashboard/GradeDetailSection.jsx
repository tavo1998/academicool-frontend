import AccentButton from "../common/AccentButton"
import OptionHeader from "./OptionHeader"
import TextInputField from "../common/TextInputField"

const GradeDetailSection = () => {
  return (
    <>
      <OptionHeader title="Editar Grado"/>
      <div className="mb-2"/>
      <div className="lg:hidden">
        <TextInputField 
          title="Nombre"
          placeholder="Nombre del Grado"
        />
        <div className="mb-2"/>
        <div className="flex space-x-2 mt-4">
          <AccentButton text="Cancelar"/>
          <AccentButton text="Guardar Cambios"/>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-between space-x-8">
          <TextInputField 
            title="Nombre"
            placeholder="Nombre del grado"
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

export default GradeDetailSection