import GradeHeader from "./GradeHeader";
import GradeItem from "./GradeItem";
import OptionHeader from "./OptionHeader";
import PaginationButtons from "./PaginationButtons";

const GradeSection = () => {
  return (
    <>
      <OptionHeader 
        title="Cursos"
        showAddButton={true}
        addButtonText="Agregar Curso"
        showSearchBar={true} 
      />
      <GradeHeader />
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