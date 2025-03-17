"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import EmbedModal from './EmbedModal';

interface CopyButtonProps {
  chartId: string;
  chartName: string;
}

const CopyButton = ({ chartId, chartName }: CopyButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10 hover:bg-accent hover:text-accent-foreground"
        onClick={() => setIsOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      </Button>
      <EmbedModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        chartId={chartId}
        chartName={chartName}
      />
    </>
  );
}

export default CopyButton; 