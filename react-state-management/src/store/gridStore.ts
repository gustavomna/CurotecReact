import { create } from 'zustand';
import { 
  User, 
  SortConfig, 
  FilterConfig, 
  PaginationConfig 
} from '../types/grid.types';

interface GridState {
  users: User[];
  loading: boolean;
  error: string | null;
  sortConfig: SortConfig;
  filterConfig: FilterConfig;
  paginationConfig: PaginationConfig;
  
  // Actions
  fetchUsers: () => Promise<void>;
  setSortConfig: (config: SortConfig) => void;
  setFilterConfig: (config: Partial<FilterConfig>) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (itemsPerPage: number) => void;
  
  // Computed
  filteredUsers: User[];
  paginatedUsers: User[];
  totalPages: number;
}

// Mock data generator
const generateMockUsers = (count: number): User[] => {
  const departments = ['Engineering', 'Marketing', 'Sales', 'Support', 'HR'];
  const roles = ['Admin', 'User', 'Manager', 'Developer', 'Designer'];
  const statuses: Array<'active' | 'inactive'> = ['active', 'inactive'];
  
  return Array.from({ length: count }, (_, i) => {
    const joinDate = new Date();
    joinDate.setDate(joinDate.getDate() - Math.floor(Math.random() * 1000));
    
    const lastActive = new Date();
    lastActive.setDate(lastActive.getDate() - Math.floor(Math.random() * 100));
    
    return {
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: roles[Math.floor(Math.random() * roles.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      department: departments[Math.floor(Math.random() * departments.length)],
      joinDate: joinDate.toISOString().split('T')[0],
      lastActive: lastActive.toISOString().split('T')[0],
    };
  });
};

const useGridStore = create<GridState>((set, get) => ({
  users: [],
  loading: false,
  error: null,
  sortConfig: {
    key: null,
    direction: 'asc',
  },
  filterConfig: {
    name: '',
    role: '',
    status: 'all',
    department: '',
  },
  paginationConfig: {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
  },
  
  fetchUsers: async () => {
    set({ loading: true, error: null });
    
    try {
      const mockUsers = generateMockUsers(100);
      
      console.log('Mock users generated:', mockUsers.length);
      
      set({ 
        users: mockUsers, 
        loading: false,
        paginationConfig: {
          ...get().paginationConfig,
          totalItems: mockUsers.length,
        },
      });
    } catch (error) {
      set({ 
        loading: false, 
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  },
  
  setSortConfig: (config) => {
    set({ sortConfig: config });
  },
  
  setFilterConfig: (config) => {
    set({ 
      filterConfig: { ...get().filterConfig, ...config },
      paginationConfig: { ...get().paginationConfig, currentPage: 1 },
    });
  },
  
  setCurrentPage: (page) => {
    set({ 
      paginationConfig: { ...get().paginationConfig, currentPage: page },
    });
  },
  
  setItemsPerPage: (itemsPerPage) => {
    set({
      paginationConfig: { 
        ...get().paginationConfig, 
        itemsPerPage, 
        currentPage: 1,
      },
    });
  },
  
  get filteredUsers() {
    const { users, filterConfig } = get();
    
    console.log('Filtering users:', users.length, filterConfig);
    
    let result = users.filter((user) => {
      return (
        (filterConfig.name === '' ||
          user.name.toLowerCase().includes(filterConfig.name.toLowerCase())) &&
        (filterConfig.role === '' || 
          user.role === filterConfig.role) &&
        (filterConfig.status === 'all' || 
          user.status === filterConfig.status) &&
        (filterConfig.department === '' || 
          user.department === filterConfig.department)
      );
    });
    
    const { sortConfig } = get();
    if (sortConfig.key) {
      result = [...result].sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return result;
  },
  
  get paginatedUsers() {
    const { filteredUsers, paginationConfig } = get();
    const { currentPage, itemsPerPage } = paginationConfig;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const result = filteredUsers.slice(startIndex, startIndex + itemsPerPage);
    
    console.log('Paginated users:', result.length, 'Page:', currentPage, 'of', get().totalPages);
    
    return result;
  },
  
  get totalPages() {
    const { filteredUsers, paginationConfig } = get();
    return Math.ceil(filteredUsers.length / paginationConfig.itemsPerPage);
  },
}));

export default useGridStore;