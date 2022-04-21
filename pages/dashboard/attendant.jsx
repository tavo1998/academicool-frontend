import { useEffect } from "react"
import { ASSIGNMENT_TAB, PROFILE_OPTION, SIGN_OUT_OPTION, SUBJECT_OPTION } from "../../config/common"
import { getUserAuthenticated } from "../../services/user"
import { getRoleRedirectUrl } from "../../lib/redirect"
import { ATTENDANT_ROLE } from "../../config/common"
import { ASSIGNMENTS_STATISTICS, ASSISTANCES_STATISTICS, CHANGE_STUDENT, createAttendantSideBarOptions } from "../../config/attendant"
import { useMediaQuery } from "react-responsive"
import { useRouter } from "next/router"
import SelectStudent from "../../components/attendant_dashboard/SelectStudent"
import NoSectionSelected from "../../components/common/NoSectionSelected"
import ErrorComponent from "../../components/common/ErrorComponent"
import useStore from "../../store"
import useSWR from "swr"
import SideBar from "../../components/side_menu/SideBar"
import fetcher from "../../services/fetcher"
import SubjectStudentSection from "../../components/attendant_dashboard/SubjectStudentSection"
import SubjectDesktopStudentSection from "../../components/attendant_dashboard/SubjectDesktopStudentSection"
import PageError from "../../components/common/PageError"
import AttendantProfile from "../../components/common/AttendantProfile"
import AssignmentStatistics from "../../components/attendant_dashboard/AssignmentStatistics"
import AssistanceStatistics from "../../components/attendant_dashboard/AssistanceStatistics"

const AttendantDashboard = () => {
  const router = useRouter()
  const sectionSelected = useStore(state => state.sectionSelected)
  const setSectionSelected = useStore(state => state.setSectionSelected)
  const setTabSelected = useStore(state => state.setTabSelected)
  const setItemSideBarSelected = useStore(state => state.setItemSideBarSelected)
  const studentSelected = useStore(state => state.studentSelected)
  const setStudentSelected = useStore(state => state.setStudentSelected)
  const { data, error } = useSWR(studentSelected ? `/api/v1/students/${studentSelected.id}/subjects` : null, fetcher)
  const isMobileOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  useEffect(() => {
    if(sectionSelected.id === SIGN_OUT_OPTION) router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/google/sign-out`)
  }, [sectionSelected.id])

  useEffect(() => {
    if(sectionSelected.id === CHANGE_STUDENT) {
      setItemSideBarSelected(null)
      setStudentSelected(null)
      setSectionSelected(null)
      setTabSelected(ASSIGNMENT_TAB)
    }
  }, [sectionSelected.id])

  if(!studentSelected){
    return (
      <SelectStudent />
    )
  }

  if(error) {
    return (
      <ErrorComponent error={error}>
        <PageError />
      </ErrorComponent>
    )  
  }

  if(!data) return <></>

  const renderSection = () => {
    switch(sectionSelected.id){
      case null:
        return <NoSectionSelected />
      case SUBJECT_OPTION:
        if(!isMobileOrDesktop)
          return <SubjectStudentSection />
        else
          return <SubjectDesktopStudentSection />
      case PROFILE_OPTION:
        return <AttendantProfile />
      case ASSIGNMENTS_STATISTICS:
        return <AssignmentStatistics />
      case ASSISTANCES_STATISTICS:
        return <AssistanceStatistics />
    }
  }

  
  return (
    <div className="lg:flex h-screen overflow-hidden overflow-y-auto">
      <SideBar sections={createAttendantSideBarOptions(data.data)} />
      <div className="flex-1">
        {renderSection()}
      </div>
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