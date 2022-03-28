const ItemButton = ({ id, text, handleClose, optionSelected, handleOptionSelected }) => {

  const isSelected = optionSelected === id

  const handleClick = () => {
    handleOptionSelected(id)
  }
  
  return (
    <button 
      onClick={handleClick}  
      className={`${isSelected ? 'bg-white text-primaryColor p-1 rounded-lg' : 'text-white text-opacity-80'} w-full text-left`}>
      {text}
    </button>
  )
}

export default ItemButton;