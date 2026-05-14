"use client";

import Link from "next/link";
import { format, isValid } from "date-fns";
import {
  Info,
  CircleChevronDown,
  RefreshCw,
  ChevronUp,
  ArrowLeft,
  CircleDollarSign,
  Image as ImageIcon,
  List,
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  Quote,
  CodeXml,
  Paperclip,
  Smile,
  Trash2,
  Send,
  PlusCircle,
  Strikethrough,
  ChevronDown,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

export default function CreateProductPage() {
  const [manufacturedDate, setManufacturedDate] = useState<Date | undefined>(undefined);
  const [expiryDate, setExpiryDate] = useState<Date | undefined>(undefined);

  const formatDate = (date: Date | undefined) => {
    if (!date || !isValid(date)) return "";
    return format(date, "dd/MM/yyyy");
  };

  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">Create Product</h1>
          <Breadcrumb className="mt-1">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Create Product</BreadcrumbPage>
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
          <Button asChild className="bg-[#092C4C] hover:bg-slate-800 text-white">
            <Link href="/dashboard/inventory/products">
              <ArrowLeft className="size-4 mr-1" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader className="border-b pb-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Info className="size-5 text-primary" />
              <CardTitle className="text-lg font-bold text-black">Product Information</CardTitle>
            </div>
            <CircleChevronDown className="size-5 text-black" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Store <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select Store" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="store1">Main Store</SelectItem>
                  <SelectItem value="store2">Warehouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Warehouse <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select Warehouse" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wh1">Warehouse A</SelectItem>
                  <SelectItem value="wh2">Warehouse B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Product Name <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter product name" className="bg-white border-slate-200" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Slug <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter slug" className="bg-white border-slate-200" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                SKU <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input placeholder="SKU001" className="bg-white border-slate-200 pr-20" />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-[#FF8D29] text-white text-xs h-7"
                >
                  Generate
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Selling Type <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select selling type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single Unit</SelectItem>
                  <SelectItem value="bulk">Bulk</SelectItem>
                  <SelectItem value="package">Package</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Category <span className="text-red-500">*</span>
                <Button size="sm" variant="ghost" className="float-right text-primary text-xs h-auto p-0">
                  <PlusCircle className="size-4" /> Add New
                </Button>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Sub Category <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select sub category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phones">Phones</SelectItem>
                  <SelectItem value="laptops">Laptops</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Brand <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="samsung">Samsung</SelectItem>
                  <SelectItem value="sony">Sony</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Unit <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pcs">Pieces</SelectItem>
                  <SelectItem value="kg">Kilograms</SelectItem>
                  <SelectItem value="box">Box</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Item Code <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input placeholder="IC001" className="bg-white border-slate-200 pr-20" />
                <Button
                  size="sm"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary hover:bg-[#FF8D29] text-white text-xs h-7"
                >
                  Generate
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Barcode Symbology <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select barcode type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="code128">Code 128</SelectItem>
                  <SelectItem value="code39">Code 39</SelectItem>
                  <SelectItem value="ean13">EAN-13</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 space-y-2">
              <label className="text-sm font-medium text-black">Description</label>
              <div className="border border-slate-200 rounded-lg bg-white">
                <div className="flex items-center gap-1 p-2 border-b border-slate-200">
                  <Button size="icon" variant="ghost" className="size-8">
                    <Bold className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="size-8">
                    <Italic className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="size-8">
                    <Underline className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="size-8">
                    <Strikethrough className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="size-8">
                    <LinkIcon className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="size-8">
                    <List className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="size-8">
                    <Quote className="size-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="size-8">
                    <CodeXml className="size-4" />
                  </Button>
                </div>

                <textarea
                  placeholder="Type your message"
                  className="w-full p-3 min-h-32 resize-none focus:outline-none"
                />

                <div className="flex items-center justify-between p-2">
                  <div className="flex items-center gap-1">
                    <Button size="icon" variant="ghost" className="size-8">
                      <Paperclip className="size-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="size-8">
                      <Smile className="size-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="size-8">
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                  <div className="flex gap-1">
                    <Button size="icon" variant="ghost" className="size-8">
                      <Send className="size-4" />
                    </Button>
                    <div className="w-px bg-slate-200"></div>
                    <Button size="icon" variant="ghost" className="size-8">
                      <ChevronDown className="size-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <p className="text-md text-slate-500">Maximum 60 Words</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="border-b pb-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="size-5 text-primary" />
              <CardTitle className="text-lg font-bold text-black">Pricing & Stocks</CardTitle>
            </div>
            <CircleChevronDown className="size-5 text-black" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <label className="text-sm font-medium text-black mb-3 block">
              Product Type <span className="text-red-500">*</span>
            </label>
            <RadioGroup defaultValue="single" className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="single" id="single" />
                <label htmlFor="single" className="text-sm text-black">
                  Single Product
                </label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="variable" id="variable" />
                <label htmlFor="variable" className="text-sm text-black">
                  Variable Product
                </label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Quantity <span className="text-red-500">*</span>
              </label>
              <Input type="number" placeholder="0" className="bg-white border-slate-200" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Price <span className="text-red-500">*</span>
              </label>
              <Input type="number" placeholder="0.00" className="bg-white border-slate-200" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Tax Type <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select tax type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="vat">VAT</SelectItem>
                  <SelectItem value="gst">GST</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Discount Type <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select discount type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="percentage">Percentage</SelectItem>
                  <SelectItem value="fixed">Fixed Amount</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Discount Value <span className="text-red-500">*</span>
              </label>
              <Input type="number" placeholder="0" className="bg-white border-slate-200" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Quantity Alert <span className="text-red-500">*</span>
              </label>
              <Input type="number" placeholder="0" className="bg-white border-slate-200" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="border-b pb-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageIcon className="size-5 text-primary" />
              <CardTitle className="text-lg font-bold text-black">Images</CardTitle>
            </div>
            <CircleChevronDown className="size-5 text-black" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="w-40 h-40 border-2 border-dashed border-slate-200 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
            <PlusCircle className="size-4 text-slate-400" />
            <p className="text-sm text-slate-400 pt-2">Add Image</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="border-b pb-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <List className="size-5 text-primary" />
              <CardTitle className="text-lg font-bold text-black">Custom Fields</CardTitle>
            </div>
            <CircleChevronDown className="size-5 text-black" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-zinc-100 p-4 rounded-lg mb-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Checkbox id="warranty" defaultChecked />
                <label htmlFor="warranty" className="text-sm text-black">
                  Warranties
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="manufacturer" defaultChecked />
                <label htmlFor="manufacturer" className="text-sm text-black">
                  Manufacturer
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="expiry" defaultChecked />
                <label htmlFor="expiry" className="text-sm text-black">
                  Expiry
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Warranty <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="bg-white border-slate-200 w-full">
                  <SelectValue placeholder="Select warranty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1year">1 Year</SelectItem>
                  <SelectItem value="2years">2 Years</SelectItem>
                  <SelectItem value="3years">3 Years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Manufacturer <span className="text-red-500">*</span>
              </label>
              <Input placeholder="Enter manufacturer" className="bg-white border-slate-200" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Manufactured Date <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-left font-normal bg-white border-slate-200"
                  >
                    <span>{manufacturedDate ? formatDate(manufacturedDate) : "dd/mm/yyyy"}</span>
                    <CalendarIcon className="size-4 text-black" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={manufacturedDate} onSelect={setManufacturedDate} />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-black">
                Expiry On <span className="text-red-500">*</span>
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-between text-left font-normal bg-white border-slate-200"
                  >
                    <span>{expiryDate ? formatDate(expiryDate) : "dd/mm/yyyy"}</span>
                    <CalendarIcon className="size-4 text-black" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={expiryDate} onSelect={setExpiryDate} />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4 mt-6 mb-8">
        <Button asChild className="bg-[#092C4C] hover:bg-slate-800 text-white px-6">
          <Link href="/dashboard/inventory/products">Cancel</Link>
        </Button>
        <Button className="bg-[#FF9025] hover:bg-[#ff871e] text-white px-6">Add Product</Button>
      </div>
    </div>
  );
}
