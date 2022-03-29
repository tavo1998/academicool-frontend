import { MdModeEdit } from "react-icons/md"

const GradeItem = ({ id, name }) => {
  return (
    <>
      <div className="w-full bg-customGrey bg-opacity-10 p-2 mt-4 lg:hidden">
        <div className="flex justify-between">
          <h1 className="text-sm text-customGrey font-semibold">{name}</h1>
          <MdModeEdit className="text-customGrey"/>
        </div>
      </div>
      <div className="hidden lg:block bg-customGrey bg-opacity-10 pl-2 pr-2 pt-2">
        <div className="grid grid-cols-12 w-full gap-4 mb-2">
          <p className="text-sm text-customGrey">{id}</p>
          <p className="text-sm text-customGrey col-span-10">{name}</p>
          <MdModeEdit className="text-customGrey h-4 w-4 justify-self-center"/>
        </div>
        <div className="h-px bg-customGrey bg-opacity-20" />
      </div>
    </>
  )
}

export default GradeItem;