import { User } from 'next-auth';

/**
 * Extended user type with optional ID
 */
export interface ExtendedUser extends User {
  id?: string;
}

/**
 * Common API response type
 */
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

/**
 * Common pagination metadata
 */
export interface PaginationMetadata {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

/**
 * Paginated data response
 */
export interface PaginatedResponse<T> {
  items: T[];
  metadata: PaginationMetadata;
}

/**
 * Form submission status
 */
export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';
