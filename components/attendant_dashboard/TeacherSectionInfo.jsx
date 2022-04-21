const TeacherSectionInfo = ({ className, teacher }) => {
  return (
    <h1 className={`${className} text-customGrey text-sm lg:text-base`}>
      <span className="font-semibold">Profesor: </span>{teacher.first_name} {teacher.last_name}
    </h1>
  )
}

export default TeacherSectionInfo