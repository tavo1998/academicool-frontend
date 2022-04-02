import useStore from '../../store';
import { AiOutlineMenu } from 'react-icons/ai';

const SectionHeader = ({ title, className }) => {
  const setIsSideBarOpen = useStore(state => state.setIsSideBarOpen)

  return (
    <div className={`${className} flex items-center space-x-2 lg:space-x-0`}>
      <button onClick={() => setIsSideBarOpen()}>
        <AiOutlineMenu className="text-lg text-customGrey lg:hidden"/>
      </button>
      <h1 className='text-lg text-customGrey font-semibold'>{ title }</h1>
    </div> 
  )
}

export default SectionHeader