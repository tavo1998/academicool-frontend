import React from 'react'

const TextInputField = React.forwardRef(({ title, placeholder, error, ...rest }, ref) => {
  return (
    <label className="w-full">
      <h1 className="text-customGrey font-semibold text-sm">{title}</h1>
      <input 
        className="bg-primaryColor bg-opacity-10 p-2 w-full placeholder:text-sm mt-1 focus:outline-none text-customGrey text-sm" 
        type="text" 
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      <span className="text-xs lg:text-sm text-red-600">{error}</span>
     </label>
  )
})

export default TextInputField;