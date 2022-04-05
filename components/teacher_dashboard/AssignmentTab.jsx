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

  if(error) {
    return (
      <ErrorComponent error={error}>
        <h1>Ocurrió un error</h1>
      </ErrorComponent>
    )
  }

  if(!data) return <h1>Cargando</h1>

  return (
    <div>
      <SearchInput />
      <AccentButton
        onClick={() => setTabSelected(CREATE_ASSIGNMENT)}
        className="py-2 mt-2 mb-1" 
        text="Crear Asignación" />
      {
        data.data.map((assignment) => <AssigmentItem key={assignment.id} className="mt-2" assignment={assignment}/>)
      }
    </div>
  )
}

export default AssignmetTab