import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Form System', path: '/form' },
    { label: 'Data Dashboard', path: '/dashboard' },
  ]
  
  return (
    <aside className="w-64 bg-indigo-700 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold">React Challenge</h2>
      </div>
      <nav className="mt-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-6 py-3 hover:bg-indigo-600 ${
                  location.pathname === item.path ? 'bg-indigo-800' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
