import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">React Challenge with Zustand</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Form Management System</h2>
          <p className="mb-4">
            Multi-step form with validation, controlled components, and state
            management using Zustand.
          </p>
          <Link
            to="/form"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Go to Form System
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Data Grid Dashboard</h2>
          <p className="mb-4">
            Optimized data grid with pagination, filtering, sorting, and
            virtualization techniques.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home