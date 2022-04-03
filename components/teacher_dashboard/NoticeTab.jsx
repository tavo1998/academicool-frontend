import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import NoticeItem from "./NoticeItem"
import useStore from "../../store"
import { CREATE_NOTICE } from "../../config/common"

const NoticeTab = () => {
  const setTabSelected = useStore(state => state.setTabSelected)

  return (
    <div>
      <SearchInput />
      <AccentButton
        onClick={() => setTabSelected(CREATE_NOTICE)}
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