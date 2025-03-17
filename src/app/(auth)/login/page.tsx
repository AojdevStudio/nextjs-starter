import Link from 'next/link';
import { Metadata } from 'next';
import LoginForm from '@/components/auth/login-form';

export const metadata: Metadata = {
  title: 'Sign In - Next.js Starter Kit',
  description: 'Sign in to your account',
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg border bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Sign in to your account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Or{' '}
            <Link href="/register" className="text-primary-600 hover:underline">
              create a new account
            </Link>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
