import OptionHeader from "./OptionHeader"
import AccentButton from "../common/AccentButton"
import TextInputField from "../common/TextInputField"

const StudentDetailSection = () => {
  return (
    <>
      <OptionHeader title="Editar Estudiante"/>
      <div className="mb-2"/>
      <div className="lg:hidden">
        <TextInputField 
          title="Nombres"
          placeholder="Nombres del estudiante"
        />
        <div className="mt-2"/>
        <TextInputField 
          title="Apellidos"
          placeholder="Apellidos del estudiante"
        />
        <div className="mt-2"/>
        <TextInputField 
          title="Número de identificación"
          placeholder="Número de idetificación del estudiante"
        />
        <div className="mt-2"/>
        <TextInputField 
          title="Teléfono"
          placeholder="Número de teléfono"
        />
        <div className="mt-2"/>
        <TextInputField 
          title="Email"
          placeholder="Correo Electrónico"
        />
        <div className="mt-2"/>
        <TextInputField 
          title="Dirección"
          placeholder="Dirección de residencia"
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
            placeholder="Nombres del estudiante"
          />
          <TextInputField 
            title="Apellidos"
            placeholder="Apellidos del estudiante"
          />
          <TextInputField 
            title="Número de identificación"
            placeholder="Número de idetificación del estudiante"
          />
        </div>
        <div className="flex justify-between space-x-8 mt-4">
          <TextInputField 
            title="Teléfono"
            placeholder="Número de teléfono"
          />
          <TextInputField 
            title="Email"
            placeholder="Correo Electrónico"
          />
          <TextInputField 
            title="Dirección"
            placeholder="Dirección de residencia"
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

export default StudentDetailSection