import { useEffect } from "react"
import { ASSIGNMENT_TAB } from "../../config/common"
import AccentButton from "../common/AccentButton"
import QualifyInput from "../common/QualifyInput"
import useSWR from "swr"
import useStore from "../../store"
import fetcher from "../../services/fetcher"
import useMutation from "../../hooks/useMutation"
import ErrorComponent from "../common/ErrorComponent"
import creator from "../../services/creator"


const transformDataToPostBody = (inputs, nInvalidInputs) => {
  const data = []
  for(let i = 0; i < inputs.length - nInvalidInputs; i++){
    data.push({ 
      student_id: parseInt(event.target[i].name),
      value: parseFloat(event.target[i].value)
    })
  }
  return data
}

const QualifiedAssignment = ({ isEdit }) => {
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
  } = useMutation(`/api/v1/assignments/${currentAssignment.id}/qualify`, creator)

  const onSubmit = (event) => {
    event.preventDefault()
    const data = transformDataToPostBody(event.target, 2)
    if(isEdit) console.log(data)
    else sendMutation(data)
  }

  useEffect(() => {
    if(requestOk) setTabSelected(ASSIGNMENT_TAB)
  }, [requestOk])

  if(!data) return <h1>Cargando</h1>

  return (
    <div>
      <h1 
        className="text-customGrey font-semibold lg:text-lg"
      >
        Calificar - Ejercicios de pitagoras
      </h1>
      <form onSubmit={onSubmit}>
        { isEdit ? data.data.map(({ score, student }) => <QualifyInput key={student.id} className="mt-2" score={score} student={student}/>)  : 
          data.data.map((student) => <QualifyInput key={student.id} className="mt-2" student={student}/>)
        }
        <div className="flex space-x-2">
          <AccentButton
            className="py-1 mt-4"
            disabled={isSubmitting}
            text={isSubmitting ? "Cargando" : isEdit ? "Actalizar" : "Calificar"}
          />
          <AccentButton
            onClick={() => setTabSelected(ASSIGNMENT_TAB)}
            disabled={isSubmitting}
            className="py-1 mt-4"
            text="Cancelar"
          />
        </div>
        { requestError && 
          <ErrorComponent error={requestError}>
            { console.log(requestError.data) }
            <h1>Ocurrió un error</h1>
          </ErrorComponent>}
      </form>
    </div>
  )
}

export default QualifiedAssignment