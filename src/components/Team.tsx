"use client";

import Image from "next/image";
import Image1 from '@/assets/images/Elmira.jpg'
import Image2 from '@/assets/images/Lilit.jpg'
import Image3 from '@/assets/images/Mher.jpg'
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Team = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const teamImages = [Image1, Image2, Image3];

  return (
    <section id="team" className="py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-20">
          <div>
            <h2 className="text-6xl font-bold leading-tight">
              The people
              <br />
              behind the work.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-lg mb-4">
              We&apos;re a team{" "}
              <span className="font-semibold text-foreground">
                with background in marketing, sales, team recruitment and product operations.
              </span>
            </p>
            <p className="text-muted-foreground">
              Our work is personal, practical, and focused on what your business actually needs.
            </p>
          </div>
        </div>

        {/* Team images grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[3/4] bg-muted rounded-3xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform md:mt-12 cursor-pointer hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image}
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <DialogPrimitive.Root open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className={cn(
              "fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            )}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedImage(null);
              }
            }}
          >
            {selectedImage && (
              <div className="relative w-[40rem] h-full max-w-7xl max-h-full">
                <Image
                  src={selectedImage}
                  alt="Team member enlarged"
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
};

export default Team;
