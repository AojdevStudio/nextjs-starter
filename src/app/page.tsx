import React, { Suspense } from 'react';
import { Metadata } from 'next';
import ClientChartWrapper from './components/ClientChartWrapper';

export const metadata: Metadata = {
  title: 'Dental Case Acceptance Analytics | Practice Insights',
  description: 'Comprehensive analytics dashboard showing dental case acceptance rates, financial impact, and industry benchmarks.',
  openGraph: {
    title: 'Dental Case Acceptance Analytics | Practice Insights',
    description: 'Comprehensive analytics dashboard showing dental case acceptance rates, financial impact, and industry benchmarks.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" role="main" aria-labelledby="page-title">
      <div className="space-y-8">
        <h1 id="page-title" className="text-4xl font-bold text-center text-foreground">
          Dental Case Acceptance Analytics
        </h1>
        <p className="text-center text-foreground/80 max-w-3xl mx-auto">
          Comprehensive analytics dashboard showing dental case acceptance rates, financial impact, and industry benchmarks.
        </p>
        <div className="mt-12">
          <Suspense fallback={
            <div className="w-full h-[600px] flex items-center justify-center bg-muted rounded-lg" role="progressbar" aria-label="Loading charts">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <div className="text-muted-foreground">Loading charts...</div>
              </div>
            </div>
          }>
            <ClientChartWrapper />
          </Suspense>
        </div>
      </div>
    </main>
  );
} 