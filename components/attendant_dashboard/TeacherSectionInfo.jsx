const TeacherSectionInfo = ({ className, teacher }) => {
  return (
    <h1 className={`${className} text-customGrey text-sm lg:text-base`}>
      <span className="font-semibold">Profesor: </span>
      {
        teacher ? `${teacher.first_name} ${teacher.last_name}` : "No asignado"
      }
      
    </h1>
  )
}

export default TeacherSectionInfo