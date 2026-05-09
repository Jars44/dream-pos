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

const categoriesData = [
  { id: 1, name: "Computers", slug: "computers", createdOn: "24 Dec 2024", status: "Active" },
  { id: 2, name: "Electronics", slug: "electronics", createdOn: "10 Dec 2024", status: "Active" },
  { id: 3, name: "Shoe", slug: "shoe", createdOn: "27 Nov 2024", status: "Active" },
  { id: 4, name: "Cosmetics", slug: "cosmetics", createdOn: "18 Nov 2024", status: "Active" },
  { id: 5, name: "Groceries", slug: "groceries", createdOn: "06 Nov 2024", status: "Active" },
  { id: 6, name: "Furniture", slug: "furniture", createdOn: "25 Oct 2024", status: "Active" },
  { id: 7, name: "Bags", slug: "bags", createdOn: "14 Oct 2024", status: "Active" },
  { id: 8, name: "Phone", slug: "phone", createdOn: "03 Oct 2024", status: "Active" },
  { id: 9, name: "Appliances", slug: "appliances", createdOn: "20 Sep 2024", status: "Active" },
  { id: 10, name: "Clothing", slug: "clothing", createdOn: "10 Sep 2024", status: "Active" },
];

export default function CategoryPage() {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCategories(categoriesData.map((c) => c.id));
    } else {
      setSelectedCategories([]);
    }
  };

  const handleSelectCategory = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, id]);
    } else {
      setSelectedCategories(selectedCategories.filter((s) => s !== id));
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Category</h1>
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Category</BreadcrumbPage>
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
            Add Category
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
                <Checkbox
                  checked={selectedCategories.length === categoriesData.length}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">Category Slug</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">
                  Created On
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
            {categoriesData.map((category) => (
              <TableRow key={category.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={(checked) => handleSelectCategory(category.id, !!checked)}
                  />
                </TableCell>
                <TableCell className="font-medium text-black">{category.name}</TableCell>
                <TableCell>{category.slug}</TableCell>
                <TableCell>{category.createdOn}</TableCell>
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
