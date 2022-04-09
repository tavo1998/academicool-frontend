import { useEffect } from "react"
import { SIGN_OUT_OPTION } from "../../config/common"
import { getUserAuthenticated } from "../../services/user"
import { getRoleRedirectUrl } from "../../lib/redirect"
import { ATTENDANT_ROLE } from "../../config/common"
import { createAttendantSideBarOptions } from "../../config/attendant"
import SelectStudent from "../../components/attendant_dashboard/SelectStudent"
import NoSectionSelected from "../../components/common/NoSectionSelected"
import ErrorComponent from "../../components/common/ErrorComponent"
import useStore from "../../store"
import useSWR from "swr"
import SideBar from "../../components/side_menu/SideBar"
import fetcher from "../../services/fetcher"

const AttendantDashboard = () => {
  const sectionSelected = useStore(state => state.sectionSelected)
  const studentSelected = useStore(state => state.studentSelected)
  const { data, error } = useSWR(studentSelected ? `/api/v1/students/${studentSelected.id}/subjects` : null, fetcher)

  useEffect(() => {
    if(sectionSelected.id === SIGN_OUT_OPTION) router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/google/sign-out`)
  }, [sectionSelected.id])

  if(!studentSelected){
    return (
      <SelectStudent />
    )
  }

  if(error) {
    return (
      <ErrorComponent error={error}>
        <h1>Ocurrió un error al intentar traer los datos</h1>
      </ErrorComponent>
    )  
  }

  if(!data) return <></>

  const renderSection = () => {
    switch(sectionSelected.id){
      case null:
        return <NoSectionSelected />
    }
  }
  
  return (
    <div className="lg:flex">
      <SideBar sections={createAttendantSideBarOptions(data.data)} />
      {renderSection()}
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  const user = await getUserAuthenticated(user_auth_token)

  if(!user) {
    return {
      redirect: { permanent: false, destination: '/login' }
    }
  }

  if(user.role !== ATTENDANT_ROLE) {
    return {
      redirect: { permanent: false, destination: getRoleRedirectUrl(user.role) }
    }
  }

  return {
    props: { 
      user
    }
  }
}

export default AttendantDashboard