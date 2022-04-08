import { useForm } from "react-hook-form"
import { ASSISTANCE_TAB } from "../../config/common"
import { formatDateYMD, getLocalDate } from "../../lib/calendar"
import useStore from "../../store"
import AccentButton from "../common/AccentButton"
import TextAreaField from "../common/TextAreaField"
import AssistanceCheckBox from "./AssistanceCheckBox"

const transformDataToPostBody = (data) => {
  const keys = Object.keys(data)
  const body = { description: null, assistances: [] }
  keys.forEach(key => {
    if(key === 'description') body.description = data[key]
    else body.assistances.push({
      student_id: parseInt(key),
      attended: data[key]
    })
  })
  return body
}

const QualifyAssistance = () => {
  const setTabSelected = useStore(state => state.setTabSelected)
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    const body = transformDataToPostBody(data)
    console.log(body)
  }

  return (
    <div>
      <h1 className="text-customGrey font-semibold">
        Calificar Asistencia - {formatDateYMD(getLocalDate())}
      </h1>
      <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
        <TextAreaField
          title="Descripción de lo visto en clase"
          placeholder="Escribe una descripción"
          error={errors.description?.message}
          {...register('description', {
            required: {
              value: true,
              message: "Debes llenar este campo"
            }
          })}
        />
        <h1 className="text-sm text-customGrey font-semibold my-1">Estudiantes</h1>
        <AssistanceCheckBox
          className="mt-2"
          {...register('1')}
        />
        <AssistanceCheckBox
          className="mt-2"
          {...register('2')}
        />
        <div className="flex space-x-2 mt-4">
          <AccentButton
            className="py-1"
            text="Calificar" 
          />
          <AccentButton
            onClick={() => setTabSelected(ASSISTANCE_TAB)}
            className="py-1"
            text="Cancelar"
            type="button" 
          />
        </div>
      </form>
    </div>
  )
}

export default QualifyAssistance