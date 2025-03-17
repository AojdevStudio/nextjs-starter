import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Navigation } from "@/components/Navigation"

// Use next built-in font loader for Inter font
// This approach should remain stable across Next.js versions
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Dental Case Acceptance Analytics',
  description: 'Analytics dashboard for dental case acceptance rates and insights',
  keywords: ['Dental', 'Analytics', 'Case Acceptance', 'Healthcare'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
