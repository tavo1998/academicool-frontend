const GradeHeader = () => {
  return (
    <div className="hidden lg:block bg-customGrey bg-opacity-10 pl-2 pr-2 pt-2 mt-4">
      <div className="grid grid-cols-12 w-full gap-4 mb-2 pb-2">
        <p className="text-base text-customGrey col-span-1 font-semibold">ID</p>
        <p className="text-base text-customGrey col-span-10 font-semibold">Nombre</p>
      </div>
      <div className="h-px bg-customGrey bg-opacity-20" />
    </div>
  )
}

export default GradeHeader