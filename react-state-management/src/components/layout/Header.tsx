import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-indigo-600">React Challenge</h1>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/form" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Form System
            </Link>
            <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
              Data Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
