import useStore from "../../store"

const GradeDirectorHeader = () => {
  const grade = useStore(state => state.studentSelected?.grade)

  if(!grade) return null

  return (
    <div>
      <h1 className="mt-2 text-center text-white font-semibold lg:text-xl">
        {
          grade.director ?
          `${grade.director.first_name} ${grade.director.last_name}` :
          'No definido'
        }
        
      </h1>
      <h1 className="text-center text-white text-sm font-light text-opacity-80 lg:text-base">
        Director de curso
      </h1>
    </div>
  )
}

export default GradeDirectorHeader