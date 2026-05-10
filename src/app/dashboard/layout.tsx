"use client";

import { Sidebar } from "@/components/shared/Sidebar";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex flex-col justify-between min-h-screen lg:ml-64">
        <div>
          <Header />
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </div>
        <Footer />
      </main>
      <Toaster />
    </div>
  );
}
