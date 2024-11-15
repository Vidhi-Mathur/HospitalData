import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { FinancialOverview } from "./components/Pages/FinancialOverview"
import { ClaimHistory } from "./components/Pages/ClaimHistory"
import { LimitUtilization } from "./components/Pages/LimitUtilization"
import { Layout } from "./components/UI/Layout"
import { AdditionalInfo } from "./components/Pages/AdditionalInfo"
import { ErrorPage } from "./components/Pages/ErrorPage"

function App() {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://hospitaldata-2.onrender.com/');
            const result = await response.json();
            if(!response.ok){
                setError(result.message || "Failed to get response, try again later")
                return
            }
            setData(result.data);
        } 
        catch(error){
          setError(error.message)
        } 
        finally {
          setIsLoading(false)
        }
      };
      fetchData()
  }, [])

  return (
    <Router>
        <Layout hospitalName={data?.hospital_name}>
        {isLoading && <div className="text-center mt-8">Loading...</div>}
        {!isLoading && error && <div className="text-center mt-8 text-red-500">Error: {error}</div>}
        {!isLoading && !error && data && <Routes>
          <Route path="/" element={<ClaimHistory claimsData={data.claims_data} />} />
          <Route path="/financial-overview" element={<FinancialOverview data={data} />} />
          <Route path="/limit-utilization" element={<LimitUtilization data={data} />} />
          <Route path="/additional-info" element={<AdditionalInfo data={data} />} />
          <Route path="/additional-info" element={<AdditionalInfo data={data} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>}
        </Layout>
    </Router>
  )
}

export default App
