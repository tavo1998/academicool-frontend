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
      <div className="lg:flex items-center justify-between">
        <h1 className='text-lg text-customGrey font-semibold hidden lg:block'>Comunicados</h1>
        <div className="flex-1 lg:flex items-center justify-end">
          <SearchInput
            className="lg:w-3/5"
          />
          <AccentButton
            onClick={() => setTabSelected(CREATE_NOTICE)}
            className="p-2 mt-2 mb-1 lg:mt-0 lg:mb-0 lg:w-auto px-4" 
            text="Crear Comunicado" />
        </div>
      </div>
      {data.data.map((notice => <NoticeItem key={notice.id} className="mt-2 lg:mt-4" notice={notice}/>))}
    </div>
  )
}

export default NoticeTab