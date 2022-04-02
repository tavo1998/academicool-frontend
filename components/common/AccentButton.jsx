const AccentButton = ({ className, text, ...rest}) => {
  return (
    <button 
      className={`${className} bg-accentColor text-white rounded-sm w-full text-sm lg:text-base`}
      {...rest}
    >
      { text }
    </button>
  )
}

export default AccentButton;