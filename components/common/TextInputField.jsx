const TextInputField = ({ title, placeholder }) => {
  return (
    <label className="w-full">
      <h1 className="text-customGrey font-semibold text-sm lg:text-lg">{title}</h1>
      <input 
        className="bg-customGrey bg-opacity-10 p-2 w-full lg:placeholder:text-base placeholder:text-sm mt-1 focus:outline-none text-customGrey text-xs lg:text-base" 
        type="text" 
        placeholder={placeholder}
      />
     </label>
  )
}

export default TextInputField;