export const AdditionalInfo = ({data}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">Additional Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-blue-800">
                <li>Claimbook UHID: {data.claimbook_uhid}</li>
                <li>Subvention per claim: ₹{data.subvention_per_claim.toLocaleString()}</li>
                <li>Repayment tenure: {data.repayment_tenure}</li>
                <li>Upcoming repayment date: {data.upcoming_repayment_date}</li>
                <li>Amount to be repaid on upcoming date: ₹{data.amount_to_be_repaid_on_upcoming_date.toLocaleString()}</li>
            </ul>
        </div>
    )
  }