const AccentButton = ({ text, ...rest}) => {
  return (
    <button 
      className="bg-accentColor px-4 py-1 text-white rounded-sm w-full text-sm lg:text-base"
      {...rest}
    >
      { text }
    </button>
  )
}

export default AccentButton;