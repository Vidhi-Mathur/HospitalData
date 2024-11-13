import { Bar } from "react-chartjs-2"
import { chartOptions } from "../../utils/ChartOptions"

export const FinancialOverview = ({data}) => {
  const barChartData = {
    labels: ['Total Limit', 'Utilised', 'Unutilised', 'Discounted', 'Repaid', 'Interest Paid', 'Total Due'],
    datasets: [
      {
        label: 'Amount (INR)',
        data: [
          data.total_limit_allocated,
          data.current_limit_utilised,
          data.current_unutilised_funds,
          data.bill_amount_discounted_to_date,
          data.amount_repaid_to_date,
          data.interest_paid_on_borrowed_amt_to_date,
          data.total_due,
        ],
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgba(29, 78, 216, 1)',
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-900">Financial Overview</h2>
      <div className="h-64">
        <Bar data={barChartData} options={chartOptions} />
      </div>
    </div>
  )
}