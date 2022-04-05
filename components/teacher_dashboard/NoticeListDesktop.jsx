import PaginationButtons from "../admin_dashboard/PaginationButtons"
import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import SectionHeader from "../common/SectionHeader"
import NoticeDesktopItem from "./NoticeDesktopItem"
import useStore from "../../store"
import { CREATE_NOTICE } from "../../config/common"

const NoticeListDesktop = () => {
  const setTabSelected = useStore(state => state.setTabSelected)

  return (
    <>
      <div className="flex justify-between">
      <SectionHeader
        title="Comunicados" 
      />
      <div className="flex flex-1 justify-end">
        <SearchInput
          placeholder="Buscar" 
          />
        <AccentButton
          onClick={() => setTabSelected(CREATE_NOTICE)}
          className="w-auto px-2 py-1"
          text="Agregar comunicado" 
          />
      </div>
    </div>
    <div className="bg-customGrey opacity-30 h-[1px] mt-2" />
    <NoticeDesktopItem
      className="mt-2"
    />
    <NoticeDesktopItem
      className="mt-2"
    />
          <NoticeDesktopItem
      className="mt-2"
    />
                <NoticeDesktopItem
      className="mt-2"
    />
    <PaginationButtons />
    </>
  )
}

export default NoticeListDesktop