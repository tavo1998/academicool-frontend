import { CREATE_NOTICE } from "../../config/common"
import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import NoticeItem from "./NoticeItem"
import useStore from "../../store"
import useSWR from "swr"
import fetcher from "../../services/fetcher"


const NoticeTab = () => {
  const subject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { data, error } = useSWR(`/api/v1/subjects/${subject.id}/notices`, fetcher)

  if(error) return <h1>Ocurrió un error</h1>
  if(!data) return <h1>Cargando</h1>

  return (
    <div>
      <SearchInput />
      <AccentButton
        onClick={() => setTabSelected(CREATE_NOTICE)}
        className="p-2 mt-2 mb-1" 
        text="Crear Comunicado" />
      {data.data.map((notice => <NoticeItem key={notice.id} className="mt-4" notice={notice}/>))}
    </div>
  )
}

export default NoticeTab