import React from "react"
import { getAssignmentTypeName } from "../../config/teacher"

const AssignmentTypeInput = React.forwardRef(({ assignmentTypes, error, ...rest }, ref) => {
  return (
    <>
      <h1 className="text-customGrey text-sm font-semibold">Tipo de asignación</h1>
        <select
          className="w-full bg-primaryColor bg-opacity-10 p-2 text-customGrey text-sm focus:outline-none"
          ref={ref}
          {...rest}
        >
          {assignmentTypes.map(
            assignmentType => (
              <option key={assignmentType} value={assignmentType}>{getAssignmentTypeName(assignmentType)}</option>
            ) 
          )}
      </select>
      <span className="text-xs lg:text-sm text-red-600">{error}</span>
    </>
  )
})

export default AssignmentTypeInput