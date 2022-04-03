import SearchInput from './../common/SearchInput';
import AccentButton from './../common/AccentButton';
import AssigmentItem from './AssigmentItem';
import useStore from './../../store/index'
import { CREATE_ASSIGNMENT } from '../../config/common';

const AssignmetTab = () => {
  const setTabSelected = useStore(state => state.setTabSelected)

  return (
    <div>
      <SearchInput />
      <AccentButton
        onClick={() => setTabSelected(CREATE_ASSIGNMENT)}
        className="py-2 mt-2 mb-1" 
        text="Crear Asignación" />
      <AssigmentItem className="mt-2" />
      <AssigmentItem className="mt-2" />
      <AssigmentItem className="mt-2" />
      <AssigmentItem className="mt-2" />
      <AssigmentItem className="mt-2" />
    </div>
  )
}

export default AssignmetTab