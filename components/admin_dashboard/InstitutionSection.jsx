import OptionHeader from "./OptionHeader";
import InstitutionItem from "./InstitutionItem";
import PaginationButtons from "./PaginationButtons";
import InstitutionHeader from "./InstitutionHeader";

const InstitutionSection = () => {
  return (
    <>
      <OptionHeader 
        title="Instituciones" 
        showAddButton={true} 
        showSearchBar={true}
        addButtonText="Agregar Institución" 
      />
      <InstitutionHeader />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <InstitutionItem 
        name="1 - Institución Educativa Cristobal Colón"
        city="Cali"
        address="Calle 25 #33-25"
      />
      <PaginationButtons />
    </>
  )
}

export default InstitutionSection;