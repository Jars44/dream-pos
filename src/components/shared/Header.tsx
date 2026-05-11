import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Mail, Bell, Settings, ChevronDown, LaptopMinimal, CirclePlus, Maximize } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between gap-4 border-b bg-white px-4 sm:px-6">
      <div className="relative ml-2 flex-1 max-w-2xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
        <Input placeholder="Search..." className="pl-9 pr-16" />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-black bg-zinc-2va00 px-1.5 py-0.5 rounded flex justify-center items-center w-10 h-6">
          ⌘ K
        </span>
      </div>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 border-slate-200 text-slate-700">
              <Image
                src="/images/icons/freshmart.webp"
                alt="Logo"
                height={20}
                width={20}
                className="object-cover w-4 h-4 rounded-xs"
                loading="lazy"
              />
              Freshmart
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Freshmart</DropdownMenuItem>
            <DropdownMenuItem>Supermarket</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="hover:bg-[#FF8D29] text-white">
          <CirclePlus className="size-4 mr-1" />
          Add New
        </Button>

        <Button className="bg-[#092C4C] hover:bg-[#002749] text-white">
          <LaptopMinimal className="size-4 mr-1" />
          POS
        </Button>

        <div className="h-8 w-px bg-slate-200"></div>

        <Button size="icon" className="relative bg-slate-100 hover:bg-slate-200">
          <Image src="/images/icons/usa.webp" alt="US" height={5} width={5} className="size-5 rounded-sm object-cover" />
        </Button>

        <Button size="icon" className="bg-slate-100 hover:bg-slate-200 text-slate-700">
          <Maximize className="size-4" />
        </Button>

        <Button size="icon" className="relative bg-slate-100 hover:bg-slate-200 text-slate-700">
          <Mail className="size-4" />
          <span className="absolute -top-1 -right-1 flex items-center justify-center size-4 text-[10px] font-semibold text-white bg-red-500 rounded-full">
            01
          </span>
        </Button>

        <Button size="icon" className="relative bg-slate-100 hover:bg-slate-200 text-slate-700">
          <Bell className="size-4" />
        </Button>

        <Button size="icon" className="bg-slate-100 hover:bg-slate-200 text-slate-700">
          <Settings className="size-4" />
        </Button>

        <Avatar className="size-9 border-2 border-orange-100 text-slate-700">
          <AvatarImage src="/images/avatar.webp" alt="Admin" loading="lazy" />
          <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">AD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
