"use client";

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface EmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  chartId: string;
  chartName: string;
}

export default function EmbedModal({ isOpen, onClose, chartId, chartName }: EmbedModalProps) {
  const [activeTab, setActiveTab] = useState("iframe");
  const { toast } = useToast();

  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const embedUrl = `${baseUrl}/embed/charts/${chartId}`;

  const embedCodes = {
    iframe: `<iframe src="${embedUrl}" width="100%" height="400" frameborder="0"></iframe>`,
    notion: `${embedUrl}`,
    wordpress: `[iframe src="${embedUrl}" width="100%" height="400"]`
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Embed code copied to clipboard",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy code",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Embed {chartName}</DialogTitle>
          <DialogDescription>
            Choose your preferred embed format and copy the code.
          </DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="iframe">iFrame</TabsTrigger>
            <TabsTrigger value="notion">Notion</TabsTrigger>
            <TabsTrigger value="wordpress">WordPress</TabsTrigger>
          </TabsList>
          {Object.entries(embedCodes).map(([type, code]) => (
            <TabsContent key={type} value={type} className="space-y-4">
              <div className="space-y-2">
                <Label>Embed Code</Label>
                <div className="relative">
                  <Input
                    readOnly
                    value={code}
                    className="pr-20 font-mono text-sm"
                  />
                  <Button
                    size="sm"
                    onClick={() => copyToClipboard(code)}
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    Copy
                  </Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {type === "iframe" && (
                  <p>Paste this code into your HTML to embed the chart.</p>
                )}
                {type === "notion" && (
                  <p>Copy this URL and paste it into a Notion embed block.</p>
                )}
                {type === "wordpress" && (
                  <p>Use this shortcode in your WordPress post or page.</p>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
} 