"use client";

import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex flex-col justify-between min-h-screen lg:ml-64">
        <div>
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6">
            <div className="flex-1" />

            <div className="flex items-center gap-3">
              <Avatar className="size-9 border-2 border-orange-100">
                <AvatarImage src="/images/avatar.png" alt="Admin" />
                <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">AD</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="p-4 sm:p-6 lg:p-8">{children}</div>
        </div>
        <footer className="bg-white border py-4 px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-black">
            <p>2014-2025 © DreamsPOS. All Right Reserved</p>
            <p>Designed & Developed By Dreams</p>
          </div>
        </footer>
      </main>
      <Toaster />
    </div>
  );
}
