const DeleteLoading = ({ itemType }) => {
  return (
    <div className='flex justify-center items-center absolute top-0 left-0 w-full h-screen bg-black bg-opacity-20'>
      <div className='flex flex-col items-center bg-white p-4 rounded-md'>
        <h1 className='text-customGrey font-semibold'>Eliminando {itemType},</h1>
        <h1 className='text-customGrey font-semibold'>espera un momento...</h1>
      </div>
    </div>
  )
}

export default DeleteLoading