import AccentButton from "./AccentButton"

const DeleteError = ({ handleClick }) => {
  return (
    <div className='flex justify-center items-center absolute top-0 left-0 bg-black bg-opacity-20 w-full h-screen p-4'>
      <div className='bg-white p-4 rounded-md'>
        <h1 className='text-customGrey text-center'>
          Ocurrió un error al intentar eliminar el item
        </h1>
        <h1 className='text-customGrey text-center mb-2'>
          inténtelo más tarde
        </h1>
        <AccentButton
          className="py-1"
          text="Aceptar"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default DeleteError