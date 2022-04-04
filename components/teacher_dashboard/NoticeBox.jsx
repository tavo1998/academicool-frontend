import PaginationButtons from "../admin_dashboard/PaginationButtons"
import AccentButton from "../common/AccentButton"
import SearchInputDesktop from "../common/SearchInputDesktop"
import SectionHeader from "../common/SectionHeader"
import NoticeDesktopItem from "./NoticeDesktopItem"

const NoticeBox = () => {
  return (
    <div className="p-4 bg-primaryColor bg-opacity-10 h-full overflow-y-scroll">
      <div className="flex justify-between">
        <SectionHeader
          title="Comunicados" 
        />
        <div className="flex flex-1 justify-end">
          <SearchInputDesktop
            placeholder="Buscar" 
            />
          <AccentButton
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
    </div>
  )
}

export default NoticeBox