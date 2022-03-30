import create from 'zustand'

const useSideBar = create(set => ({
  isOpen: true,
  setIsOpen: () => set(state => ({ isOpen: !state.isOpen }))
}))

export default useSideBar