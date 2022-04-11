import React, { useState } from "react"
import { MdDone } from "react-icons/md"

const AssistanceCheckBox = React.forwardRef(({ className, student, attended, onChange, ...rest }, ref) => {
  const [checked, setChecked] = useState(attended)

  const handleChecked = (e) => {
    onChange(e)
    setChecked(e.target.checked)
  }

  return (
    <label className={`${className} text-customGrey flex items-center justify-between bg-primaryColor bg-opacity-10 p-2 rounded-sm`}>
      <input
        defaultChecked={attended}
        type="checkbox" 
        className="absolute opacity-0"
        onChange={handleChecked}
        ref={ref}
        {...rest}
      />
      <h1 className="text-sm text-customGrey">{student.first_name} {student.last_name}</h1>
      <div className={`${checked ? 'bg-green-500' : 'bg-white border border-customGrey'} rounded-sm`}>
        <MdDone className="text-white" />
      </div>
    </label>
  )
})

export default AssistanceCheckBox