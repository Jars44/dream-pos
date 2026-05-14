"use client";

import { useState, useMemo } from "react";
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

const subCategoriesData = [
  {
    id: 1,
    name: "Laptop",
    category: "Computers",
    code: "CT001",
    description: "Efficient Productivity",
    status: "Active",
  },
  { id: 2, name: "Desktop", category: "Computers", code: "CT002", description: "Compact Design", status: "Active" },
  { id: 3, name: "Sneakers", category: "Shoe", code: "CT003", description: "Dynamic Grip", status: "Active" },
  { id: 4, name: "Formals", category: "Shoe", code: "CT004", description: "Stylish Comfort", status: "Active" },
  {
    id: 5,
    name: "Wearables",
    category: "Electronics",
    code: "CT005",
    description: "Seamless Connectivity",
    status: "Active",
  },
  { id: 6, name: "Speakers", category: "Electronics", code: "CT006", description: "Reliable Sound", status: "Active" },
  { id: 7, name: "Handbags", category: "Bags", code: "CT007", description: "Compact Carry", status: "Active" },
  { id: 8, name: "Travel", category: "Bags", code: "CT008", description: "Travel Ready", status: "Active" },
  { id: 9, name: "Sofa", category: "Furniture", code: "CT009", description: "Cozy Comfort", status: "Active" },
  { id: 10, name: "Chair", category: "Furniture", code: "CT010", description: "Stylish Comfort", status: "Active" },
];

const getCategoryImage = (name: string): string => {
  const imageMap: Record<string, string> = {
    Laptop: "/images/products/pt001.webp",
    Desktop: "/images/products/pt011.webp",
    Sneakers: "/images/products/pt003.webp",
    Formals: "/images/products/pt012.webp",
    Wearables: "/images/products/pt005.webp",
    Speakers: "/images/products/pt006.webp",
    Handbags: "/images/products/pt007.webp",
    Travel: "/images/products/pt008.webp",
    Sofa: "/images/products/pt009.webp",
    Chair: "/images/products/pt010.webp",
  };
  return imageMap[name] || "/placeholder.svg";
};

export default function SubCategoryPage() {
  const [selectedSubCategories, setSelectedSubCategories] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedSubCategories(subCategoriesData.map((c) => c.id));
    } else {
      setSelectedSubCategories([]);
    }
  };

  const handleSelectSubCategory = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedSubCategories([...selectedSubCategories, id]);
    } else {
      setSelectedSubCategories(selectedSubCategories.filter((s) => s !== id));
    }
  };

  const handleSort = (key: string) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedData = useMemo(() => {
    let result = [...subCategoriesData];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter((c) => c.name.toLowerCase().includes(query) || c.code.toLowerCase().includes(query));
    }

    if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((c) => c.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (selectedStatus && selectedStatus !== "all") {
      result = result.filter((c) => c.status.toLowerCase() === selectedStatus.toLowerCase());
    }

    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof typeof a];
        const bValue = b[sortConfig.key as keyof typeof b];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        }
        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
        }
        return 0;
      });
    }

    return result;
  }, [searchQuery, selectedCategory, selectedStatus, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedData.length / parseInt(itemsPerPage));
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * parseInt(itemsPerPage);
    const end = start + parseInt(itemsPerPage);
    return filteredAndSortedData.slice(start, end);
  }, [filteredAndSortedData, currentPage, itemsPerPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Sub Category</h1>
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sub Category</BreadcrumbPage>
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
          <Button className="bg-[#FF9025] hover:bg-[#ff871e] text-white">
            <CirclePlus className="size-4 mr-1" />
            Add Sub Category
          </Button>
        </div>
      </div>

      <div className="border rounded-lg bg-white px-4 text-slate-500">
        <div className="flex items-center justify-between px-2 my-4">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input
              placeholder="Search"
              className="pl-9"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <Select
              value={selectedCategory}
              onValueChange={(value) => {
                setSelectedCategory(value);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-40 text-black">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Computers">Computers</SelectItem>
                <SelectItem value="Electronics">Electronics</SelectItem>
                <SelectItem value="Shoe">Shoe</SelectItem>
                <SelectItem value="Furniture">Furniture</SelectItem>
                <SelectItem value="Bags">Bags</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={selectedStatus}
              onValueChange={(value) => {
                setSelectedStatus(value);
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-40 text-black">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table className="border-b">
          <TableHeader className="bg-zinc-200/40">
            <TableRow className="border-b hover:bg-transparent">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedSubCategories.length === subCategoriesData.length}
                  onCheckedChange={handleSelectAll}
                  className="bg-white"
                />
              </TableHead>
              <TableHead className="font-semibold">Image</TableHead>
              <TableHead className="font-semibold">Sub Category</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleSort("code")}>
                  Category Code
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">Description</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="w-24"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8 text-slate-500">
                  No Data Found
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((subCategory) => (
                <TableRow key={subCategory.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedSubCategories.includes(subCategory.id)}
                      onCheckedChange={(checked) => handleSelectSubCategory(subCategory.id, !!checked)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="w-10 h-10 bg-zinc-100 rounded flex items-center justify-center">
                      <Image
                        src={getCategoryImage(subCategory.name)}
                        alt={subCategory.name}
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
                  <TableCell className="font-medium text-black">{subCategory.name}</TableCell>
                  <TableCell>{subCategory.category}</TableCell>
                  <TableCell>{subCategory.code}</TableCell>
                  <TableCell>{subCategory.description}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500 px-2.5 py-0.5 text-sm text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
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
              ))
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between w-full my-4">
          <div className="flex items-center gap-2 text-sm w-full">
            <span>Row Per Page</span>
            <Select value={itemsPerPage} onValueChange={handleItemsPerPageChange}>
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
                <PaginationPrevious
                  href="#"
                  className="border border-slate-300 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePrevPage();
                  }}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((page) => {
                  if (totalPages <= 7) return true;
                  if (page === 1 || page === totalPages) return true;
                  if (Math.abs(page - currentPage) <= 1) return true;
                  return false;
                })
                .map((page, idx, arr) => {
                  if (idx > 0 && arr[idx - 1] !== page - 1) {
                    return (
                      <PaginationItem key={`ellipsis-${page}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={page === currentPage}
                        className={
                          page === currentPage
                            ? "bg-primary text-white hover:text-white hover:bg-orange-[#FF8D29] rounded-full"
                            : "border border-slate-300 rounded-full"
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageClick(page);
                        }}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="border border-slate-300 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNextPage();
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
