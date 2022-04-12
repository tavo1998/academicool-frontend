import React, { useState, useEffect } from "react"
import { MdDone } from "react-icons/md"

const AssistanceCheckBox = ({ className, student, attended = false, changeAssistance, setInitAssistance, ...rest }) => {
  const [checked, setChecked] = useState(attended)

  useEffect(() => {
    setInitAssistance(student.id, attended)
  }, [])

  const handleChecked = (e) => {
    setChecked(e.target.checked)
    changeAssistance(student.id, e.target.checked)
  }

  return (
    <label className={`${className} text-customGrey flex items-center justify-between bg-primaryColor bg-opacity-10 p-2 rounded-sm`}>
      <input
        defaultChecked={attended}
        type="checkbox" 
        className="absolute opacity-0"
        onChange={handleChecked}
        {...rest}
      />
      <h1 className="text-sm text-customGrey">{student.first_name} {student.last_name}</h1>
      <div className={`${checked ? 'bg-green-500' : 'bg-white border border-customGrey'} rounded-sm`}>
        <MdDone className="text-white" />
      </div>
    </label>
  )
}

export default AssistanceCheckBox