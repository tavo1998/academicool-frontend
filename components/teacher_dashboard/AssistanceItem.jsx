const AssistanceItem = ({ className, attended, student }) => {
  return (
    <div className={`${className} flex justify-between items-center`}>
      <h1 className="text-sm text-customGrey">{student.first_name} {student.last_name}</h1>
      <h1 className={`${attended ? 'bg-green-600' : 'bg-red-600'} text-sm text-white px-2 py-1 rounded-full`}>
        {attended ? 'Asistió' : 'No Asistió'}
      </h1>
    </div>
  )
}

export default AssistanceItem