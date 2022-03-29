const InstitutionHeader = () => {
  return (
    <div className="hidden lg:block bg-customGrey bg-opacity-10 pl-2 pr-2 pt-2">
      <div className="grid grid-cols-12 w-full gap-4 mb-2 pb-2">
      <p className="text-base text-customGrey font-semibold">ID</p>
        <p className="text-base text-customGrey col-span-3 font-semibold">Nombre</p>
        <p className="text-base text-customGrey col-span-3 font-semibold">Misión</p>
        <p className="text-base text-customGrey col-span-2 font-semibold">Visión</p>
        <p className="text-base text-customGrey font-semibold">Ciudad</p>
        <p className="text-base text-customGrey font-semibold">Dirección</p>
      </div>
      <div className="h-px bg-customGrey bg-opacity-20" />
    </div>
  )
}

export default InstitutionHeader;