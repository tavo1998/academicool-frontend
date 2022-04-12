import { useEffect, useState } from "react"
import TextInputField from "./../common/TextInputField"

const QualifyInput = ({ className, student, defaultScore = 0, defaultCommentary = '', changeScore, changeCommentary, setInitScores, ...rest }) => {
  const [score, setScore] = useState(defaultScore)
  const [commentary, setCommentary] = useState(defaultCommentary)

  useEffect(() => {
    setInitScores(student.id, defaultScore, defaultCommentary)
  }, [])

  useEffect(() => {
    setScore(defaultScore)
    setCommentary(defaultCommentary)
  }, [defaultScore, defaultCommentary])

  const handleScoreChange = (e) => {
    setScore(e.target.value)
    changeScore(student.id, e.target.value)
  }

  const handleCommentaryChange = (e) => {
    changeCommentary(student.id, e.target.value)
    setCommentary(e.target.value)
  }

  return (
    <div className={`${className} flex flex-col`}>
      <h1 className="text-customGrey text-sm w-4/5 break-words font-semibold mb-2">
        {student.first_name} {student.last_name}
      </h1>
      <label className="flex items-center justify-between text-sm text-customGrey mb-2">
        <h1>Nota:</h1>
        <input
            onChange={handleScoreChange}
            name={student.id}
            value={score}
            min="0.0"
            max="5.0"
            step="0.1"
            className=" bg-primaryColor bg-opacity-10 focus:outline-none text-customGrey text-sm py-1 text-center" 
            type="number"
            {...rest}
          />
      </label>
      <label className="flex justify-between items-center text-sm text-customGrey space-x-2">
        <h1>Comentario:</h1>
        <TextInputField
          value={commentary}
          onChange={handleCommentaryChange}
          placeholder="Escribe un comentario"
          maxLength={100}
        />
      </label>
      <div className="bg-customGrey bg-opacity-20 mt-4 h-[1px]" />
    </div>

  )
}

export default QualifyInput