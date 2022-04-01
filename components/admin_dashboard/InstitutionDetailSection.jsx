import AccentButton from "../common/AccentButton"
import OptionHeader from "./OptionHeader"
import TextAreaField from "../common/TextAreaField"
import TextInputField from "../common/TextInputField"
import useStore from "../../store"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { INSTITUTION_OPTION } from "../../config/admin"

const InstitutionDetailSection = ({ isEdit }) => {
  const setSectionSelected = useStore(state => state.setSectionSelected)
  const institution = useStore(state => state.sectionSelected.data)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleCancel = () => {
    setSectionSelected(INSTITUTION_OPTION)
  }

  useEffect(() => {
    if(isEdit) {
      reset({ ...institution })
    }
  }, [])

  return (
    <div className="lg:w-1/2 lg:mx-auto">
      <OptionHeader title={`${ isEdit ? "Editar" : "Crear" } Institución`}/>
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
                value: isEdit ? false : true, 
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
                value: isEdit ? false : true, 
                message: "Debes completar este campo" 
              }
            })}
          />
        </div>
        <div className="lg:col-span-2">
          <TextAreaField 
            title="mision"
            rows={6}
            maxLength={280}
            placeholder="Escriba una misión"
            {...register("mision")}
          />
        </div>
        <div className="lg:col-span-2">
          <TextAreaField 
            title="Visión"
            rows={6}
            maxLength={280}
            placeholder="Escriba una visión"
            {...register("vision")}
          />
        </div>
        <div className="flex space-x-2 mt-2 lg:mt-4 lg:col-span-2">
          <AccentButton 
            text="Guardar Cambios"
            type="submit"
          />
          <AccentButton 
            text="Cancelar"
            type="button"
            onClick={handleCancel}
          />
        </div>
      </form>
    </div>
  )
}

export default InstitutionDetailSection