import { CREATE_ASSIGNMENT } from '../../config/common';
import SearchInput from './../common/SearchInput';
import AccentButton from './../common/AccentButton';
import AssigmentItem from './AssigmentItem';
import ErrorComponent from '../common/ErrorComponent';
import useStore from './../../store/index'
import useSWR from 'swr';
import fetcher from '../../services/fetcher';

const AssignmetTab = () => {
  const subject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { data, error } = useSWR(`/api/v1/subjects/${subject.id}/assignments`, fetcher)

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
    return data.data.map((assignment) => <AssigmentItem key={assignment.id} className="mt-2 lg:mt-4" assignment={assignment}/>)
  }
  return (
    <div>
      <div className='lg:flex items-center justify-between'>
        <h1 className='text-lg text-customGrey font-semibold hidden lg:block'>Asignaciones</h1>
        <div className='flex-1 lg:flex justify-end'>
          <SearchInput
            className="lg:w-3/5" 
          />
          <AccentButton
            onClick={() => setTabSelected(CREATE_ASSIGNMENT)}
            className="py-2 mt-2 lg:mt-0 mb-1 lg:mb-0 lg:w-auto px-2" 
            text="Crear Asignación" />
        </div>
      </div>
      {render()}
    </div>
  )
}

export default AssignmetTab