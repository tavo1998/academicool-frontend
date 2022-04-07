import { useEffect } from "react"
import { NOTICES_TAB } from "../../config/common"
import { useForm } from "react-hook-form"
import TextInputField from "../common/TextInputField"
import TextAreaField from "../common/TextAreaField"
import AccentButton from "../common/AccentButton"
import useStore from "../../store"
import useMutation from "../../hooks/useMutation"
import creator from "../../services/creator"
import updater from "../../services/updater"

const CreateEditNotice = ({ isEdit }) => {
  const subject = useStore(state => state.sectionSelected.data)
  const noticeToUpdate = useStore(state => state.tabSelectedData)
  const setTabSelected = useStore(state => state.setTabSelected)
  const setTabSelectedData = useStore(state => state.setTabSelectedData)

  const { 
    requestOk, 
    isSubmitting, 
    requestError, 
    sendMutation 
  } = useMutation(
    isEdit ? `/api/v1/notices/${noticeToUpdate.id}` : `/api/v1/subjects/${subject.id}/notices`, 
    isEdit ? updater : creator
  )

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    sendMutation(data)
  }

  useEffect(() => {
    if(noticeToUpdate){
      reset({ ...noticeToUpdate })
    }

    return () => setTabSelectedData(null)
  }, [noticeToUpdate])

  useEffect(() => {
    if(requestOk) setTabSelected(NOTICES_TAB)
  }, [requestOk])

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <h1 className="text-customGrey font-semibold mt-3 lg:mt-0 mb-1 lg:text-lg">Crear Comunicado</h1>
      <TextInputField
        maxLength={100}
        title="Título"
        placeholder="Ingresa el título"
        error={errors.title?.message}
        disabled={isSubmitting}
        {...register('title', {
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
        maxLength={280}
        disabled={isSubmitting}
        error={errors.description?.message}
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
          onClick={() => setTabSelected(NOTICES_TAB)}
          className="py-1"
          text="Cancelar"
          type="button"
        />
      </div>
      { requestError && 
        <ErrorComponent error={requestError}>
          <h1>Ocurrió un error al realizar la solicitud, intentelo más tarde</h1>
        </ErrorComponent> 
      }
    </form>
  )
}

export default CreateEditNotice