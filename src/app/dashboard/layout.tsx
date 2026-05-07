"use client";

import { Sidebar } from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, Monitor, Globe, Maximize2, Mail, Bell, Settings } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex flex-col justify-between min-h-screen lg:ml-64">
        <div>
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-white px-4 sm:px-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
              <Input placeholder="Search..." className="pl-9 pr-16" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                ⌘ K
              </span>
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-slate-700">
                    <Globe className="size-4" />
                    Freshmart
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Freshmart</DropdownMenuItem>
                  <DropdownMenuItem>Supermarket</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-[#FE9F43] hover:bg-[#FF8D29] text-white">
                <Plus className="size-4 mr-1" />
                Add New
              </Button>

              <Button className="bg-[#092C4C] hover:bg-slate-800 text-white">
                <Monitor className="size-4 mr-1" />
                POS
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <img src="/placeholder.svg" alt="US" className="size-5 rounded-sm object-cover" />
              </Button>

              <Button variant="ghost" size="icon">
                <Maximize2 className="size-4" />
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Mail className="size-4" />
                <span className="absolute -top-1 -right-1 flex items-center justify-center size-4 text-[10px] font-semibold text-white bg-red-500 rounded-full">
                  01
                </span>
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="size-4" />
              </Button>

              <Button variant="ghost" size="icon">
                <Settings className="size-4" />
              </Button>

              <Avatar className="size-9 border-2 border-orange-100">
                <AvatarImage src="/images/avatar.png" alt="Admin" loading="lazy" />
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
