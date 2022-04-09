import { useEffect } from "react"
import { ASSISTANCE_TAB } from "../../config/common"
import { formatDateYMD, getLocalDate } from "../../lib/calendar"
import { useForm } from "react-hook-form"
import useSWR from "swr"
import fetcher from "../../services/fetcher"
import useStore from "../../store"
import AccentButton from "../common/AccentButton"
import TextAreaField from "../common/TextAreaField"
import ErrorComponent from "../common/ErrorComponent"
import AssistanceCheckBox from "./AssistanceCheckBox"
import useMutation from "../../hooks/useMutation"
import creator from "../../services/creator"
import updater from "../../services/updater"

const transformDataToPostBody = (data) => {
  const body = { description: null, assistances: [] }
  const keys = Object.keys(data)
  keys.forEach(key => {
    if(key === 'description') body.description = data[key]
    else body.assistances.push({
      student_id: parseInt(key),
      attended: data[key]
    })
  })
  return body
}

const QualifyAssistance = ({ isEdit }) => {
  const assistanceToUpdate = useStore(state => state.tabSelectedData)
  const currentSubject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { 
    data, 
    error 
  } = useSWR(!isEdit && `/api/v1/grades/${currentSubject.grade_id}/students`, fetcher)
  const { 
    requestOk, 
    isSubmitting, 
    requestError, 
    sendMutation 
  } = useMutation(isEdit ? 
        `/api/v1/assistances/${assistanceToUpdate.id}/students` : 
        `/api/v1/subjects/${currentSubject.id}/assistances`, isEdit ? updater : creator)

  const onSubmit = (data) => {
    const body = transformDataToPostBody(data)
    sendMutation(body)
  }

  const renderStudents = () => {
    if(error) return <h1 className="text-customGrey text-center mt-4">Ocurrió un error al traer la información de los estudiantes, intentelo más tarde</h1>
    if(!data && !isEdit) return <h1 className="text-customGrey text-center mt-4">Cargando...</h1>
    if(isEdit) return (
      assistanceToUpdate.students.map(({attended, student}) => 
        <AssistanceCheckBox
          disabled={isSubmitting}
          key={student.id} 
          className="mt-2"
          attended={attended}
          student={student} 
          {...register(student.id.toString())} 
        />
      )
    )
    return (
      data.data.map(student => 
        <AssistanceCheckBox
          disabled={isSubmitting}
          key={student.id} 
          className="mt-2" 
          student={student} 
          {...register(student.id.toString())} 
        />
      )
    )
  }

  useEffect(() => {
    if(assistanceToUpdate) reset({ description:  assistanceToUpdate.description })
  }, [isEdit, assistanceToUpdate])

  useEffect(() => {
    if(requestOk) setTabSelected(ASSISTANCE_TAB)
  }, [requestOk])

  return (
    <div>
      <h1 className="text-customGrey font-semibold">
        Calificar Asistencia - {formatDateYMD(getLocalDate())}
      </h1>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <TextAreaField
          title="Descripción de lo visto en clase"
          placeholder="Escribe una descripción"
          name="description"
          rows={8}
          maxLength={280}
          error={errors.description?.message}
          {...register('description', {
            required: {
              value: true,
              message: "Debes llenar este campo"
            }
          })}
        />
        <h1 className="text-sm text-customGrey font-semibold my-1">Estudiantes</h1>
        { renderStudents() }
        <div className="flex space-x-2 mt-4">
          { !error && (
              <AccentButton
                className="py-1"
                text="Calificar" 
              />
          )}
          <AccentButton
            onClick={() => setTabSelected(ASSISTANCE_TAB)}
            className="py-1"
            text={error ? "Regresar" : "Cancelar"}
            type="button" 
          />
        </div>
      </form>
      { requestError && 
        <ErrorComponent error={requestError}>
          <h1 className="text-customGrey text-center mt-4">
            {isEdit ? 
              "Ocurrió un error al intentar actualizar las asistencias, inténtalo más tarde" :
              "Ocurrió un error al intentar calificar la asistencia, inténtalo más tarde"
            }
          </h1>
        </ErrorComponent>
      }
    </div>
  )
}

export default QualifyAssistance