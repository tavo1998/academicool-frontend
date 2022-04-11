import useSWR from "swr"
import fetcher from "../../services/fetcher"
import StudentItem from "./StudentItem"
import ErrorComponent from "../common/ErrorComponent"
import PageError from "../common/PageError"

const SelectStudent = () => {
  const { data, error } = useSWR('/api/v1/users/students', fetcher)

  if(error) {
    return (
      <ErrorComponent error={error}>
        <PageError />
      </ErrorComponent>
    )
  }

  const render = () => {
    if(!data) return <h1 className="text-customGrey lg:text-lg text-center font-semibold">Cargando estudiantes...</h1>
    if(data.data.length === 0) return (
      <div>
        <h1 className="text-customGrey lg:text-lg text-center font-semibold">
          No tienes estudiantes registrados
        </h1>
        <h1 className="text-customGrey lg:text-lg text-center font-semibold">
          Comunícate con soporte
        </h1>
      </div>
    )
    return data.data.map(student => <StudentItem  key={student.id} student={student}/>)
  }

  return (
    <div className="lg:flex">
      <div className="flex-1 bg-primaryColor hidden lg:block" />
      <div className="flex-1 h-screen flex flex-col justify-center items-center p-4">
        <h1 className="text-primaryColor text-2xl lg:text-4xl font-semibold text-center mb-4">
          Bienvenido a Academicool
        </h1>
        <h1 className="text-customGrey lg:text-lg font-semibold text-center mb-8">
          Selecciona un estudiante para ver su información
        </h1>
        <div className="w-full flex flex-col items-center space-y-4">
          {render()}
        </div>
      </div>
    </div>
  )
}

export default SelectStudent