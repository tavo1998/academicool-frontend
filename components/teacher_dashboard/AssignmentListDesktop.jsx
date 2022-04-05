import { CREATE_ASSIGNMENT } from "../../config/common"
import useStore from "../../store"
import PaginationButtons from "../admin_dashboard/PaginationButtons"
import AccentButton from "../common/AccentButton"
import SearchInput from "../common/SearchInput"
import SectionHeader from "../common/SectionHeader"
import AssigmentItem from "./AssigmentItem"
import fetcher from "../../services/fetcher"
import useSWR from "swr"


const AssignmentListDesktop = () => {
  const subject = useStore(state => state.sectionSelected.data)
  const setTabSelected = useStore(state => state.setTabSelected)
  const { data, error } = useSWR(`/api/v1/subjects/${subject.id}/assignments`, fetcher)

  if(error) return <h1>Ocurrió un error</h1>
  if(!data) return <h1>Cargando</h1>

  return (
    <>
      <div className="flex justify-between">
        <SectionHeader
          title="Asignaciones" 
        />
        <div className="flex-1 flex justify-end">
          <SearchInput
          className="w-3/5"
          />
          <AccentButton
            onClick={() => setTabSelected(CREATE_ASSIGNMENT)}
            className="w-auto px-2 py-1"
            text="Agregar asignación" 
            />
        </div>
      </div>
      {data.data.map((assignment => <AssigmentItem className="mt-4" assignment={assignment}/>))}
      <PaginationButtons />
    </>
  )
}

export default AssignmentListDesktop