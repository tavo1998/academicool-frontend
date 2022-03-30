import { useState } from "react";
import { ADMIN_SECTIONS } from "../../config/admin";
import { getAuthenticatedRedirect } from "../../services/user";
import StudentDetailSection from "../../components/admin_dashboard/StudentDetailSection";
import SideBar from "../../components/side_menu/SideBar";


const AdminDashboard = () => {
  return (
    <div className="relative lg:flex">
      <SideBar sections={ADMIN_SECTIONS} />
      <div className="p-4 lg:w-full">
        <StudentDetailSection />
      </div>
    </div>
  )
}

export async function getServerSideProps ({ req }) {
  const { user_auth_token } = req.cookies

  return await getAuthenticatedRedirect(user_auth_token)
}

export default AdminDashboard
