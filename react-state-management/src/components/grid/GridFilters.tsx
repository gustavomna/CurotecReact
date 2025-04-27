import { ChangeEvent } from 'react';
import useGridStore from '../../store/gridStore';

const GridFilters = () => {
  const { filterConfig, setFilterConfig } = useGridStore();
  
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterConfig({ name: e.target.value });
  };
  
  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterConfig({ role: e.target.value });
  };
  
  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterConfig({ 
      status: e.target.value as 'all' | 'active' | 'inactive' 
    });
  };
  
  const handleDepartmentChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterConfig({ department: e.target.value });
  };
  
  const clearFilters = () => {
    setFilterConfig({
      name: '',
      role: '',
      status: 'all',
      department: '',
    });
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="name-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name-filter"
            type="text"
            value={filterConfig.name}
            onChange={handleNameChange}
            placeholder="Filter by name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <div>
          <label htmlFor="role-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            id="role-filter"
            value={filterConfig.role}
            onChange={handleRoleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Roles</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <select
            id="status-filter"
            value={filterConfig.status}
            onChange={handleStatusChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="department-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Department
          </label>
          <select
            id="department-filter"
            value={filterConfig.department}
            onChange={handleDepartmentChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Support">Support</option>
            <option value="HR">HR</option>
          </select>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={clearFilters}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default GridFilters;
