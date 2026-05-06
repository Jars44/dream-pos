"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { useAuth } from "@/lib/auth-context";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/sign-in");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-slate-500">Redirecting to login...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="lg:ml-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-sm font-bold text-orange-600">A</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-800">Admin</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
      <Toaster />
    </div>
  );
}
