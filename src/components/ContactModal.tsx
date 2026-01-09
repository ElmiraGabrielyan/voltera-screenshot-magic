"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Show success message
      setIsSuccess(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
        onOpenChange(false);
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen && !isSuccess) {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    }
    onOpenChange(isOpen);
  };

  // Reset success state when modal closes
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setIsSuccess(false);
    }
    handleClose(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        {!isSuccess ? (
          <div id="formContainer">
            <DialogHeader className="px-6 pt-6 pb-4">
              <DialogTitle className="text-2xl font-bold">Let&apos;s talk</DialogTitle>
              <DialogDescription className="text-base">
                We&apos;ll respond within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <div className="px-6 pb-6">
              {error && (
                <div className="mb-4 p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                  {error}
                </div>
              )}
              <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Optional"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">
                    Service <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hiring">Hiring</SelectItem>
                      <SelectItem value="workflow">Workflow</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[100px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-foreground font-medium rounded-full h-12 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="success-message px-6 py-12 text-center">
            <div className="success-icon w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center text-3xl font-bold text-foreground">
              ✓
            </div>
            <h3 className="text-2xl font-bold mb-2">Message sent!</h3>
            <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
