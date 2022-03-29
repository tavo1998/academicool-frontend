import { MdModeEdit } from "react-icons/md"

const StudentItem = ({ id, name,  identification_id, email, phone_number, address}) => {
  return (
    <>
      <div className="w-full bg-customGrey bg-opacity-10 p-2 mt-4 lg:hidden">
        <div className="flex justify-between">
          <h1 className="text-sm text-customGrey font-semibold">{id} - {name}</h1>
          <MdModeEdit className="text-customGrey"/>
        </div>
        <div className="flex space-x-4">
          <h1 className="text-customGrey text-sm font-normal">
            <span className="text-customGrey font-semibold">ID Num:</span> {identification_id}
          </h1>
          <h1 className="text-customGrey text-sm font-normal">
            <span className="text-customGrey font-semibold">Teléfono:</span> {phone_number}
          </h1>
        </div>
        <h1 className="text-customGrey text-sm font-normal">
            <span className="text-customGrey font-semibold">Email:</span> {email}
          </h1>
      </div>
      <div className="hidden lg:block bg-customGrey bg-opacity-10 pl-2 pr-2 pt-2">
        <div className="grid grid-cols-12 w-full gap-4 mb-2">
          <p className="text-sm text-customGrey">{id}</p>
          <p className="text-sm text-customGrey col-span-2">{name}</p>
          <p className="text-sm text-customGrey col-span-2">{identification_id}</p>
          <p className="text-sm text-customGrey col-span-2">{phone_number}</p>
          <p className="text-sm text-customGrey col-span-2">{email}</p>
          <p className="text-sm text-customGrey col-span-2">{address}</p>
          <MdModeEdit className="text-customGrey h-4 w-4 justify-self-center"/>
        </div>
        <div className="h-px bg-customGrey bg-opacity-20" />
      </div>
    </>
  )
}

export default StudentItem