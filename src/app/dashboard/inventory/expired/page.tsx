"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronUp, Edit, Trash2, Search, RefreshCw, ArrowDownUp } from "lucide-react";
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

const productsData = [
  { sku: "PT001", name: "Lenovo IdeaPad 3", manufacturedDate: "24 Dec 2024", expiredDate: "20 Dec 2026" },
  { sku: "PT002", name: "Beats Pro", manufacturedDate: "10 Dec 2024", expiredDate: "07 Dec 2026" },
  { sku: "PT003", name: "Nike Jordan", manufacturedDate: "27 Nov 2024", expiredDate: "20 Nov 2026" },
  { sku: "PT004", name: "Apple Series 5 Watch", manufacturedDate: "18 Nov 2024", expiredDate: "15 Nov 2026" },
  { sku: "PT005", name: "Amazon Echo Dot", manufacturedDate: "06 Nov 2024", expiredDate: "04 Nov 2026" },
  { sku: "PT006", name: "Sanford Chair Sofa", manufacturedDate: "25 Oct 2024", expiredDate: "20 Oct 2026" },
  { sku: "PT007", name: "Red Premium Satchel", manufacturedDate: "14 Oct 2024", expiredDate: "10 Oct 2026" },
  { sku: "PT008", name: "Iphone 14 Pro", manufacturedDate: "03 Oct 2024", expiredDate: "01 Oct 2026" },
  { sku: "PT009", name: "Gaming Chair", manufacturedDate: "20 Sep 2024", expiredDate: "16 Sep 2026" },
  { sku: "PT010", name: "Borealis Backpack", manufacturedDate: "10 Sep 2024", expiredDate: "06 Sep 2026" },
];

const getProductImage = (sku: string): string => {
  const imageMap: Record<string, string> = {
    PT002: "/images/products/pt002.webp",
    PT001: "/images/products/pt001.webp",
    PT003: "/images/products/pt003.webp",
    PT004: "/images/products/pt004.webp",
    PT005: "/images/products/pt005.webp",
    PT006: "/images/products/pt006.webp",
    PT007: "/images/products/pt007.webp",
    PT008: "/images/products/pt008.webp",
    PT009: "/images/products/pt009.webp",
    PT010: "/images/products/pt010.webp",
  };
  return imageMap[sku] || "/placeholder.svg";
};

export default function ExpiredProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(productsData.map((p) => p.sku));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (sku: string, checked: boolean) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, sku]);
    } else {
      setSelectedProducts(selectedProducts.filter((s) => s !== sku));
    }
  };

  const handleSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedData = useMemo(() => {
    let result = [...productsData];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sortConfig) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key as keyof typeof a];
        const bValue = b[sortConfig.key as keyof typeof b];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc'
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }
        return 0;
      });
    }

    return result;
  }, [searchQuery, sortConfig]);

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
          <h1 className="text-2xl font-bold">Expired</h1>
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Expired</BreadcrumbPage>
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
        </div>
        <Table className="border-b">
          <TableHeader className="bg-zinc-200/40">
            <TableRow className="border-b hover:bg-transparent">
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedProducts.length === productsData.length}
                  onCheckedChange={handleSelectAll}
                  className="bg-white"
                />
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => handleSort('sku')}
                  >
                    SKU
                    <div className="flex flex-col">
                      <ArrowDownUp className="size-3" />
                    </div>
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">Product Name</TableHead>
              <TableHead className="font-semibold">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleSort('manufacturedDate')}
                >
                  Manufactured Date
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleSort('expiredDate')}
                >
                  Expired Date
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-24"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-slate-500">
                  No Data Found
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((product) => (
                <TableRow key={product.sku}>
                  <TableCell>
                    <Checkbox
                      checked={selectedProducts.includes(product.sku)}
                      onCheckedChange={(checked) => handleSelectProduct(product.sku, !!checked)}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.sku}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-zinc-100 rounded flex items-center justify-center">
                        <Image
                          src={getProductImage(product.sku)}
                          alt={product.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = "/placeholder.svg";
                          }}
                          width={8}
                          height={8}
                          loading="lazy"
                        />
                      </div>
                      <span className="text-black">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{product.manufacturedDate}</TableCell>
                  <TableCell>{product.expiredDate}</TableCell>
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
                  onClick={(e) => { e.preventDefault(); handlePrevPage(); }}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(page => {
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
                        className={page === currentPage
                          ? "bg-primary text-white hover:text-white hover:bg-orange-[#FF8D29] rounded-full"
                          : "border border-slate-300 rounded-full"
                        }
                        onClick={(e) => { e.preventDefault(); handlePageClick(page); }}
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
                  onClick={(e) => { e.preventDefault(); handleNextPage(); }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
