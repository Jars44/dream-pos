"use client";

import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/shared/Header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex flex-col justify-between min-h-screen lg:ml-64">
        <div>
          <Header />
          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </div>
        <footer className="bg-white border py-4 px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-s text-black">
            <p>2014-2025 © DreamsPOS. All Right Reserved</p>
            <p className="text-slate-500">Designed & Developed By <span className="text-primary">Dreams</span></p>
          </div>
        </footer>
      </main>
      <Toaster />
    </div>
  );
}
