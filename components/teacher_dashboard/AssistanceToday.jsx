import { EDIT_ASSISTANCE, QUALIFY_ASSISTANCE } from "../../config/common"
import AccentButton from "../common/AccentButton"
import useStore from "../../store"
import AssistanceItem from "./AssistanceItem"

const AssistanceToday = ({ data }) => {
  const setTabSelected =  useStore(state => state.setTabSelected)
  const setTabSelectedData =  useStore(state => state.setTabSelectedData)

  const handleCreateEditButton = () => {
    if(data) {
      setTabSelected(EDIT_ASSISTANCE)
      setTabSelectedData(data)
    }else {
      setTabSelected(QUALIFY_ASSISTANCE)
    }
  }

  return (
    <div className="mt-4">
      { !data && <h1 className="text-center text-customGrey">Hoy no se ha calificado asistencia</h1> }
      { data && (
          <div>
            <h1 className="text-customGrey font-semibold">Descripción de la clase</h1>
            <p className="text-sm text-customGrey">{data.description}</p>
            { data.students.map(({attended, student}) => <AssistanceItem key={student.id} className="mt-2" attended={attended} student={student} /> )}
          </div>
        )  
      }
      <AccentButton
        className="py-1 mt-2"
        onClick={handleCreateEditButton}
        text={data ? "Editar Calificación" : "Calificar"}
      />
    </div>
  )
}

export default AssistanceToday