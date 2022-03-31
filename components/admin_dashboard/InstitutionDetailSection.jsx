import { useForm } from "react-hook-form"
import AccentButton from "../common/AccentButton"
import OptionHeader from "./OptionHeader"
import TextAreaField from "../common/TextAreaField"
import TextInputField from "../common/TextInputField"

const InstitutionDetailSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="lg:w-1/2 lg:mx-auto">
      <OptionHeader title="Editar Institución"/>
      <div className="mb-2"/>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
        <div className="lg:col-span-2">
          <TextInputField 
            title="Nombre"
            placeholder="Nombre de la Institución"
            error={errors.name?.message}
            maxLength={100}
            {...register("name", { 
              required: { 
                value: true, 
                message: "Debes completar este campo" 
              }
            })}
          />
        </div>
        <div className="lg:col-span-2">
          <TextInputField 
            title="Dirección"
            placeholder="Dirección"
            maxLength={100}
            error={errors.address?.message}
            {...register("address", { 
              required: { 
                value: true, 
                message: "Debes completar este campo" 
              }
            })}
          />
        </div>
        <div className="lg:col-span-2">
          <TextAreaField 
            title="Misión"
            rows={6}
            maxLength={280}
            placeholder="Escriba una misión"
          />
        </div>
        <div className="lg:col-span-2">
          <TextAreaField 
            title="Visión"
            rows={6}
            maxLength={280}
            placeholder="Escriba una visión"
          />
        </div>
        <div className="flex space-x-2 mt-2 lg:mt-4">
          <AccentButton 
            text="Guardar Cambios"
            type="submit"
          />
          <AccentButton 
            text="Cancelar"
            type="button"
          />
        </div>
      </form>
    </div>
  )
}

export default InstitutionDetailSection