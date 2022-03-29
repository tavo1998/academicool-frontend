import { MdModeEdit } from "react-icons/md"

const InstitutionCard = ({ name, city, address }) => {
  return (
    <div className="w-full bg-customGrey bg-opacity-10 p-2 mt-4">
      <div className="flex justify-between">
        <h1 className="text-sm text-customGrey font-semibold">{name}</h1>
        <MdModeEdit className="text-customGrey"/>
      </div>
      <div className="flex space-x-4">
        <h1 className="text-customGrey text-sm font-normal">
          <span className="text-customGrey font-semibold">Ciudad:</span> {city}
        </h1>
        <h1 className="text-customGrey text-sm font-normal">
          <span className="text-customGrey font-semibold">Dirección:</span> {address}
        </h1>
      </div>
    </div>
  )
}

export default InstitutionCard;