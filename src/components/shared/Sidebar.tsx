"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronsLeft, Menu, X, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sidebarData } from "@/lib/sidebar-data";
import Image from "next/image";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
      </Button>

      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 transform bg-white border transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-20 items-center gap-3 border-b px-6">
          <Image src="/images/logo.webp" alt="Logo" width={120} height={40} loading="lazy" />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-[-20] h-9 w-9 rounded-full bg-primary text-white hover:text-white hover:bg-[#FF8D29] hidden md:inline-flex"
            onClick={() => {}}
          >
            <ChevronsLeft className="size-5 hover:text-white" />
          </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-4rem)] py-4">
          <nav className="px-3 space-y-6">
            {sidebarData.map((category) => (
              <div key={category.title}>
                <h3 className="mb-2 px-3 text-xs font-bold uppercase tracking-wider text-black">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                      <li key={`${category.title}-${item.title}`}>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                            isActive
                              ? "bg-orange-50 text-primary font-semibold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-800",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="size-5" />
                          <span className="flex-1">{item.title}</span>
                          {/* {isActive && (
                            <div className="flex items-center justify-center rounded-full w-6 h-6 bg-orange-100">
                              <ChevronDown className="size-4" />
                            </div>
                          )} */}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
