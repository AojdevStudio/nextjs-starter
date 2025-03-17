import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

/**
 * Next.js API route handler for NextAuth
 * This pattern should remain stable across versions
 */
const handler = NextAuth(authOptions);

// Export the handler for all HTTP methods
export { handler as GET, handler as POST };
