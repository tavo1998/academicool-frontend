const SectionHeader = ({ text, icon: Icon }) => {
  return (
    <div>
      <div className="flex items-center overflow-hidden">
      { Icon && <Icon className="text-white mr-2"/> }
      <h1 className="text-white font-semibold lg:text-lg">{text}</h1>
      </div>
      <div className="w-full h-[1px] bg-white mt-1"/>
    </div>
  )
}

export default SectionHeader;