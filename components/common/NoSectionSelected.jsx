import SectionHeader from "./SectionHeader"

const NoSectionSelected = () => {
  return (
    <div className="flex flex-col p-4 h-screen">
      <SectionHeader />
      <div className="flex flex-1 justify-center items-center">
        <h1 
          className="text-center text-customGrey text-xl lg:text-2xl font-semibold"
        >
          Bienvenido, seleccionada una sección del menú lateral
        </h1>
      </div>
    </div>
  )
}

export default NoSectionSelected