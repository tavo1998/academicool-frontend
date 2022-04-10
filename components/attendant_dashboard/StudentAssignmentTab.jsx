import { useState } from 'react'
import { PAGINATION_QUANTITY } from '../../config/common'
import useSWR from "swr"
import fetcher from "../../services/fetcher"
import useStore from "../../store"
import SearchInput from "./../common/SearchInput"
import StudentAssignmentItem from "./StudentAssignmentItem"
import PaginationButtons from '../common/PaginationButtons'
import ErrorComponent from '../common/ErrorComponent'

const StudentAssignmentTab = () => {
  const [pagination, setPagination] = useState(0)
  const [search, setSearch] = useState('')
  const subject = useStore(state => state.sectionSelected.data)
  const student = useStore(state => state.studentSelected)

  const {
    data, 
    error
  } = useSWR(`/api/v1/students/${student.id}/assignments?subject=${subject.id}&title=${search}&pagination=${pagination}`, fetcher)

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
    if(!data) return <h1 className="text-customGrey text-center mt-4">Cargando asignaciones...</h1>
    if(data.data.length === 0) return <h1 className="text-customGrey text-center mt-4">No hay asignaciones para mostrar</h1>
    return data.data.map((assignment) => <StudentAssignmentItem className="mt-2 lg:mt-4" key={assignment.id} assignment={assignment} />)
  }

  return (
    <div>
      <div className="lg:flex items-center justify-between">
        <h1 className='text-base text-customGrey font-semibold hidden lg:block'>Asignaciones</h1>
        <SearchInput
          onChange={handleSearchChange}
          className="lg:w-3/5" 
        />
      </div>
      {render()}
      {
        data && (
          <PaginationButtons
            disablePrev={pagination === 0}
            disableNext={data.data.length === 0 || data.data.length < PAGINATION_QUANTITY}
            handlePrev={handlePrevPagination}
            handleNext={handleNextPagination}
          />
        )
      }
    </div>
  )
}

export default StudentAssignmentTab