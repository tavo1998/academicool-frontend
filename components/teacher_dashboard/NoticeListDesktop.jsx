import { CREATE_NOTICE } from "../../config/common"
import PaginationButtons from "../admin_dashboard/PaginationButtons"
import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import SectionHeader from "../common/SectionHeader"
import NoticeItem from "./../teacher_dashboard/NoticeItem"
import useStore from "../../store"
import useSWR from "swr"
import fetcher from "../../services/fetcher"

const NoticeListDesktop = () => {
  const subject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { data, error } = useSWR(`/api/v1/subjects/${subject.id}/notices`, fetcher)

  if(error) return <h1>Ocurrió un error</h1>
  if(!data) return <h1>Cargando</h1>

  return (
    <>
      <div className="flex justify-between">
      <SectionHeader
        title="Comunicados" 
      />
      <div className="flex flex-1 justify-end">
        <SearchInput
          className="w-3/5"
          placeholder="Buscar" 
          />
        <AccentButton
          onClick={() => setTabSelected(CREATE_NOTICE)}
          className="w-auto px-2 py-1"
          text="Agregar comunicado" 
          />
      </div>
    </div>
    {data.data.map((notice => <NoticeItem key={notice.id} className="mt-4" notice={notice}/>))}
    <PaginationButtons />
    </>
  )
}

export default NoticeListDesktop