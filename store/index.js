import create from 'zustand'
import { devtools } from 'zustand/middleware'

const useStore = create(devtools(set => ({
  isSideBarOpen: false,
  itemSideBarSelected: null,
  sectionSelected: { id: null, data: null },
  tabSelected: null,
  tabSelectedData: null,
  setIsSideBarOpen: () => set(state => ({ isSideBarOpen: !state.isSideBarOpen })),
  setSectionSelected: (id, data = null) => set(() => ({ sectionSelected: { id, data } })),
  setItemSideBarSelected: (id) => set(() => ({ itemSideBarSelected: id })),
  setTabSelected: (id) => set(() => ({ tabSelected: id })),
  setTabSelectedData: (data)=> set(() => ({ tabSelectedData: data }))
})))

export default useStore