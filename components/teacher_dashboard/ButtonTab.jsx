import useStore from "../../store"

const ButtonTab = ({ id, title }) => {
  const tabSelected = useStore(state => state.tabSelected)
  const setTabSelected = useStore(state => state.setTabSelected)

  const handleClick = () => {
    setTabSelected(id)
  }

  return (
    <button
      onClick={handleClick}
      className={`${ tabSelected === id ? 'bg-primaryColor text-white rounded-2xl px-2 py-1' : 'text-customGrey'} font-semibold`}
    >
      { title }
    </button>
  )
}

export default ButtonTab