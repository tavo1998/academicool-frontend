import { getUserAuthenticated } from "../../services/user"
import { getRoleRedirectUrl } from "../../lib/redirect"
import { createTeacherSideBarOptions, SUBJECT_TEACHER_OPTION } from "../../config/teacher"
import SideBar from "../../components/side_menu/SideBar"
import useSWR from "swr"
import fetcher from "./../../services/fetcher"
import ErrorComponent from "../../components/common/ErrorComponent"
import useStore from "../../store"
import NoSectionSelected from "../../components/common/NoSectionSelected"
import SubjectTeacherSection from "../../components/teacher_dashboard/SubjectTeacherSection"

const TeacherDashboard = () => {
  const sectionSelected = useStore(state => state.sectionSelected)
  const { data, error } = useSWR('/api/v1/subjects', fetcher)

  const renderSection = () => {
    switch(sectionSelected.id){
      case null:
        return <NoSectionSelected />
      case SUBJECT_TEACHER_OPTION:
        return <SubjectTeacherSection />
    }
  }

  if(error) {
    return (
      <ErrorComponent error={error}>
        <h1>Ocurrió un error al intentar traer los datos</h1>
      </ErrorComponent>
    )  
  }

  if(!data) return <></>

  return (
    <div className="lg:flex">
      <SideBar sections={createTeacherSideBarOptions(data.data)} />
      <div className="flex-1">
        { renderSection() }
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

  if(user.role !== 'TEACHER') {
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


export default TeacherDashboard