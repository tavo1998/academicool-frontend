const QualifyInput = ({ className, userName, ...rest }) => {
  return (
    <label className={`${className} flex justify-between items-center`}>
      <h1 className="text-customGrey text-sm w-4/5 break-words pr-1">{userName}</h1>
      <input
        defaultValue="0.0"
        min="0.0"
        max="5.0"
        step="0.1"
        className="w-1/5 bg-primaryColor bg-opacity-10 p-2 lg:placeholder:text-base placeholder:text-sm mt-1 focus:outline-none text-customGrey text-xs lg:text-base" 
        type="number"
        {...rest}
      />
    </label>
  )
}

export default QualifyInput