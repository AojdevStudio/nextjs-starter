// This file should work with future versions of NextAuth
// by avoiding version-specific implementation details

// Import from next-auth directly for more stability
import NextAuth from 'next-auth';
import { getServerSession } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

/**
 * NextAuth.js options configuration
 * Using a structure that should remain compatible with future versions
 */
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // This is where you would validate credentials against your database
        // For demo purposes, we'll accept any credentials
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Demo user - in a real app, you would fetch from a database
        if (credentials.email === 'user@example.com' && credentials.password === 'password') {
          return {
            id: '1',
            name: 'Demo User',
            email: 'user@example.com',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
    newUser: '/register',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
};

/**
 * Helper to get the session on the server side
 * Made more resilient to API changes 
 */
export const getServerAuthSession = () => {
  try {
    return getServerSession(authOptions);
  } catch (error) {
    console.error("Auth session error:", error);
    return null;
  }
};

/**
 * Check if the user is authenticated on the server side
 */
export const isAuthenticated = async () => {
  const session = await getServerAuthSession();
  return !!session?.user;
};
