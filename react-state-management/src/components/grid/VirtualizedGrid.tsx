import { useRef, useCallback } from 'react';
import { User } from '../../types/grid.types';
import { useVirtualization } from '../../hooks/useVirtualization';

interface VirtualizedGridProps {
  users: User[];
}

const VirtualizedGrid = ({ users }: VirtualizedGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const ROW_HEIGHT = 50;
  const CONTAINER_HEIGHT = 500;
  
  const {
    virtualItems,
    containerStyle,
    scrollContainerStyle,
  } = useVirtualization({
    totalItems: users.length,
    itemHeight: ROW_HEIGHT,
    containerHeight: CONTAINER_HEIGHT,
    overscan: 5,
  });
  
  const handleScroll = useCallback(() => {
  }, []);
  
  return (
    <div
      ref={containerRef}
      style={containerStyle}
      onScroll={handleScroll}
      className="border border-gray-200 rounded-lg"
    >
      <div style={scrollContainerStyle}>
        <table className="min-w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {virtualItems.map((virtualItem) => {
              const user = users[virtualItem.index];
              return (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: `${ROW_HEIGHT}px`,
                    transform: `translateY(${virtualItem.offsetY}px)`,
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.department}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VirtualizedGrid;