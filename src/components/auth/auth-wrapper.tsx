"use client";

import { type ComponentProps, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface AuthWrapperProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function AuthWrapper({ children, className, ...props }: AuthWrapperProps) {
  return (
    <div
      className={cn("relative min-h-screen flex flex-col items-center justify-center overflow-hidden", className)}
      {...props}
    >
      <Image src="/images/logo.png" alt="E-Letter Logo" width={120} height={120} className="absolute top-12" />
      <Card className="relative w-full max-w-md mx-4 p-8 shadow-lg bg-white">{children}</Card>
      <Image
        src="/auth.svg"
        alt="decoration"
        layout="full"
        width={0}
        height={0}
        loading="eager"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="absolute bottom-[-130] z-[-9999]"
      />
      <footer className="absolute bottom-6">Copyrights © 2025 - DreamsPOS</footer>
    </div>
  );
}
