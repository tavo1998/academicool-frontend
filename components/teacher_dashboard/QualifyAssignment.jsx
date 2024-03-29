import { useEffect, useState } from "react"
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

const QualifyAssignment = ({ isEdit }) => {
  const [scores, setScores] = useState({})
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
    const data = Object.values(scores)
    sendMutation(data)
  }

  const setInitScores = (studentId, score, commentary) => {
    setScores(prevState => ({
      ...prevState,
      [studentId]: {
        student_id: studentId,
        value: parseFloat(score),
        commentary
      }
    }))
  }

  const changeScore = (studentId, score) => {
    setScores(prevState => ({
      ...prevState,
      [studentId]: {
        ...prevState[studentId],
        value: parseFloat(score)
      }
    }))
  }

  const changeCommentary = (studentId, commentary) => {
    setScores(prevState => ({
      ...prevState,
      [studentId]: {
        ...prevState[studentId],
        commentary
      }
    }))
  }

  const renderStudents = () => {
    if(error) return <h1 className="text-customGrey text-center mt-4">Ocurrió un error al traer la información de los estudiantes, intentelo más tarde</h1>
    if(!data) return <h1 className="text-customGrey text-center mt-4">Cargando...</h1>
    if(isEdit) return data.data.map(({ score, commentary, student }) => (
      <QualifyInput 
        key={student.id} 
        className="mt-2" 
        defaultScore={score}
        defaultCommentary={commentary}
        student={student}
        changeScore={changeScore}
        changeCommentary={changeCommentary}
        setInitScores={setInitScores}
      />
    ))
    return data.data.map((student) => (
      <QualifyInput 
        key={student.id} 
        className="mt-2" 
        student={student}
        changeScore={changeScore}
        changeCommentary={changeCommentary}
        setInitScores={setInitScores}
      />
    ))
  }

  useEffect(() => {
    if(requestOk) setTabSelected(ASSIGNMENT_TAB)
  }, [requestOk])

  return (
    <div>
      <h1 
        className="text-customGrey font-semibold lg:text-base"
      >
        Calificar - {currentAssignment.title}
      </h1>
      <p className="mt-1 text-customGrey text-sm">{currentAssignment.description}</p>
      <div className="bg-customGrey opacity-20 h-[1px] my-2" />
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