import { AiOutlineMenu } from 'react-icons/ai';

const OptionHeader = () => {
  return (
    <div className="flex justify-between space-x-2">
      <div className="flex justify-between items-center space-x-2">
        <AiOutlineMenu className="text-lg text-customGrey"/>
        <h1 className="text-lg text-customGrey font-semibold">Header</h1>
      </div>
      <button className="flex justify-center items-center rounded-sm p-1 text-sm bg-accentColor text-white px-2">
        Agregar Institución
      </button>
    </div>
  )
}

export default OptionHeader