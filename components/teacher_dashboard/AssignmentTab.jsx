import { CREATE_ASSIGNMENT, PAGINATION_QUANTITY } from '../../config/common';
import { useState, useEffect } from 'react';
import SearchInput from './../common/SearchInput';
import AccentButton from './../common/AccentButton';
import AssigmentItem from './AssigmentItem';
import ErrorComponent from '../common/ErrorComponent';
import useStore from './../../store/index'
import useSWR, { useSWRConfig } from 'swr';
import fetcher from '../../services/fetcher';
import deleter from './../../services/deleter'
import PaginationButtons from '../common/PaginationButtons';
import useMutation from './../../hooks/useMutation'
import DeleteWarning from '../common/DeleteWarning';
import DeleteLoading from '../common/DeleteLoading';
import DeleteError from '../common/DeleteError';

const createSubjectAssignmentUrl = (subjectId, search, pagination) => {
  return `/api/v1/subjects/${subjectId}/assignments?title=${search}&pagination=${pagination}`
}

const AssignmetTab = () => {
  const [showDeleteError, setShowDeleteError] = useState(false)
  const [assignmentToRemove, setAssignmentToRemove] = useState(null)
  const [pagination, setPagination] = useState(0)
  const [search, setSearch] = useState('')
  const subject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { mutate } = useSWRConfig()
  const { data, error } = useSWR(createSubjectAssignmentUrl(subject.id, search, pagination), fetcher)
  const { 
    isSubmitting, 
    requestError, 
    requestOk, 
    sendMutation 
  } = useMutation(assignmentToRemove && `/api/v1/assignments/${assignmentToRemove.id}`, deleter)

  useEffect(() => {
    if(requestOk) {
      mutate(createSubjectAssignmentUrl(subject.id, search, pagination))
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

  const handleDeleteAssignment = (assignment) => {
    setAssignmentToRemove(assignment)
  }

  const handleCancelWarning = () => {
    setAssignmentToRemove(null)
  }

  const handleAcceptWarning = () => {
    sendMutation()
    setAssignmentToRemove(null)
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
    if(!data) return <h1 className="text-customGrey text-center mt-4">Cargando asignaciones...</h1>
    if(data.data.length === 0) return <h1 className="text-customGrey text-center mt-4">No hay asignaciones para mostrar</h1>
    return data.data.map((assignment) => (
      <AssigmentItem
        key={assignment.id}
        handleDelete={handleDeleteAssignment} 
        className="mt-2 lg:mt-4" 
        assignment={assignment}
      />
    ))
  }
  return (
    <div>
      <div className='lg:flex items-center justify-between'>
        <h1 className='text-base text-customGrey font-semibold hidden lg:block'>Asignaciones</h1>
        <div className='flex-1 lg:flex justify-end'>
          <SearchInput
            onChange={handleSearchChange}
            className="lg:w-3/5" 
          />
          <AccentButton
            onClick={() => setTabSelected(CREATE_ASSIGNMENT)}
            className="py-2 mt-2 lg:mt-0 mb-1 lg:mb-0 lg:w-auto px-2" 
            text="Crear Asignación" />
        </div>
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
      { assignmentToRemove && (
        <DeleteWarning
          handleCancel={handleCancelWarning}
          handleAccept={handleAcceptWarning}
          info={`Asignación: ${assignmentToRemove.title}`}
        />
      )}
      { isSubmitting && (
        <DeleteLoading
          itemType="asignación"
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

export default AssignmetTab