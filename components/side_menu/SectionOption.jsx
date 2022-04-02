import { useState, useEffect } from "react";
import useStore from "../../store"

const SectionOption = ({ option }) => {
  const itemSideBarSelected = useStore(state => state.itemSideBarSelected)
  const setItemSideBarSelected = useStore(state => state.setItemSideBarSelected)
  const setSectionSelected = useStore(state => state.setSectionSelected)
  const setIsSideBarOpen = useStore(state => state.setIsSideBarOpen)

  const handleClick = () => {
    setSectionSelected(option.sectionType, option.data)
    setItemSideBarSelected(option.id)
    setIsSideBarOpen()
  }
  
  return (
    <button 
      onClick={handleClick}  
      className={`${itemSideBarSelected === option.id ? 'bg-white text-primaryColor p-1 rounded-lg' : 'text-white text-opacity-80'} w-full text-left lg:text-base`}>
      {option.name}
    </button>
  )
}

export default SectionOption;