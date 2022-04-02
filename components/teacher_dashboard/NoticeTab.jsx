import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import NoticeItem from "./NoticeItem"

const NoticeTab = () => {
  return (
    <div>
      <SearchInput />
      <AccentButton
        className="p-2 mt-2 mb-1" 
        text="Crear Comunicado" />
      <NoticeItem 
        className="mt-2" />
      <NoticeItem 
        className="mt-2" />
    </div>
  )
}

export default NoticeTab