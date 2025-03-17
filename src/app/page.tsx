import Link from 'next/link';
import { Suspense } from 'react';
import Header from '@/components/layout/header';
import HeroSection from '@/components/common/hero-section';
import { getButtonClassNames } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
        </Suspense>

        <section className="container-custom py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">App Router</h3>
              <p className="mb-4 text-muted-foreground">
                Built with Next.js 15+ App Router for powerful file-based routing capabilities.
              </p>
              <Link
                href="https://nextjs.org/docs"
                className={getButtonClassNames({ variant: 'outline', size: 'sm' })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </div>

            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Tailwind CSS</h3>
              <p className="mb-4 text-muted-foreground">
                Styled with Tailwind CSS for rapid UI development with utility classes.
              </p>
              <Link
                href="https://tailwindcss.com/docs"
                className={getButtonClassNames({ variant: 'outline', size: 'sm' })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </div>

            <div className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">Authentication</h3>
              <p className="mb-4 text-muted-foreground">
                Secure authentication with NextAuth.js for easy implementation of auth providers.
              </p>
              <Link
                href="https://authjs.dev/getting-started/introduction"
                className={getButtonClassNames({ variant: 'outline', size: 'sm' })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container-custom text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Next.js Starter Kit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
