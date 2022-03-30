import create from 'zustand'

const useSideBar = create(set => ({
  isOpen: true,
  optionSelected: null,
  setIsOpen: () => set(state => ({ isOpen: !state.isOpen })),
  setOptionSelected: (option) => set(state => ({ optionSelected: option }))
}))

export default useSideBar