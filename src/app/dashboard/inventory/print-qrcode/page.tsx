"use client";

import Link from "next/link";
import { ChevronUp, RefreshCw, Eye, RotateCcw, Printer, Search, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PrintQRCodePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">Print QR Code</h1>
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Print QR Code</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" className="border-slate-300 bg-white hover:bg-slate-50 text-black">
            <RefreshCw className="size-4" />
          </Button>
          <Button size="icon" className="border-slate-300 bg-white hover:bg-slate-50 text-black">
            <ChevronUp className="size-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-lg bg-white p-6">
        <div>
          <div className="flex w-1/2 gap-6 mb-6">
            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-black">
                Warehouse <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Main Warehouse</SelectItem>
                  <SelectItem value="secondary">Secondary Warehouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 w-full">
              <label className="text-sm font-medium text-black">
                Store <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Main Store</SelectItem>
                  <SelectItem value="branch">Branch Store</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-1/2 mb-6">
            <label className="text-sm font-medium text-black mb-2 block">
              Product <span className="text-red-500">*</span>
            </label>
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-black" />
              <Input placeholder="Search Product by Code" className="pl-9 bg-white border-slate-200" />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-md mb-6">
          <Table className="border">
            <TableHeader className="bg-zinc-200/40">
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Reference Number</TableHead>
                <TableHead>Qty</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5}>
                  <div className="flex flex-col items-center justify-center py-12 gap-3">
                    <FileText className="size-16 text-slate-300" />
                    <p className="text-sm text-slate-400">No Data Available</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="w-full mr-8">
            <label className="text-sm font-medium text-black mb-2 block">
              Paper Size <span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger className="bg-white border-slate-200 w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a4">A4</SelectItem>
                <SelectItem value="a5">A5</SelectItem>
                <SelectItem value="letter">Letter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-8 w-full">
            <div className="flex flex-col items-start gap-2">
              <label className="text-sm font-medium text-black">Reference Number</label>
              <Switch defaultChecked className="data-[state=checked]:bg-emerald-500" />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button className="bg-[#FF9025] hover:bg-[#ff871e] text-white px-6">
            <Eye className="size-4 mr-2" />
            Generate QR Code
          </Button>
          <Button className="bg-[#092C4C] hover:bg-slate-800 text-white px-6">
            <RotateCcw className="size-4 mr-2" />
            Reset QR Code
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-6">
            <Printer className="size-4 mr-2" />
            Print QR Code
          </Button>
        </div>
      </div>
    </div>
  );
}
