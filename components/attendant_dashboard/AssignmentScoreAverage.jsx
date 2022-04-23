import useSWR from "swr"
import fetcher from "../../services/fetcher"
import useStore from "../../store"
import ErrorComponent from "../common/ErrorComponent"
import ScoreAverageItem from "./ScoreAverageItem"

const AssignmentScoreAverage = ({ className, subject }) => {
  const student = useStore(state => state.studentSelected)
  const { data, error } = useSWR(`/api/v1/students/${student.id}/score-average?subject=${subject.id}`, fetcher)

  const render = () => {
    if(error) {
      return (
        <ErrorComponent error={error}>
          <h1 className="text-customGrey text-center mt-4 text-sm">Ocurrió un error al traer los datos, intentalo más tarde</h1>
        </ErrorComponent>
      )
    }
    if(!data) return <h1 className="text-customGrey text-sm text-center mt-4">Cargando promedios...</h1>
    return Object.keys(data.data).map(assignmentType => (
      <ScoreAverageItem
        key={assignmentType}
        assignmentType={assignmentType}
        score={data.data[assignmentType]}
      />
    ))
  }

  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 rounded-sm space-y-2`}>
      <h1 className="text-customGrey text-sm font-semibold break-words">
        {subject.name}
      </h1>
      <div className="h-px bg-customGrey bg-opacity-20 my-1"/>
      {render()}
    </div>
  )
}

export default AssignmentScoreAverage