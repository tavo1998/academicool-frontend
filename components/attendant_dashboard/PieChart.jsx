import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJs.register(
  Tooltip, Title, ArcElement, Legend
)

const PieChart = ({ attended, notAttended }) => {
  return (
    <div className="flex">
      <div className="w-3/5">
        <Pie
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                onClick: null
              }
            }
          }}
          data={{
            datasets: [
              {
                data: [attended, notAttended],
                backgroundColor: [
                  '#16a34a',
                  '#dc2626',
                ]
              }
            ],
            labels: [
              'Asistió',
              'No Asistió',
            ]
          }}
        />
      </div>
      <div className="flex flex-col justify-center w-2/5">
        <div className="flex items-center space-x-2">
          <div className="bg-green-600 h-2 w-2" />
          <h1 className="text-customGrey text-sm text-center break-words w-full">
            <span className="font-semibold">No. Asistencias:</span> {attended}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-red-600 h-2 w-2" />
          <h1 className="text-customGrey text-sm break-words w-full text-center">
            <span className="font-semibold">No. Faltas:</span> {notAttended}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default PieChart