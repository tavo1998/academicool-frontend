import { useEffect } from "react"
import { ASSIGNMENT_TAB } from "../../config/common"
import AccentButton from "../common/AccentButton"
import QualifyInput from "../common/QualifyInput"
import useSWR from "swr"
import useStore from "../../store"
import fetcher from "../../services/fetcher"
import updater from "../../services/updater"
import useMutation from "../../hooks/useMutation"
import ErrorComponent from "../common/ErrorComponent"
import creator from "../../services/creator"


const transformDataToPostBody = (inputs, nInvalidInputs) => {
  const data = []
  for(let i = 0; i < inputs.length - nInvalidInputs; i++){
    data.push({ 
      student_id: parseInt(inputs[i].name),
      value: parseFloat(inputs[i].value)
    })
  }
  return data
}

const QualifyAssignment = ({ isEdit }) => {
  const setTabSelected = useStore(state=> state.setTabSelected)
  const currentAssignment = useStore(state=> state.tabSelectedData)
  const currentSubject = useStore(state => state.sectionSelected.data)
  const { 
    data, 
    error 
  } = useSWR(isEdit ? 
      `/api/v1/assignments/${currentAssignment.id}/scores` : 
      `/api/v1/grades/${currentSubject.grade_id}/students`, fetcher
    )
  const { 
    requestOk, 
    isSubmitting, 
    requestError, 
    sendMutation 
  } = useMutation(`/api/v1/assignments/${currentAssignment.id}/scores`, isEdit ? updater : creator)

  const onSubmit = (event) => {
    event.preventDefault()
    const data = transformDataToPostBody(event.target, 2)
    sendMutation(data)
  }

  const renderStudents = () => {
    if(error) return <h1 className="text-customGrey text-center mt-4">Ocurrió un error al traer la información de los estudiantes, intentelo más tarde</h1>
    if(!data) return <h1 className="text-customGrey text-center mt-4">Cargando...</h1>
    if(isEdit) return data.data.map(({ score, student }) => <QualifyInput key={student.id} className="mt-2" score={score} student={student}/>)
    return data.data.map((student) => <QualifyInput key={student.id} className="mt-2" student={student}/>)
  }

  useEffect(() => {
    if(requestOk) setTabSelected(ASSIGNMENT_TAB)
  }, [requestOk])

  return (
    <div>
      <h1 
        className="text-customGrey font-semibold lg:text-base"
      >
        Calificar - Ejercicios de pitagoras
      </h1>
      <form onSubmit={onSubmit}>
        {renderStudents()}
        <div className="flex space-x-2">
          { !error && (
              <AccentButton
                className="py-1 mt-4"
                disabled={isSubmitting}
                text={isSubmitting ? "Cargando" : isEdit ? "Actualizar" : "Calificar"}
              />
          )}
          <AccentButton
            onClick={() => setTabSelected(ASSIGNMENT_TAB)}
            disabled={isSubmitting}
            className="py-1 mt-4"
            text={error ? "Regresar" : "Cancelar"}
            type="button"
          />
        </div>
        { requestError && 
          <ErrorComponent error={requestError}>
            <h1 className="text-customGrey text-center mt-4">
              {isEdit ? 
                "Ocurrió un error al intentar actualizar las calificaciones" :
                "Ocurrió un error al intentar calificar la asignación"
              }
            </h1>
          </ErrorComponent>}
      </form>
    </div>
  )
}

export default QualifyAssignment