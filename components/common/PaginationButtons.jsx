const PaginationButtons = ({ handlePrev, handleNext, disablePrev, disableNext }) => {
  return (
    <div className="flex justify-center mt-4 space-x-4">
      <button
        disabled={disablePrev}
        onClick={handlePrev}
        className={`${disablePrev && 'text-opacity-70'} text-customGrey font-semibold text-sm underline`}>
          Anterior
      </button>
      <button
        disabled={disableNext}
        onClick={handleNext}
        className={`${disableNext && 'text-opacity-70'} text-customGrey font-semibold text-sm underline`}>
          Siguiente
      </button>
    </div>
  )
}

export default PaginationButtons