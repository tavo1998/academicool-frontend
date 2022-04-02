import { getUserAuthenticated } from "../../services/user"
import { getRoleRedirectUrl } from "../../lib/redirect"
import { createTeacherSideBarOptions } from "../../config/teacher"
import SideBar from "../../components/side_menu/SideBar"
import useSWR from "swr"
import fetcher from "./../../services/fetcher"
import ErrorComponent from "../../components/common/ErrorComponent"

const TeacherDashboard = () => {
  const { data, error } = useSWR('/api/v1/subjects', fetcher)

  console.log(data?.data)

  if(error) {
    return (
      <ErrorComponent error={error}>
        <h1>Ocurrió un error al intentar traer los datos</h1>
      </ErrorComponent>
    )  
  }

  if(!data) return <></>

  return (
    <div>
      <SideBar sections={createTeacherSideBarOptions(data.data)} />
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