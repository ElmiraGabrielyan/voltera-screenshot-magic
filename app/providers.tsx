"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

function ContactModalWrapper() {
  const { isOpen, closeModal } = useContactModal();
  
  const handleOpenChange = (open: boolean) => {
    // Only handle closing - opening should only happen via openModal()
    if (!open) {
      closeModal();
    }
  };
  
  return <ContactModal open={isOpen} onOpenChange={handleOpenChange} />;
}

function InnerProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <Sonner />
      <ContactModalWrapper />
      {children}
    </>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ContactModalProvider>
          <InnerProviders>{children}</InnerProviders>
        </ContactModalProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
