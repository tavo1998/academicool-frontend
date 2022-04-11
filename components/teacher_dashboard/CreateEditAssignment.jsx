import { ASSIGNMENT_TAB } from "../../config/common"
import { formatDateYMD, getLocalDate } from "../../lib/calendar"
import { useForm } from "react-hook-form"
import { useEffect } from "react"
import TextInputField from "../common/TextInputField"
import DateInputField from "../common/DateInputField"
import TextAreaField from "../common/TextAreaField"
import AccentButton from "../common/AccentButton"
import ErrorComponent from "./../../components/common/ErrorComponent"
import useStore from "../../store"
import useMutation from "../../hooks/useMutation"
import creator from "../../services/creator"
import updater from "../../services/updater"


const CreateEditAssignment = ({ isEdit }) => {
  const subject = useStore(state => state.sectionSelected.data)
  const assignmentToUpdate = useStore(state => state.tabSelectedData)
  const setTabSelected = useStore(state => state.setTabSelected)
  const setTabSelectedData = useStore(state => state.setTabSelectedData)

  const { 
    requestOk, 
    isSubmitting, 
    requestError, 
    sendMutation 
  } = useMutation(
    isEdit ? `/api/v1/assignments/${assignmentToUpdate.id}` : `/api/v1/subjects/${subject.id}/assignments`, 
    isEdit ? updater : creator
  )

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    data.delivery_date = new Date(data.delivery_date)
    sendMutation(data)
  }

  useEffect(() => {
    if(assignmentToUpdate && isEdit){
      reset({ ...assignmentToUpdate })
    }
  }, [assignmentToUpdate, isEdit])

  useEffect(() => {
    if(requestOk) setTabSelected(ASSIGNMENT_TAB)
  }, [requestOk])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <h1 className="text-customGrey mb-2 font-semibold">{isEdit ? "Editar Asignación" : "Crear Asignacion"}</h1>
      <TextInputField
        maxLength={100}
        title="Título"
        error={errors.title?.message}
        disabled={isSubmitting}
        placeholder="Ingresa el título"
        {...register('title', {
          required: {
            value: true,
            message: "Debes completar este campo" 
          }
        })}
      />
      <DateInputField 
        title="Fecha de entrega"
        error={errors.delivery_date?.message}
        min={formatDateYMD(getLocalDate())}
        disabled={isSubmitting}
        {...register('delivery_date', {
          required: {
            value: true,
            message: "Debes completar este campo" 
          }
        })}
      />
      <TextAreaField
        title="Descripción"
        placeholder="Escribe una descripción"
        rows={7}
        error={errors.description?.message}
        disabled={isSubmitting}
        maxLength={280}
        {...register('description', {
          required: {
            value: true,
            message: "Debes completar este campo" 
          }
        })}
      />
      <div className="flex space-x-2">
        <AccentButton
          disabled={isSubmitting}
          className="py-1"
          text={isSubmitting ? "Cargando..." : "Guardar Cambios"}/>
        <AccentButton
          disabled={isSubmitting}
          onClick={() => setTabSelected(ASSIGNMENT_TAB)}
          className="py-1"
          text="Cancelar"/>
      </div>
      { requestError && 
        <ErrorComponent error={requestError}>
          <h1 className="text-customGrey text-center mt-4">
            { isEdit ? 
                "Ocurrió un error al intentar editar la asignación, intentelo más tarde" : 
                "Ocurrió un error al intentar crear la asignación, intentelo más tarde"}
            
          </h1>
        </ErrorComponent> 
      }
    </form>
  )
}

export default CreateEditAssignment