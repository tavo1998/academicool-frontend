import { INSTITUTION_CREATE_OPTION } from "./../../config/admin";
import OptionHeader from "./OptionHeader";
import InstitutionItem from "./InstitutionItem";
import PaginationButtons from "./PaginationButtons";
import TableHeader from "./TableHeader";
import useStore from "../../store";
import useSWR from "swr";
import useHandleForbidden from "../../hooks/useHandleForbidden";
import fetcher from "../../services/fetcher";

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
    col: 3,
    name: 'Misión'
  },
  {
    col: 3,
    name: 'Visión'
  },
  {
    col: 2,
    name: 'Dirección'
  }
]

const InstitutionSection = () => {
  const { data, error } = useSWR('/api/v1/institutions', fetcher)
  const setSectionSelected = useStore(state => state.setSectionSelected)
  useHandleForbidden(error)

  const handleAddButton = () => {
    setSectionSelected(INSTITUTION_CREATE_OPTION)
  }

  if(error) return <h1>Ocurrió un error</h1>
  if(!data) return <h1>Cargando...</h1>

  return (
    <>
      <OptionHeader 
        title="Instituciones" 
        showAddButton={true} 
        showSearchBar={true}
        addButtonText="Agregar Institución"
        handleAddButton={handleAddButton} 
      />
      <TableHeader
        headerNames={headerNames} 
      />
      <div className="mt-2 lg:hidden" />
      { data.data.map((institution) =>  {
        return <InstitutionItem key={institution.id} institution={institution} />
      })}
      <PaginationButtons />
    </>
  )
}

export default InstitutionSection;