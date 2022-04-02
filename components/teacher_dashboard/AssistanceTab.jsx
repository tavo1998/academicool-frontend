import Calendar from "../common/Calendar"

const AssistanceTab = () => {
  const handleDate = (date) => {
    console.log(date.toString())
  }

  return (
    <div>
      <Calendar handleDate={handleDate} />
    </div>
  )
}

export default AssistanceTab