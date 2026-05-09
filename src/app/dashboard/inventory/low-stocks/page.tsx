"use client";

import { useState } from "react";
import {
  Eye,
  Edit,
  Trash2,
  Search,
  ArrowDownUp,
  Filter,
  Download,
  CirclePlus,
  Printer,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const productsData = [
  { sku: "PT001", name: "Lenovo IdeaPad 3", category: "Computers", brand: "Lenovo", qty: 5, qtyAlert: 10 },
  { sku: "PT002", name: "Beats Pro", category: "Electronics", brand: "Beats", qty: 3, qtyAlert: 15 },
  { sku: "PT003", name: "Nike Jordan", category: "Shoe", brand: "Nike", qty: 8, qtyAlert: 20 },
  { sku: "PT004", name: "Apple Series 5 Watch", category: "Electronics", brand: "Apple", qty: 2, qtyAlert: 10 },
  { sku: "PT005", name: "Amazon Echo Dot", category: "Electronics", brand: "Amazon", qty: 0, qtyAlert: 5 },
  { sku: "PT006", name: "Sanford Chair Sofa", category: "Furniture", brand: "IKEA", qty: 1, qtyAlert: 3 },
  { sku: "PT007", name: "Red Premium Satchel", category: "Bags", brand: "Gucci", qty: 4, qtyAlert: 12 },
  { sku: "PT008", name: "Iphone 14 Pro", category: "Electronics", brand: "Apple", qty: 7, qtyAlert: 25 },
  { sku: "PT009", name: "Gaming Chair", category: "Furniture", brand: "Razer", qty: 6, qtyAlert: 18 },
  { sku: "PT010", name: "Borealis Backpack", category: "Bags", brand: "North Face", qty: 9, qtyAlert: 20 },
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

export default function LowStocksPage() {
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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Low Stocks</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your Low Stocks</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" className="border-slate-300 bg-white hover:bg-slate-50 text-black">
            <Filter className="size-4" />
          </Button>
          <Button className="bg-[#092C4C] hover:bg-slate-800 text-white">
            <Download className="size-4 mr-1" />
            Import
          </Button>
          <Button className="bg-primary hover:bg-[#FF8D29] text-white">
            <CirclePlus className="size-4 mr-1" />
            Add New
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
            <Button size="icon" className="border-slate-300 bg-white hover:bg-slate-50 text-red-500">
              <Printer className="size-4" />
            </Button>
            <Button size="icon" className="border-slate-300 text-green-500 bg-white hover:bg-slate-50">
              <Image src="/images/icons/xls.webp" alt="xls" width={16} height={16} loading="lazy" />
            </Button>
            <Button size="icon" className="border-slate-300 text-red-500 bg-white hover:bg-slate-50">
              <Image src="/images/icons/pdf.webp" alt="pdf" width={16} height={16} loading="lazy" />
            </Button>
          </div>
        </div>
        <Table className="border-b">
          <TableHeader className="bg-slate-100">
            <TableRow className="border-b hover:bg-transparent">
              <TableHead className="w-12">
                <Checkbox checked={selectedProducts.length === productsData.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">
                  Product Name
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">SKU</TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">
                  Qty
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">Qty Alert</TableHead>
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
                    <span className="text-black">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{product.sku}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.qty}</TableCell>
                <TableCell>{product.qtyAlert}</TableCell>
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
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between w-full my-4">
          <div className="flex items-center gap-2 text-sm">
            <span>&lt; 1-10 of {productsData.length} &gt;</span>
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
