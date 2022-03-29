import OptionHeader from "./OptionHeader";
import PaginationButtons from "./PaginationButtons";
import TableHeader from "./TableHeader";
import StudentItem from "./StudentItem";

const headerNames = [
  {
    col: 1,
    name: 'ID'
  },
  {
    col: 2,
    name: 'Nombre'
  },
  {
    col: 2,
    name: 'Número de Identificación'
  },
  {
    col: 2,
    name: 'Número de Teléfono'
  },
  {
    col: 2,
    name: 'Email'
  },
  {
    col: 2,
    name: 'Dirección'
  },
]

const StudentSection = () => {
  return (
    <>
      <OptionHeader 
        title="Estudiantes"
        showAddButton={true}
        addButtonText="Agregar Estudiante"
        showSearchBar={true} 
      />
      <TableHeader
        headerNames={headerNames} 
      />
      <StudentItem
        id={1} 
        name="Gustavo Adolfo Pinto Zapata"
        identification_id={117520193}
        phone_number={3154056649}
        email={"gustavo1231998@gmail.com"}
        address="Calle 26b #33-18"
      />
      <PaginationButtons />
    </>
  )
}

export default StudentSection;