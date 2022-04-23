import useSWR from "swr"
import fetcher from "../../services/fetcher"
import useStore from "../../store"
import ErrorComponent from "./../common/ErrorComponent"
import PieChart from "./PieChart"

const AssistanceScore = ({ className, subject }) => {
  const student = useStore(state => state.studentSelected)
  const { data, error} = useSWR(`/api/v1/students/${student.id}/assistance-score?subject=${subject.id}`, fetcher)

  const render = () => {
    if(error) {
      return (
        <ErrorComponent error={error}>
          <h1 className="text-customGrey text-center mt-4 text-sm">Ocurrió un error al traer los datos, intentalo más tarde</h1>
        </ErrorComponent>
      )
    }
    if(!data) return (
      <h1 className="text-customGrey text-sm text-center mt-4">
        Cargando estadísticas...
      </h1>
    )
    if(data.data.attended === 0 && data.data.notAttended == 0) return (
      <h1 className="text-customGrey text-sm text-center mt-4">
        No se han calificado asistencias en esta asignatura
      </h1>
    )
    return <PieChart attended={data.data.attended} notAttended={data.data.notAttended} />
  }

  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 rounded-sm space-y-2`}>
      <h1 className="text-customGrey font-semibold break-words">{subject.name}</h1>
      <div>
        {render()}
      </div>
    </div>
  )
}

export default AssistanceScore