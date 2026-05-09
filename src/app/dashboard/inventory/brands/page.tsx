"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronUp, Edit, Trash2, Search, RefreshCw, ArrowDownUp, CirclePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const brandsData = [
  { id: 1, name: "Lenovo", createdDate: "24 Dec 2024", status: "Active" },
  { id: 2, name: "Beats", createdDate: "10 Dec 2024", status: "Active" },
  { id: 3, name: "Nike", createdDate: "27 Dec 2024", status: "Active" },
  { id: 4, name: "Apple", createdDate: "18 Nov 2024", status: "Active" },
  { id: 5, name: "Amazon", createdDate: "06 Nov 2024", status: "Active" },
  { id: 6, name: "Woodmart", createdDate: "25 Oct 2024", status: "Active" },
  { id: 7, name: "Dior", createdDate: "14 Oct 2024", status: "Active" },
  { id: 8, name: "Lava", createdDate: "03 Oct 2024", status: "Active" },
  { id: 9, name: "Nilkamal", createdDate: "20 Sep 2024", status: "Active" },
  { id: 10, name: "The North Face", createdDate: "10 Sep 2024", status: "Active" },
];

const getBrandImage = (name: string): string => {
  const imageMap: Record<string, string> = {
    Lenovo: "/images/products/pt001.webp",
    Beats: "/images/products/pt002.webp",
    Nike: "/images/products/pt003.webp",
    Apple: "/images/products/pt004.webp",
    Amazon: "/images/products/pt005.webp",
    Woodmart: "/images/products/pt006.webp",
    Dior: "/images/products/pt007.webp",
    Lava: "/images/products/pt008.webp",
    Nilkamal: "/images/products/pt009.webp",
    "The North Face": "/images/products/pt010.webp",
  };
  return imageMap[name] || "/placeholder.svg";
};

export default function BrandsPage() {
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedBrands(brandsData.map((b) => b.id));
    } else {
      setSelectedBrands([]);
    }
  };

  const handleSelectBrand = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, id]);
    } else {
      setSelectedBrands(selectedBrands.filter((s) => s !== id));
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Brands</h1>
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Brands</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" className="border-slate-300 text-red-500 bg-white hover:bg-slate-50">
            <Image src="/images/icons/pdf.webp" alt="pdf" width={16} height={16} loading="lazy" />
          </Button>
          <Button size="icon" className="border-slate-300 text-green-500 bg-white hover:bg-slate-50">
            <Image src="/images/icons/xls.webp" alt="xls" width={16} height={16} loading="lazy" />
          </Button>
          <Button size="icon" className="border-slate-300 bg-white hover:bg-slate-50 text-black">
            <RefreshCw className="size-4" />
          </Button>
          <Button size="icon" className="border-slate-300 bg-white hover:bg-slate-50 text-black">
            <ChevronUp className="size-4" />
          </Button>
          <Button className="bg-primary hover:bg-[#FF8D29] text-white">
            <CirclePlus className="size-4 mr-1" />
            Add Brand
          </Button>
        </div>
      </div>

      <div className="border rounded-lg bg-white px-4 text-slate-500">
        <div className="flex items-center justify-between px-2 my-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input placeholder="Search" className="pl-9" />
          </div>
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger className="w-40 text-black">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table className="border-b">
          <TableHeader className="bg-slate-100">
            <TableRow className="border-b hover:bg-transparent">
              <TableHead className="w-12">
                <Checkbox checked={selectedBrands.length === brandsData.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="font-semibold">Brand</TableHead>
              <TableHead className="font-semibold">Image</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">
                  Created Date
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="w-24"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {brandsData.map((brand) => (
              <TableRow key={brand.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedBrands.includes(brand.id)}
                    onCheckedChange={(checked) => handleSelectBrand(brand.id, !!checked)}
                  />
                </TableCell>
                <TableCell className="font-medium text-black">{brand.name}</TableCell>
                <TableCell>
                  <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center">
                    <Image
                      src={getBrandImage(brand.name)}
                      alt={brand.name}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                      width={8}
                      height={8}
                      loading="lazy"
                    />
                  </div>
                </TableCell>
                <TableCell>{brand.createdDate}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-sm text-emerald-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Active
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button size="icon" className="size-8 bg-white hover:bg-slate-50 border-slate-200 text-black">
                      <Edit className="size-4" />
                    </Button>
                    <Button size="icon" className="size-8 bg-white hover:bg-slate-50 border-slate-200 text-black">
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between w-full my-4">
          <div className="flex items-center gap-2 text-sm w-full">
            <span>Row Per Page</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-16 h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
            <span>Entries</span>
          </div>
          <Pagination className="justify-end">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="border border-slate-300 rounded-full" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className="bg-primary text-white hover:text-white hover:bg-orange-[#FF8D29] rounded-full"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-slate-300 rounded-full">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-slate-300 rounded-full">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-slate-300 rounded-full">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="border border-slate-300 rounded-full">
                  15
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="border border-slate-300 rounded-full" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
