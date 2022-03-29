import GradeItem from "./GradeItem";
import OptionHeader from "./OptionHeader";
import PaginationButtons from "./PaginationButtons";
import TableHeader from "./TableHeader";

const headerNames = [
  {
    col:1,
    name: 'ID'
  },
  {
    col:10,
    name: 'Nombre'
  }
]

const GradeSection = () => {
  return (
    <>
      <OptionHeader 
        title="Cursos"
        showAddButton={true}
        addButtonText="Agregar Curso"
        showSearchBar={true} 
      />
      <TableHeader
        headerNames={headerNames} 
      />
      <GradeItem
        id={1}
        name="Octavo: 8-3" 
      />
      <GradeItem
        id={1}
        name="Octavo: 8-3" 
      />
      <GradeItem
        id={1}
        name="Octavo: 8-3" 
      />
      <PaginationButtons />
    </>
  )
}

export default GradeSection;