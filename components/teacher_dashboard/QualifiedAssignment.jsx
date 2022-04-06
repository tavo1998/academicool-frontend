import AccentButton from "../common/AccentButton"
import QualifyInput from "../common/QualifyInput"
import useSWR from "swr"
import useStore from "../../store"
import fetcher from "../../services/fetcher"

const QualifiedAssignment = () => {
  const currentSubject = useStore(state => state.sectionSelected.data)
  const { data, error } = useSWR(`/api/v1/grades/${currentSubject.grade_id}/students`, fetcher)

  if(error) return <h1>Ocurrió un error</h1>
  if(!data) return <h1>Cargando</h1>

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1 
        className="text-customGrey font-semibold lg:text-lg"
      >
        Calificar - Ejercicios de pitagoras
      </h1>
      <form onSubmit={onSubmit}>
        {data.data.map((student) => <QualifyInput key={student.id} className="mt-2" student={student}/>)}
        <AccentButton
          className="py-1 mt-4"
          text="Calificar"
        />
      </form>
    </div>
  )
}

export default QualifiedAssignment