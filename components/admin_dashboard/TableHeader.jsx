const TableHeader = ({ headerNames }) => {
  return (
    <div className="hidden lg:block bg-customGrey bg-opacity-10 pl-2 pr-2 pt-2 mt-4">
      <div className="grid grid-cols-12 w-full gap-4 mb-2 pb-2">
        {
          headerNames.map(header => {
            return <p key={header.name} className={`text-base text-customGrey col-span-${header.col} font-semibold`}>{header.name}</p>
          })
        }
      </div>
      <div className="h-px bg-customGrey bg-opacity-20" />
    </div>
  )
}

export default TableHeader