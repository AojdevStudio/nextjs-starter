import Link from 'next/link'
import { cn } from "@/lib/utils"

export function Navigation({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("bg-background border-b", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold">Dental Analytics</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className="inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link 
              href="/research" 
              className="inline-flex items-center px-1 pt-1 text-sm font-medium"
            >
              Research Paper
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 