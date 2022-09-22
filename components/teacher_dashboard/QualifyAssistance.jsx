import { useEffect, useState } from 'react'
import { ASSISTANCE_TAB } from '../../config/common'
import { getLocalISOString, formatDateString } from '../../lib/calendar'
import { useForm } from 'react-hook-form'
import useSWR from 'swr'
import fetcher from '../../services/fetcher'
import useStore from '../../store'
import AccentButton from '../common/AccentButton'
import TextAreaField from '../common/TextAreaField'
import ErrorComponent from '../common/ErrorComponent'
import AssistanceCheckBox from './AssistanceCheckBox'
import useMutation from '../../hooks/useMutation'
import creator from '../../services/creator'
import updater from '../../services/updater'

const QualifyAssistance = ({ isEdit }) => {
  const [assistances, setAssistances] = useState({})
  const assistanceToUpdate = useStore((state) => state.tabSelectedData)
  const currentSubject = useStore((state) => state.sectionSelected.data)
  const setTabSelected = useStore((state) => state.setTabSelected)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const { data, error } = useSWR(
    !isEdit && `/api/v1/grades/${currentSubject.grade_id}/students`,
    fetcher
  )
  const { requestOk, isSubmitting, requestError, sendMutation } = useMutation(
    isEdit
      ? `/api/v1/assistances/${assistanceToUpdate.id}/students`
      : `/api/v1/subjects/${currentSubject.id}/assistances`,
    isEdit ? updater : creator
  )

  const onSubmit = (data) => {
    const body = {
      description: data.description,
      date: getLocalISOString(new Date()),
      assistances: Object.values(assistances),
    }
    sendMutation(body)
  }

  const setInitAssistances = (studentId, attended) => {
    setAssistances((prevState) => ({
      ...prevState,
      [studentId]: {
        student_id: studentId,
        attended,
      },
    }))
  }

  const changeAssistance = (studentId, attended) => {
    setAssistances((prevState) => ({
      ...prevState,
      [studentId]: {
        ...prevState[studentId],
        attended,
      },
    }))
  }

  useEffect(() => {
    if (assistanceToUpdate && isEdit)
      reset({ description: assistanceToUpdate.description })
  }, [isEdit, assistanceToUpdate])

  useEffect(() => {
    if (requestOk) setTabSelected(ASSISTANCE_TAB)
  }, [requestOk])

  const renderStudents = () => {
    if (error)
      return (
        <h1 className="mt-4 text-center text-customGrey">
          Ocurrió un error al traer la información de los estudiantes, intentelo
          más tarde
        </h1>
      )
    if (!data && !isEdit)
      return <h1 className="mt-4 text-center text-customGrey">Cargando...</h1>
    if (isEdit)
      return assistanceToUpdate.students.map(({ attended, student }) => (
        <AssistanceCheckBox
          disabled={isSubmitting}
          key={student.id}
          className="mt-2"
          attended={attended}
          student={student}
          setInitAssistance={setInitAssistances}
          changeAssistance={changeAssistance}
        />
      ))
    return data.data.map((student) => (
      <AssistanceCheckBox
        disabled={isSubmitting}
        key={student.id}
        className="mt-2"
        student={student}
        setInitAssistance={setInitAssistances}
        changeAssistance={changeAssistance}
      />
    ))
  }

  return (
    <div>
      <h1 className="font-semibold text-customGrey">
        Calificar Asistencia - {formatDateString(getLocalISOString(new Date()))}
      </h1>
      <form className="mt-2 h-full" onSubmit={handleSubmit(onSubmit)}>
        <TextAreaField
          title="Descripción de lo visto en clase"
          placeholder="Escribe una descripción"
          name="description"
          rows={8}
          disabled={isSubmitting}
          maxLength={280}
          error={errors.description?.message}
          {...register('description', {
            required: {
              value: true,
              message: 'Debes llenar este campo',
            },
          })}
        />
        <h1 className="my-1 text-sm font-semibold text-customGrey">
          Estudiantes
        </h1>
        {renderStudents()}
        <div className="mt-4 flex space-x-2">
          {!error && (
            <AccentButton
              disabled={isSubmitting}
              className="py-1"
              text={isSubmitting ? 'Cargando' : 'Calificar'}
            />
          )}
          <AccentButton
            onClick={() => setTabSelected(ASSISTANCE_TAB)}
            disabled={isSubmitting}
            className="py-1"
            text={error ? 'Regresar' : 'Cancelar'}
            type="button"
          />
        </div>
      </form>
      {requestError && (
        <ErrorComponent error={requestError}>
          <h1 className="mt-4 text-center text-customGrey">
            {isEdit
              ? 'Ocurrió un error al intentar actualizar las asistencias, inténtalo más tarde'
              : 'Ocurrió un error al intentar calificar la asistencia, inténtalo más tarde'}
          </h1>
        </ErrorComponent>
      )}
    </div>
  )
}

export default QualifyAssistance
