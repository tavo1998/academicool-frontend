import { AiOutlineSearch } from 'react-icons/ai';

const SearchInputDesktop = ({ className, placeholder }) => {
  return (
    <label className={`${className} flex items-center space-x-2 px-2 w-3/5 rounded-sm`}>
      <AiOutlineSearch className='h-4 w-4 text-customGrey text-opacity-50' />
      <input 
        className="w-full bg-transparent focus:outline-none placeholder:text-customGrey placeholder:text-opacity-50 text-customGrey" 
        type="text" 
        placeholder={placeholder}/>
    </label>
    
  )
}

export default SearchInputDesktop