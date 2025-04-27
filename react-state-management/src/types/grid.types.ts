export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    department: string;
    joinDate: string;
    lastActive: string;
  }
  
  export type SortDirection = 'asc' | 'desc';
  
  export interface SortConfig {
    key: keyof User | null;
    direction: SortDirection;
  }
  
  export interface FilterConfig {
    name: string;
    role: string;
    status: 'all' | 'active' | 'inactive';
    department: string;
  }
  
  export interface PaginationConfig {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
  }