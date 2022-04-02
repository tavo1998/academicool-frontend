import SearchInput from './../common/SearchInput';
import AccentButton from './../common/AccentButton';
import AssigmentItem from './AssigmentItem';

const AssignmetTab = () => {
  return (
    <div>
      <SearchInput />
      <AccentButton
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