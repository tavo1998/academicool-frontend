const AccentButton = ({ text }) => {
  return (
    <button className="bg-accentColor px-4 py-1 text-white rounded-sm w-full text-sm lg:text-base">
      { text }
    </button>
  )
}

export default AccentButton;