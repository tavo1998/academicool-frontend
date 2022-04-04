import { MdModeEdit } from "react-icons/md"

const NoticeDesktopItem = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between">
        <h1 className="text-customGrey font-semibold">
          Traer compás y transportador  
        </h1>
        <MdModeEdit className="h-5 w-5 text-customGrey"/>
      </div>
      <h1 className="text-customGrey">2022/03/15</h1>
      <p className="mt-2 text-customGrey">
        Para la próxima clase, vamos a hacer uso del compás y el transportador para realizar ejercicios planteados que fueron propuestos en la clase anterior.
      </p>
      <div className="bg-customGrey opacity-30 h-[1px] mt-2" />
    </div>
  )
}

export default NoticeDesktopItem