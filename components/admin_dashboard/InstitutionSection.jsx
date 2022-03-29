import OptionHeader from "./OptionHeader";
import InstitutionItem from "./InstitutionItem";
import PaginationButtons from "./PaginationButtons";
import TableHeader from "./TableHeader";

const headerNames = [
  {
    col: 1,
    name: 'ÍD'
  },
  {
    col: 2,
    name: 'Nombre'
  },
  {
    col: 3,
    name: 'Misión'
  },
  {
    col: 3,
    name: 'Visión'
  },
  {
    col: 1,
    name: 'Ciudad'
  },
  {
    col: 1,
    name: 'Dirección'
  }
]

const InstitutionSection = () => {
  return (
    <>
      <OptionHeader 
        title="Instituciones" 
        showAddButton={true} 
        showSearchBar={true}
        addButtonText="Agregar Institución" 
      />
      <TableHeader
        headerNames={headerNames} 
      />
      <InstitutionItem
        id={1} 
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem
        id={1}  
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem
        id={1}  
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem
        id={1}  
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem
        id={1}  
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem
        id={1} 
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem
        id={1}  
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem
        id={1}  
        name="Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <PaginationButtons />
    </>
  )
}

export default InstitutionSection;