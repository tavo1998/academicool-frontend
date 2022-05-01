import { getAssignmentTypeName } from "../../config/teacher"
import { getScoreBgColor } from "../../lib/scoreColor"

const ScoreAverageItem = ({ assignmentType, score }) => {
  return (
    <div className="flex justify-between items-start">
      <h1 className="text-customGrey text-sm w-4/5 break-words">
        {getAssignmentTypeName(assignmentType)}
      </h1>
      <h1 className={`${score ? getScoreBgColor(parseFloat(score)) : 'bg-customGrey'} text-white text-sm px-2 rounded-full`}>
        {score ? parseFloat(score).toFixed(1) : 'SC'}
      </h1>
    </div>
  )
}

export default ScoreAverageItem