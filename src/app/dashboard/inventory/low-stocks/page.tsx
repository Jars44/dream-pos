"use client";

import { useState } from "react";
import Link from "next/link";
import { Edit, Trash2, Search, ArrowDownUp, RefreshCw, ChevronUp, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
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
  {
    sku: "PT001",
    name: "Lenovo IdeaPad 3",
    category: "Computers",
    warehouse: "Lavish Warehouse",
    store: "Electro Mart",
    qty: 20,
    qtyAlert: 15,
  },
  {
    sku: "PT002",
    name: "Beats Pro",
    category: "Electronics",
    warehouse: "Quaint Warehouse",
    store: "Quantum Gadgets",
    qty: 25,
    qtyAlert: 20,
  },
  {
    sku: "PT003",
    name: "Nike Jordan",
    category: "Shoe",
    warehouse: "Traditional Warehouse",
    store: "Prime Bazaar",
    qty: 40,
    qtyAlert: 35,
  },
  {
    sku: "PT004",
    name: "Apple Series 5 Watch",
    category: "Electronics",
    warehouse: "Cool Warehouse",
    store: "Gadget World",
    qty: 50,
    qtyAlert: 45,
  },
  {
    sku: "PT005",
    name: "Amazon Echo Dot",
    category: "Electronics",
    warehouse: "Overflow Warehouse",
    store: "Volt Vault",
    qty: 30,
    qtyAlert: 25,
  },
  {
    sku: "PT006",
    name: "Sanford Chair Sofa",
    category: "Furniture",
    warehouse: "Nova Storage Hub",
    store: "Elite Retail",
    qty: 10,
    qtyAlert: 8,
  },
  {
    sku: "PT007",
    name: "Red Premium Satchel",
    category: "Bags",
    warehouse: "Retail Supply Hub",
    store: "Prime Mart",
    qty: 70,
    qtyAlert: 60,
  },
  {
    sku: "PT008",
    name: "Iphone 14 Pro",
    category: "Phone",
    warehouse: "EdgeWare Solutions",
    store: "NeoTech Store",
    qty: 35,
    qtyAlert: 30,
  },
  {
    sku: "PT009",
    name: "Gaming Chair",
    category: "Furniture",
    warehouse: "North Zone Warehouse",
    store: "Urban Mart",
    qty: 15,
    qtyAlert: 10,
  },
  {
    sku: "PT010",
    name: "Borealis Backpack",
    category: "Bags",
    warehouse: "Fulfillment Hub",
    store: "Travel Mart",
    qty: 45,
    qtyAlert: 40,
  },
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
  const [notifyEnabled, setNotifyEnabled] = useState(true);

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
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Low Stocks</BreadcrumbPage>
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
          <Button className="bg-[#092C4C] hover:bg-slate-800 text-white">
            <Mail className="size-4 mr-1" />
            Send Email
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 rounded-lg border-slate-200 overflow-hidden">
          <Button className="bg-[#FE9F43] hover:bg-[#FF8D29] text-white rounded-l-md border">Low Stocks</Button>
          Out of Stock
        </div>
        <div className="flex items-center justify-center gap-2 bg-white w-24 h-8 rounded-md border">
          <Switch
            checked={notifyEnabled}
            onCheckedChange={setNotifyEnabled}
            className="bg-emerald-500 data-checked:bg-emerald-500"
          />
          <span className="text-sm text-black">Notify</span>
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
                <SelectValue placeholder="Warehouse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lavish">Lavish Warehouse</SelectItem>
                <SelectItem value="quaint">Quaint Warehouse</SelectItem>
                <SelectItem value="traditional">Traditional Warehouse</SelectItem>
                <SelectItem value="cool">Cool Warehouse</SelectItem>
                <SelectItem value="overflow">Overflow Warehouse</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40 text-black">
                <SelectValue placeholder="Store" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electro">Electro Mart</SelectItem>
                <SelectItem value="quantum">Quantum Gadgets</SelectItem>
                <SelectItem value="prime">Prime Bazaar</SelectItem>
                <SelectItem value="gadget">Gadget World</SelectItem>
                <SelectItem value="volt">Volt Vault</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40 text-black">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="computers">Computers</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="shoe">Shoe</SelectItem>
                <SelectItem value="furniture">Furniture</SelectItem>
                <SelectItem value="bags">Bags</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
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
              <TableHead className="font-semibold">Warehouse</TableHead>
              <TableHead className="font-semibold">Store</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">Product Name</div>
              </TableHead>
              <TableHead className="font-semibold">Category</TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">
                  SKU
                  <div className="flex flex-col">
                    <ArrowDownUp className="size-3" />
                  </div>
                </div>
              </TableHead>
              <TableHead className="font-semibold">
                <div className="flex items-center gap-1">Qty</div>
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
                <TableCell>{product.warehouse}</TableCell>
                <TableCell>{product.store}</TableCell>
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
                <TableCell className="font-medium">{product.sku}</TableCell>
                <TableCell>{product.qty}</TableCell>
                <TableCell>{product.qtyAlert}</TableCell>
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
