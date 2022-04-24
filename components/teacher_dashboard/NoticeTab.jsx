import { CREATE_NOTICE } from "../../config/common"
import { useState, useEffect } from "react"
import { PAGINATION_QUANTITY } from "../../config/common"
import useSWR, { useSWRConfig } from "swr"
import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import NoticeItem from "./NoticeItem"
import ErrorComponent from "../common/ErrorComponent"
import useStore from "../../store"
import fetcher from "../../services/fetcher"
import useMutation from "../../hooks/useMutation"
import deleter from "../../services/deleter"
import PaginationButtons from "../common/PaginationButtons"
import DeleteWarning from "../common/DeleteWarning"
import DeleteLoading from "../common/DeleteLoading"
import DeleteError from "../common/DeleteError"

const createSubjectNoticesUrl = (subjectId, search, pagination) => {
  return `/api/v1/subjects/${subjectId}/notices?title=${search}&pagination=${pagination}`
}

const NoticeTab = () => {
  const [showDeleteError, setShowDeleteError] = useState(false)
  const [noticeToRemove, setNoticeToRemove] = useState(null)
  const [pagination, setPagination] = useState(0)
  const [search, setSearch] = useState('')
  const subject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { mutate } = useSWRConfig()
  const { data, error } = useSWR(createSubjectNoticesUrl(subject.id, search, pagination), fetcher)
  const { 
    isSubmitting, 
    requestError, 
    requestOk, 
    sendMutation 
  } = useMutation(noticeToRemove && `/api/v1/notices/${noticeToRemove.id}`, deleter)

  useEffect(() => {
    if(requestOk) {
      mutate(createSubjectNoticesUrl(subject.id, search, pagination))
    }
  }, [requestOk])

  useEffect(() => {
    if(requestError) setShowDeleteError(true)
  }, [requestError])

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

  const handleDeleteNotice = (notice) => {
    setNoticeToRemove(notice)
  }

  const handleCancelWarning = () => {
    setNoticeToRemove(null)
  }

  const handleAcceptWarning = () => {
    sendMutation()
    setNoticeToRemove(null)
  }

  const handleDeleteError = () => {
    setShowDeleteError(false)
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
    return data.data.map((notice => (
      <NoticeItem 
        key={notice.id} 
        className="mt-2 lg:mt-4" 
        notice={notice}
        handleDelete={handleDeleteNotice}
      />
    )))
  }

  return (
    <div>
      <div className="lg:flex items-center justify-between">
        <h1 className='text-base text-customGrey font-semibold hidden lg:block'>Comunicados</h1>
        <div className="flex-1 lg:flex justify-end">
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
      )}
      { noticeToRemove && (
        <DeleteWarning
          handleCancel={handleCancelWarning}
          handleAccept={handleAcceptWarning}
          info={`Comunicado: ${noticeToRemove.title}`}
        />
      )}
      { isSubmitting && (
        <DeleteLoading
          itemType="comunicado"
        />
      )}
      { showDeleteError && (
        <ErrorComponent error={requestError}>
          <DeleteError
            handleClick={handleDeleteError}
          />
        </ErrorComponent>
      )}
    </div>
  )
}

export default NoticeTab