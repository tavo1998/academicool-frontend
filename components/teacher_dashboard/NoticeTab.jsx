import { CREATE_NOTICE } from "../../config/common"
import { useState } from "react"
import { PAGINATION_QUANTITY } from "../../config/common"
import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import NoticeItem from "./NoticeItem"
import ErrorComponent from "../common/ErrorComponent"
import useStore from "../../store"
import useSWR from "swr"
import fetcher from "../../services/fetcher"
import PaginationButtons from "../common/PaginationButtons"


const NoticeTab = () => {
  const [pagination, setPagination] = useState(0)
  const [search, setSearch] = useState('')
  const subject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { data, error } = useSWR(`/api/v1/subjects/${subject.id}/notices?title=${search}&pagination=${pagination}`, fetcher)

  const handlePrevPagination = () => {
    setPagination(pagination - 1)
  }

  const handleNextPagination = () => {
    setPagination(pagination + 1)
  }

  const handleSearchChange = (e) => {
    if(e.target.value !== '') setPagination(0)
    setSearch(e.target.value) 
  }

  const render = () => {
    if(error) {
      return (
        <ErrorComponent error={error}>
          <h1 className="text-customGrey text-center mt-4">Ocurrió un error al traer los datos, intentalo más tarde</h1>
        </ErrorComponent>
      )
    }
    if(!data) return <h1 className="text-customGrey text-center mt-4">Cargando comunicados...</h1>
    if(data.data.length === 0) return <h1 className="text-customGrey text-center mt-4">No hay comunicados para mostrar</h1>
    return data.data.map((notice => <NoticeItem key={notice.id} className="mt-2 lg:mt-4" notice={notice}/>))
  }

  return (
    <div>
      <div className="lg:flex items-center justify-between">
        <h1 className='text-base text-customGrey font-semibold hidden lg:block'>Comunicados</h1>
        <div className="flex-1 lg:flex items-center justify-end">
          <SearchInput
            onChange={handleSearchChange}
            className="lg:w-3/5"
          />
          <AccentButton
            onClick={() => setTabSelected(CREATE_NOTICE)}
            className="p-2 mt-2 mb-1 lg:mt-0 lg:mb-0 lg:w-auto px-2" 
            text="Crear Comunicado" />
        </div>
      </div>
      {render()}
      { data && (
          <PaginationButtons
            disablePrev={pagination === 0}
            disableNext={data.data.length === 0 || data.data.length < PAGINATION_QUANTITY}
            handlePrev={handlePrevPagination}
            handleNext={handleNextPagination}
          />
      ) }
    </div>
  )
}

export default NoticeTab