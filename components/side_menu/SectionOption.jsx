import { useState, useEffect } from "react";
import useStore from "../../store"

const SectionOption = ({ option }) => {
  const [isSelected, setIsSelected] = useState(false)
  const itemSideBarSelected = useStore(state => state.itemSideBarSelected)
  const setItemSideBarSelected = useStore(state => state.setItemSideBarSelected)
  const setSectionSelected = useStore(state => state.setSectionSelected)

  const handleClick = () => {
    setSectionSelected(option.sectionType)
    setItemSideBarSelected(option.id)
  }

  useEffect(() => {
    if(itemSideBarSelected && itemSideBarSelected === option.id) setIsSelected(true)
    else setIsSelected(false)
  }, [itemSideBarSelected])
  
  
  return (
    <button 
      onClick={handleClick}  
      className={`${isSelected ? 'bg-white text-primaryColor p-1 rounded-lg' : 'text-white text-opacity-80'} w-full text-left lg:text-base`}>
      {option.name}
    </button>
  )
}

export default SectionOption;