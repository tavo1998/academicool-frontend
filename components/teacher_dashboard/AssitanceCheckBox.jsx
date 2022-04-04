import { useState } from "react"

const AssistanceCheckBox = ({ className }) => {
  const [checked, setChecked] = useState(false)

  const handleChecked = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <label className={`${className} text-customGrey flex items-center justify-between bg-primaryColor bg-opacity-10 p-2 rounded-sm`}>
      <input type="checkbox" className="absolute opacity-0" onChange={handleChecked} checked={checked}/>
      <h1>Gustavo Adolfo Pinto Zapata</h1>
      <div className={`${checked ? 'bg-green-500' : 'bg-white border border-customGrey'} p-2 rounded-sm`} />
    </label>
  )
}

export default AssistanceCheckBox