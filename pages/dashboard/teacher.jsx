import { useEffect } from "react"
import { PROFILE_OPTION, SIGN_OUT_OPTION, TEACHER_ROLE, SUBJECT_OPTION } from "../../config/common"
import { getUserAuthenticated } from "../../services/user"
import { getRoleRedirectUrl } from "../../lib/redirect"
import { createTeacherSideBarOptions } from "../../config/teacher"
import { useMediaQuery } from "react-responsive"
import { useRouter } from "next/router"
import SideBar from "../../components/side_menu/SideBar"
import useSWR from "swr"
import fetcher from "./../../services/fetcher"
import ErrorComponent from "../../components/common/ErrorComponent"
import useStore from "../../store"
import NoSectionSelected from "../../components/common/NoSectionSelected"
import SubjectTeacherSection from "../../components/teacher_dashboard/SubjectTeacherSection"
import SubjectDesktopTeacherSection from "../../components/teacher_dashboard/SubjectDesktopTeacherSection"
import PageError from "../../components/common/PageError"
import TeacherProfile from "../../components/teacher_dashboard/TeacherProfile"

const TeacherDashboard = () => {
  const router = useRouter()
  const sectionSelected = useStore(state => state.sectionSelected)
  const { data, error } = useSWR('/api/v1/subjects', fetcher)
  const isMobileOrDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  useEffect(() => {
    if(sectionSelected.id === SIGN_OUT_OPTION) router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/auth/google/sign-out`)
  }, [sectionSelected.id])

  const renderSection = () => {
    switch(sectionSelected.id){
      case null:
        return <NoSectionSelected />
      case SUBJECT_OPTION:
        if(!isMobileOrDesktop)
          return <SubjectTeacherSection />
        else
          return <SubjectDesktopTeacherSection />
      case PROFILE_OPTION:
        return <TeacherProfile />
    }
  }

  if(error) {
    return (
      <ErrorComponent error={error}>
        <PageError />
      </ErrorComponent>
    )  
  }

  if(!data) return <></>

  return (
    <div className="lg:flex relative">
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

  if(user.role !== TEACHER_ROLE) {
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