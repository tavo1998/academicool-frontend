import { useState, useEffect } from "react";
import useSideBar from "../../store/sidebar"

const ItemButton = ({ option }) => {
  const [isSelected, setIsSelected] = useState(false)
  const optionSelected = useSideBar(state => state.optionSelected)
  const setOptionSelected = useSideBar(state => state.setOptionSelected)

  const handleClick = () => {
    setOptionSelected(option)
  }

  useEffect(() => {
    if(optionSelected && optionSelected.id === option.id) setIsSelected(true)
    else setIsSelected(false)
  }, [optionSelected])
  
  
  return (
    <button 
      onClick={handleClick}  
      className={`${isSelected ? 'bg-white text-primaryColor p-1 rounded-lg' : 'text-white text-opacity-80'} w-full text-left lg:text-base`}>
      {option.name}
    </button>
  )
}

export default ItemButton;