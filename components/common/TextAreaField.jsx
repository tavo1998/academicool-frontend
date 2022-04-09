import React from 'react';

const TextAreaField = React.forwardRef(({ className, title, placeholder, error, ...rest }, ref) => {
  return (
    <label className={`${className} block w-full `}>
      <h1 className="text-customGrey font-semibold text-sm">{title}</h1>
      <textarea 
        className="bg-primaryColor bg-opacity-10 p-2 w-full placeholder:text-sm mt-1 focus:outline-none text-customGrey text-sm resize-none" 
        type="text" 
        placeholder={placeholder}
        ref={ref}
        {...rest} 
      />
      <span className="text-xs lg:text-sm text-red-600">{error}</span>
   </label>
  )
})

export default TextAreaField;