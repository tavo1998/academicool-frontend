import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { ASSIGNMENT_TAB } from '../config/common'

const useStore = create(devtools(set => ({
  isSideBarOpen: true,
  itemSideBarSelected: null,
  sectionSelected: { id: null, data: null },
  tabSelected: ASSIGNMENT_TAB,
  tabSelectedData: null,
  studentSelected: null,
  setIsSideBarOpen: () => set(state => ({ isSideBarOpen: !state.isSideBarOpen })),
  setSectionSelected: (id, data = null) => set(() => ({ sectionSelected: { id, data } })),
  setItemSideBarSelected: (id) => set(() => ({ itemSideBarSelected: id })),
  setTabSelected: (id) => set(() => ({ tabSelected: id })),
  setTabSelectedData: (data) => set(() => ({ tabSelectedData: data })),
  setStudentSelected: (data) => set(() => ({ studentSelected: data }))
})))

export default useStore