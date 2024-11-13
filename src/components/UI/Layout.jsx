import { Menu, X } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const sideBarLinks = [
  { url: '/', portion: 'Claim History' },
  { url: '/financial-overview', portion: 'Financial Overview' },
  { url: '/limit-utilization', portion: 'Limit Utilization' },
  { url: '/additional-info', portion: 'Additional Information' },
]

export const Layout = ({children, hospitalName = "Default hospital"}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
    const sidebarToggler = () => {
        setIsSidebarOpen(prevState => !prevState)
    }
  
    return (
        <div className="flex h-screen bg-blue-900">
            <header className="fixed top-0 left-0 right-0 bg-blue-800 p-4 flex justify-between items-center z-10">
                <h2 className="text-xl font-semibold text-white">{hospitalName}</h2>
                <button onClick={sidebarToggler} className="text-white" aria-label="Toggle Sidebar">
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>
            <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-blue-800 shadow-md transition-transform duration-300 ease-in-out z-20 pt-16`}>
                <nav className="mt-4 mb-4">
                    {sideBarLinks.map((link) => (
                    <NavLink to={link.url} key={link.url}className={({ isActive }) => `block py-2 px-4 text-white hover:bg-blue-700 ${isActive ? 'bg-blue-700 font-semibold' : ''}`} end onClick={() => setIsSidebarOpen(false)}>
                        {link.portion}
                    </NavLink>
                    ))}
                </nav>
            </div>
            <div className="flex-1 overflow-y-auto bg-white pt-16">
                <div className="flex justify-center items-start min-h-full p-4 lg:p-6">
                    <div className="w-full max-w-4xl">{children}</div>
                </div>
            </div>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={() => setIsSidebarOpen(false)} />
            )}
        </div>
      )
    }


  