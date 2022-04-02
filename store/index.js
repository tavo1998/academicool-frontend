import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useStore = create(devtools(set => ({
  isSideBarOpen: false,
  itemSideBarSelected: null,
  sectionSelected: { id: null, data: null },
  tabSelected: null,
  setIsSideBarOpen: () => set(state => ({ isSideBarOpen: !state.isSideBarOpen })),
  setSectionSelected: (id, data = null) => set(state => ({ sectionSelected: { id, data } })),
  setItemSideBarSelected: (id) => set(state => ({ itemSideBarSelected: id })),
  setTabSelected: (id) => set(state => ({ tabSelected: id }))
})))

export default useStore