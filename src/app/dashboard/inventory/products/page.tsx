"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Eye,
  Edit,
  Trash2,
  Search,
  Plus,
  Download,
  RefreshCw,
  FileText,
  FileSpreadsheet,
} from "lucide-react";
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
import { productsData, Product } from "@/lib/mock-data";

const getProductImage = (sku: string): string => {
  const imageMap: Record<string, string> = {
    PT001: "/images/products/pt001.png",
    PT002: "/images/products/pt002.png",
    PT003: "/images/products/pt003.png",
    PT004: "/images/products/pt004.png",
    PT005: "/images/products/pt005.png",
    PT006: "/images/products/pt006.png",
    PT007: "/images/products/pt007.png",
    PT008: "/images/products/pt008.png",
    PT009: "/images/products/pt009.png",
    PT010: "/images/products/pt010.png",
  };
  return imageMap[sku] || "/placeholder.svg";
};

const getUserImage = (name: string): string => {
  const nameMap: Record<string, string> = {
    "James Kirwin": "/images/users/01.png",
    "Francis Chang": "/images/users/02.png",
    "Antonio Engle": "/images/users/03.png",
    "Leo Kelly": "/images/users/04.png",
    "Annette Walker": "/images/users/05.png",
    "John Weaver": "/images/users/06.png",
    "Gary Hennessy": "/images/users/07.png",
    "Eleanor Panek": "/images/users/08.png",
    "William Levy": "/images/users/09.png",
    "Charlotte Klotz": "/images/users/10.png",
  };
  return nameMap[name] || "/placeholder.svg";
};

export default function ProductsPage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

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

  return (
    <div className="flex flex-col h-full">
      {/* Page Header */}
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
          <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-50">
            <FileText className="size-3 mr-1" />
            PDF
          </Button>
          <Button variant="outline" size="sm" className="border-green-500 text-green-500 hover:bg-green-50">
            <FileSpreadsheet className="size-3 mr-1" />
            Excel
          </Button>
          <Button variant="outline" size="icon" className="border-slate-300">
            <RefreshCw className="size-4" />
          </Button>
          <Button variant="outline" size="icon" className="border-slate-300">
            <ChevronUp className="size-4" />
          </Button>
          <Button className="bg-[#FE9F43] hover:bg-[#FF8D29] text-white">
            <Plus className="size-4 mr-1" />
            Add Product
          </Button>
          <Button className="bg-[#092C4C] hover:bg-slate-800 text-white">
            <Download className="size-4 mr-1" />
            Import Product
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          <Input placeholder="Search" className="pl-9" />
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="computers">Computers</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="shoe">Shoe</SelectItem>
              <SelectItem value="furniture">Furniture</SelectItem>
              <SelectItem value="bags">Bags</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="lenovo">Lenovo</SelectItem>
              <SelectItem value="beats">Beats</SelectItem>
              <SelectItem value="nike">Nike</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="amazon">Amazon</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Table */}
      <div className="border rounded-lg bg-white">
        <Table>
          <TableHeader>
            <TableRow className="border-b hover:bg-transparent">
              <TableHead className="w-12">
                <Checkbox checked={selectedProducts.length === productsData.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">
                  SKU
                  <div className="flex flex-col">
                    <ChevronUp className="size-3" />
                    <ChevronDown className="size-3 -mt-1" />
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
            {productsData.map((product) => (
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
                    <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center">
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
                    <span>{product.name}</span>
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
                    <span>{product.createdBy}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="size-8">
                      <Eye className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8">
                      <Edit className="size-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="size-8 text-red-500 hover:text-red-600">
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 text-sm">
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
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="border border-slate-300" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-orange-500 text-white hover:bg-orange-600">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-slate-300">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-slate-300">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-slate-300">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="border border-slate-300">
                15
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="border border-slate-300" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
