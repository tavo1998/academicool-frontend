import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useStore = create(devtools(set => ({
  isSideBarOpen: true,
  itemSideBarSelected: null,
  sectionSelected: { id: null, data: null },
  setIsSideBarOpen: () => set(state => ({ isSideBarOpen: !state.isSideBarOpen })),
  setSectionSelected: (id, data = null) => set(state => ({ sectionSelected: { id, data } })),
  setItemSideBarSelected: (id) => set(state => ({ itemSideBarSelected: id }))
})))

export default useStore