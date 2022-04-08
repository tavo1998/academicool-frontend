import AssistanceItem from "./AssistanceItem"

const AssistanceList = ({ data }) => {
  return (
    <div className="mt-4">
      {!data && <h1 className="text-customGrey text-center mt-4">En la fecha seleccionada no se calificó asistencia</h1> }
      { data && (
          <div>
            <h1 className="text-customGrey font-semibold">Descripción de la clase</h1>
            <p className="text-sm text-customGrey">{data.description}</p>
            { data.students.map(({attended, student}) => <AssistanceItem key={student.id} className="mt-2" attended={attended} student={student} /> )}
          </div>
        )  
      }
    </div>
  )
}

export default AssistanceList