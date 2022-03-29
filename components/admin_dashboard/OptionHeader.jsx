import { AiOutlineMenu } from 'react-icons/ai';
import SearchInput from "../common/SearchInput";

const OptionHeader = ({ title, showSearchBar, showAddButton, addButtonText }) => {
  return (
    <div className="lg:flex justify-between lg:mb-2">
      <div className="flex justify-between space-x-2 lg:flex-1">
        <div className="flex justify-between items-center space-x-2 lg:space-x-0">
          <AiOutlineMenu className="text-lg text-customGrey lg:hidden"/>
          <h1 className="text-lg lg:text-xl text-customGrey font-semibold">{title}</h1>
        </div>
        {
          showAddButton && (
            <button className="flex justify-center items-center rounded-sm p-1 text-sm lg:text-base bg-accentColor text-white px-2">
              { addButtonText }
            </button>
          )
        }
      </div>
      { 
        showSearchBar && (
          <div className='flex-1'>
            <SearchInput />
          </div>
        )
      } 
    </div>

  )
}

export default OptionHeader