import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Header from '@/components/layout/header';
import { getServerAuthSession, isAuthenticated } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Dashboard - Next.js Starter Kit',
  description: 'User dashboard page',
};

export default async function DashboardPage() {
  // Check if user is authenticated
  const isAuth = await isAuthenticated();
  
  if (!isAuth) {
    redirect('/login');
  }
  
  const session = await getServerAuthSession();
  const user = session?.user;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Welcome back, {user?.name || 'User'}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Project structure created</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Authentication configured</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 text-amber-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Customize your application</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-2 h-5 w-5 text-amber-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Build and deploy your app</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">Documentation</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://nextjs.org/docs"
                    className="text-primary-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Next.js Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/docs"
                    className="text-primary-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tailwind CSS Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://authjs.dev/getting-started/introduction"
                    className="text-primary-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NextAuth.js Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.typescriptlang.org/docs/"
                    className="text-primary-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TypeScript Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-primary-50 p-6 shadow-sm dark:bg-primary-950/50">
              <h2 className="mb-4 text-xl font-semibold">What's Next?</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                This starter kit includes everything you need to build modern web applications with
                Next.js. Customize it to fit your needs!
              </p>
              <ul className="space-y-3 text-sm">
                <li>Create new page layouts</li>
                <li>Add database integration</li>
                <li>Implement API routes</li>
                <li>Set up testing</li>
                <li>Deploy your application</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
