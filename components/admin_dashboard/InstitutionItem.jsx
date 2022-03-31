import { MdModeEdit } from "react-icons/md"

const InstitutionItem = ({ institution }) => {
  return (
    <>
      <div className="bg-customGrey bg-opacity-10 pl-2 pr-2 pt-2">
        <div className="grid grid-cols-12 w-full gap-1 lg:gap-4 mb-2">
          <p className="text-sm text-customGrey">{institution.id}</p>
          <p className="text-sm text-customGrey col-span-10 lg:col-span-2">{institution.name}</p>
          <p className="hidden lg:block text-sm text-customGrey col-span-3">
            {institution.mision}
          </p>
          <p className="hidden lg:block text-sm text-customGrey col-span-3">
          {institution.vision}
          </p>
          <p className="col-span-12 col-start-2 lg:col-span-2 text-sm text-customGrey">
            <span className="lg:hidden text-customGrey font-semibold">Dirección:</span> {institution.address}
          </p>
          <MdModeEdit className="text-customGrey h-4 w-4 justify-self-center col-start-12 col-end-13 row-start-1"/>
        </div>
        <div className="h-px bg-customGrey bg-opacity-20" />
      </div>
    </>
  )
}

export default InstitutionItem;