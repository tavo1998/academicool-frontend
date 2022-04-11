import AccentButton from "./AccentButton"

const DeleteWarning = ({ handleAccept, handleCancel, info}) => {
  return (
    <div 
      className={`flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-black bg-opacity-20 p-4`}>
      <div className='flex flex-col items-center bg-white p-4 rounded-md'>
        <h1 className='text-red-600 font-semibold'>¡Advertencia!</h1>
        <h1 className='text-customGrey font-semibold text-center'>¿ Estás seguro que deseas eliminar este item ?</h1>
        <h1 className='text-customGrey font-semibold text-center'>{info}</h1>
        <div className='flex space-x-2 mt-2'>
          <AccentButton
            className="px-4 py-1"
            text="Eliminar"
            onClick={handleAccept}
          />
          <AccentButton
            className="px-4 py-1"
            text="Cancelar"
            onClick={handleCancel}
          />
        </div>
      </div>
    </div>
  )
}

export default DeleteWarning