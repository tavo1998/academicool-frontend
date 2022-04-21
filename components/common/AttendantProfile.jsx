import SectionHeader from "./SectionHeader"
import ProfileField from "./../common/ProfileField"
import { useUser } from "../../context/userContext"
import useStore from "../../store"

const AttendantProfile = () => {
  const user = useUser()
  const studentSelected = useStore(state => state.studentSelected)

  return (
    <div className="p-4 h-screen overflow-hidden overflow-y-auto">
      <SectionHeader
        title="Perfil" 
      />
      <div className="flex flex-col lg:flex-row flex-1">
        <div className="flex flex-col items-center p-4 flex-1">
          <h1 className="text-customGrey font-semibold mb-2">Información del acudiente</h1>
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
        <div className="flex flex-col items-center p-4 flex-1">
          <h1 className="text-customGrey font-semibold mb-2">Información del estudiante</h1>
          <div className="w-16 h-16 rounded-full bg-customGrey bg-opacity-50" />
          <div className="space-y-3 w-full">
            <ProfileField
              title="Nombre"
              value={`${studentSelected.first_name} ${studentSelected.last_name}`} 
            />
            <ProfileField
              title="Correo Electrónico"
              value={studentSelected.email || 'No especificado'}
            />
            <ProfileField
              title="Número de identificación"
              value={studentSelected.identification_id || 'No especificado'} 
            />
            <ProfileField
              title="Número de teléfono"
              value={studentSelected.phone_number || 'No especificado'} 
            />
            <ProfileField
              title="Dirección"
              value={studentSelected.address || 'No especificado'} 
            />
          </div>
        </div>
        <div className="flex flex-col items-center p-4 flex-1">
          <h1 className="text-customGrey font-semibold mb-2">Información de la institución</h1>
          <div className="w-16 h-16 rounded-full bg-customGrey bg-opacity-50" />
          <div className="space-y-3 w-full">
            <ProfileField
              title="Nombre"
              value={`${studentSelected.institution.name}`} 
            />
            <ProfileField
              title="Dirección"
              value={studentSelected.institution.address || 'No especificado'}
            />
            <ProfileField
              title="Misión"
              value={studentSelected.institution.mision || 'No especificado'} 
            />
            <ProfileField
              title="Visión"
              value={studentSelected.institution.vision || 'No especificado'} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendantProfile