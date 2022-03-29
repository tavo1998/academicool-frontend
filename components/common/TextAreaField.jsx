const TextAreaField = ({ title, placeholder, rows, maxLength }) => {
  return (
    <label className="block w-full">
      <h1 className="text-customGrey font-semibold text-sm lg:text-lg">{title}</h1>
      <textarea 
        className="bg-customGrey bg-opacity-10 p-2 w-full placeholder:text-sm lg:placeholder:text-base mt-1 focus:outline-none text-customGrey text-xs lg:text-base resize-none" 
        type="text" 
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength} 
      />
   </label>
  )
}

export default TextAreaField;