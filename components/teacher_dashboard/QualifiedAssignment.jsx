import AccentButton from "../common/AccentButton"
import QualifyInput from "../common/QualifyInput"

const QualifiedAssignment = () => {

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1 
        className="text-customGrey font-semibold lg:text-lg"
      >
        Calificar - Ejercicios de pitagoras
      </h1>
      <form onSubmit={onSubmit}>
        <QualifyInput
          className="mt-2"
          userName="Gustavo Adolfo Pinto Zapata"
          name="5"
        />
        <AccentButton
          className="py-1 mt-4"
          text="Calificar"
        />
      </form>
    </div>
  )
}

export default QualifiedAssignment