import React, { Suspense } from 'react';
import ClientChartWrapper from './components/ClientChartWrapper';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center text-foreground">
          Dental Case Acceptance Analytics
        </h1>
        <p className="text-center text-foreground/80 max-w-3xl mx-auto">
          Comprehensive analytics dashboard showing dental case acceptance rates, financial impact, and industry benchmarks.
        </p>
        <div className="mt-12">
          <Suspense fallback={
            <div className="w-full h-[600px] flex items-center justify-center bg-muted rounded-lg">
              <div className="text-muted-foreground">Loading charts...</div>
            </div>
          }>
            <ClientChartWrapper />
          </Suspense>
        </div>
      </div>
    </main>
  );
} 