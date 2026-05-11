"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronUp, Eye, Edit, Trash2, Search, Download, RefreshCw, ArrowDownUp, CirclePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { productsData } from "@/lib/mock-data";

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

const getUserImage = (name: string): string => {
  const nameMap: Record<string, string> = {
    "James Kirwin": "/images/users/01.webp",
    "Francis Chang": "/images/users/02.webp",
    "Antonio Engle": "/images/users/03.webp",
    "Leo Kelly": "/images/users/04.webp",
    "Annette Walker": "/images/users/05.webp",
    "John Weaver": "/images/users/06.webp",
    "Gary Hennessy": "/images/users/07.webp",
    "Eleanor Panek": "/images/users/08.webp",
    "William Levy": "/images/users/09.webp",
    "Charlotte Klotz": "/images/users/10.webp",
  };
  return nameMap[name] || "/placeholder.svg";
};

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
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
          p.sku.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Brand filter
    if (selectedBrand) {
      result = result.filter((p) => p.brand.toLowerCase() === selectedBrand.toLowerCase());
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
  }, [searchQuery, selectedCategory, selectedBrand, sortConfig]);

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
          <h1 className="text-2xl font-bold">Products</h1>
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Products</BreadcrumbPage>
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
            Add Product
          </Button>
          <Button className="bg-[#092C4C] hover:bg-slate-800 text-white">
            <Download className="size-4 mr-1" />
            Import Product
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
            <Select value={selectedCategory} onValueChange={(value) => { setSelectedCategory(value); setCurrentPage(1); }}>
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
            <Select value={selectedBrand} onValueChange={(value) => { setSelectedBrand(value); setCurrentPage(1); }}>
              <SelectTrigger className="w-40 text-black">
                <SelectValue placeholder="Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="Lenovo">Lenovo</SelectItem>
                <SelectItem value="Beats">Beats</SelectItem>
                <SelectItem value="Nike">Nike</SelectItem>
                <SelectItem value="Apple">Apple</SelectItem>
                <SelectItem value="Amazon">Amazon</SelectItem>
              </SelectContent>
            </Select>
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
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleSort('sku')}
                >
                  SKU
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">Product Name</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">Brand</TableHead>
              <TableHead className="font-semibold">Price</TableHead>
              <TableHead className="font-semibold">Unit</TableHead>
              <TableHead className="font-semibold">Qty</TableHead>
              <TableHead className="font-semibold">Created By</TableHead>
              <TableHead className="w-24"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} className="text-center py-8 text-slate-500">
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
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.unit}</TableCell>
                  <TableCell>{product.qty}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="size-7">
                        <AvatarImage src={getUserImage(product.createdBy)} alt={product.createdBy} loading="lazy" />
                        <AvatarFallback className="text-xs">
                          {product.createdBy
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-black">{product.createdBy}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button size="icon" className="size-8 bg-white hover:bg-slate-50 border-slate-200 text-black">
                        <Eye className="size-4" />
                      </Button>
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
