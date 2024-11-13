import { Line } from "react-chartjs-2"
import { chartOptions } from "../../utils/ChartOptions"

export const ClaimHistory = ({claimsData}) => {
  const lineChartData = {
    labels: Object.values(claimsData).map(claim => claim.claim_date),
    datasets: [
        {
          label: 'Claim Amount',
          data: Object.values(claimsData).map(claim => claim.claim_amount),
          fill: false,
          borderColor: 'rgb(30, 64, 175)', 
          backgroundColor: 'rgba(30, 64, 175, 0.1)',
          tension: 0.1,
        },
      ],
  }
  return (
    <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-900">Claims History</h2>
      <div className="h-80">
        <Line data={lineChartData} options={chartOptions} />
      </div>
    </div>
  )
}