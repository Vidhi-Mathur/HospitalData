import { Pie } from "react-chartjs-2"
import { chartOptions } from "../../utils/ChartOptions"

export const LimitUtilization = ({data}) => {
  const pieChartData = {
    labels: ['Utilised', 'Unutilised'],
    datasets: [
      {
        data: [data.current_limit_utilised_percentage, data.current_unutilised_funds_percentage],
        backgroundColor: ['rgba(30, 64, 175, 0.8)', 'rgba(191, 219, 254, 0.8)'],
        borderColor: ['rgba(30, 64, 175, 1)', 'rgba(191, 219, 254, 1)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-900">Current Limit Utilization</h2>
      <div className="h-64">
        <Pie data={pieChartData} options={chartOptions} />
      </div>
      <div className="mt-6 text-blue-900 font-semibold">
        <p>Current Utilised Funds: {data.current_limit_utilised.toLocaleString()}</p>
        <p>Current Unutilized Funds: {data.current_unutilised_funds.toLocaleString()}</p>
      </div>
    </div>
  );
}