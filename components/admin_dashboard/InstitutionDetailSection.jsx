import AccentButton from "../common/AccentButton"
import OptionHeader from "./OptionHeader"
import TextAreaField from "../common/TextAreaField"
import TextInputField from "../common/TextInputField"
import ErrorComponent from "../common/ErrorComponent"
import useStore from "../../store"
import creator from "./../../services/creator"
import updater from "./../../services/updater"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { INSTITUTION_OPTION } from "../../config/admin"
import { useState } from "react"

const InstitutionDetailSection = ({ isEdit }) => {
  const setSectionSelected = useStore(state => state.setSectionSelected)
  const institution = useStore(state => state.sectionSelected.data)
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const [ requestError, setRequestError ] = useState(null)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if(isEdit) {
      reset({ ...institution })
    }
  }, [])

  const onSubmit = async (data) => {
    if(requestError) setRequestError(null)
    setIsSubmitting(true)
    try {
      if(isEdit) await updater(`/api/v1/institutions/${institution.id}`, data)
      else await creator('/api/v1/institutions', data)
      setSectionSelected(INSTITUTION_OPTION)
    } catch (e) {
      console.log(e)
      setRequestError(e)
    }
    setIsSubmitting(false)
  }


  const handleCancel = () => {
    setSectionSelected(INSTITUTION_OPTION)
  }

  return (
    <div className="lg:w-1/2 lg:mx-auto">
      <OptionHeader title={`${ isEdit ? "Editar" : "Crear" } Institución`}/>
      <div className="mb-2"/>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
        <div className="lg:col-span-2">
          <TextInputField 
            title="Nombre"
            placeholder="Nombre de la Institución"
            maxLength={100}
            error={errors.name?.message}
            disabled={ isSubmitting }
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
            disabled={ isSubmitting }
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
            disabled={ isSubmitting }
            {...register("mision")}
          />
        </div>
        <div className="lg:col-span-2">
          <TextAreaField 
            title="Visión"
            rows={6}
            maxLength={280}
            placeholder="Escriba una visión"
            disabled={ isSubmitting }
            {...register("vision")}
          />
        </div>
        <div className="flex space-x-2 mt-2 lg:mt-4 lg:col-span-2">
          <AccentButton 
            text={isSubmitting ? "Cargando..." : "Guardar Cambios"}
            type="submit"
            disabled={isSubmitting}
          />
          <AccentButton 
            text="Cancelar"
            type="button"
            onClick={handleCancel}
          />
        </div>
        <div className="mt-2 lg:col-span-2">
        { requestError && 
            <ErrorComponent error={requestError}>
              <h1>Ocurrió un error al realizar la solicitud, intentelo más tarde</h1>
            </ErrorComponent> 
        }
        </div> 
      </form>
    </div>
  )
}

export default InstitutionDetailSection