const DateInputField = ({ className, title, ...rest }) => {
  return (
    <label className={`${className} block`}>
      <h1 className="text-customGrey font-semibold text-sm lg:text-lg">{title}</h1>
      <input
        type="date" 
        className="w-full mt-1 bg-primaryColor bg-opacity-10 text-customGrey p-2 focus:outline-none"
        {...rest}
        />
    </label>
  )
}

export default DateInputField