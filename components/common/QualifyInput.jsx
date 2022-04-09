const QualifyInput = ({ className, student, score, ...rest }) => {
  return (
    <label className={`${className} flex justify-between items-center`}>
      <h1 className="text-customGrey text-sm w-4/5 break-words pr-1">{student.first_name}</h1>
      <input
        name={student.id}
        defaultValue={score ? score : '0.0'}
        min="0.0"
        max="5.0"
        step="0.1"
        className="w-1/5 bg-primaryColor bg-opacity-10 p-2 mt-1 focus:outline-none text-customGrey text-sm" 
        type="number"
        {...rest}
      />
    </label>
  )
}

export default QualifyInput