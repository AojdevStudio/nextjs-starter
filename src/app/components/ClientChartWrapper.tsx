'use client';

import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ui/error-boundary';

const DentalCaseAcceptanceCharts = dynamic(
  () => import('@/components/charts/DentalCaseAcceptanceCharts'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex items-center justify-center bg-muted rounded-lg">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <div className="text-muted-foreground">Loading charts...</div>
        </div>
      </div>
    ),
  }
);

const ErrorFallback = () => (
  <div className="w-full p-6 text-center bg-destructive/10 rounded-lg">
    <h3 className="text-lg font-semibold text-destructive mb-2">Chart Loading Error</h3>
    <p className="text-muted-foreground">
      There was an error loading the charts. Please try refreshing the page.
    </p>
  </div>
);

export default function ClientChartWrapper() {
  return (
    <div className="w-full">
      <ErrorBoundary fallback={<ErrorFallback />}>
        <DentalCaseAcceptanceCharts />
      </ErrorBoundary>
    </div>
  );
} 