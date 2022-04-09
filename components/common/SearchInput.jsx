import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({ className }) => {
  return (
    <div className={`${className} flex items-center bg-primaryColor bg-opacity-10 p-2 rounded-sm mt-3 lg:mt-0 lg:ml-2`}>
      <AiOutlineSearch className="text-customGrey mr-2"/>
      <input className="w-full bg-transparent focus:outline-none text-customGrey placeholder:text-sm text-sm" type="text" placeholder="Buscar"/>
    </div>
  )
}

export default SearchInput;