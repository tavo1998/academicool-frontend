import { useUser } from "../../context/userContext"
import ProfileField from "../common/ProfileField"
import SectionHeader from "../common/SectionHeader"

const TeacherProfile = () => {
  const user = useUser()

  return (
    <div className="p-4">
      <SectionHeader
        title="Perfil" 
      />
      <div className="flex flex-col items-center p-4 lg:w-1/2 lg:m-auto">
        <h1 className="text-customGrey font-semibold mb-2">Información del profesor</h1>
        <div className="w-16 h-16 rounded-full bg-customGrey bg-opacity-50" />
        <div className="space-y-3 w-full">
          <ProfileField
            title="Nombre"
            value={`${user.first_name} ${user.last_name}`} 
          />
          <ProfileField
            title="Correo Electrónico"
            value={user.email}
          />
          <ProfileField
            title="Número de identificación"
            value={user.identification_id} 
          />
          <ProfileField
            title="Número de teléfono"
            value={user.phone_number || 'No especificado'} 
          />
          <ProfileField
            title="Dirección"
            value={user.address || 'No especificado'} 
          />
        </div>
      </div>
    </div>
  )
}

export default TeacherProfile