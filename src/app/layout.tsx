import './globals.css';
import { AuthProvider } from '@/components/auth/auth-provider';
import { Inter } from 'next/font/google';

// Use next built-in font loader for Inter font
// This approach should remain stable across Next.js versions
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Next.js Starter Kit',
  description: 'A modern Next.js starter template with all the best practices',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
