import { MdModeEdit } from "react-icons/md"

const NoticeItem = ({ className, notice }) => {
  return (
    <div className={`${className} bg-primaryColor bg-opacity-10 p-2 rounded-sm`}>
      <div className="flex justify-between items-center">
        <h1 className="text-customGrey text-sm font-semibold">Traer compás y transportador</h1>
        <MdModeEdit className="text-customGrey" />
      </div>
      <h1 className="text-customGrey text-xs">2022/03/15</h1>
      <p
        className="text-customGrey text-sm mt-2">
        Para la próxima clase, vamos a hacer uso del compás y el transportador para realizar ejercicios planteados que fueron propuestos en clase
      </p>
    </div>
  )
}

export default NoticeItem