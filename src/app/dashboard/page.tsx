"use client";

import { CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function DashboardHomePage() {
  const [date, setDate] = useState<{ from: Date; to: Date }>({
    from: new Date(2024, 0, 1),
    to: new Date(2024, 0, 7),
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Welcome, Admin</h1>
          <p className="text-slate-500 mt-1">You have 200+ Orders, Today</p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto justify-start text-left font-normal border-slate-200">
              <CalendarIcon className="mr-2 size-4" />
              {date.from && date.to
                ? `${format(date.from, "dd MMM yyyy")} - ${format(date.to, "dd MMM yyyy")}`
                : "Select date range"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date.from}
              selected={date}
              onSelect={(range) => {
                if (range?.from && range?.to) {
                  setDate({ from: range.from, to: range.to });
                }
              }}
              numberOfMonths={2}
              className="p-3 pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>

      <Alert className="border-orange-200 bg-orange-50 text-orange-900">
        <AlertDescription className="flex items-center justify-between">
          <span>Your Product Apple Iphone 15 is running Low, already below 5 Pcs.. Add Stock</span>
          <button className="ml-4 p-1 hover:bg-orange-200 rounded transition-colors">
            <X className="size-4" />
          </button>
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-orange-500 text-white border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-orange-100">Total Sales</p>
              <p className="text-2xl font-bold">$48,988,078</p>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-green-300">+22%</span>
                <span className="text-orange-100">vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 text-white border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-slate-300">Total Sales Return</p>
              <p className="text-2xl font-bold">$16,478,145</p>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-red-400">-22%</span>
                <span className="text-slate-300">vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-teal-600 text-white border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-teal-100">Total Purchase</p>
              <p className="text-2xl font-bold">$24,145,789</p>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-red-300">-22%</span>
                <span className="text-teal-100">vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-600 text-white border-0 shadow-md">
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-medium text-blue-100">Total Purchase Return</p>
              <p className="text-2xl font-bold">$18,458,747</p>
              <div className="flex items-center gap-1 text-sm">
                <span className="font-semibold text-green-300">+22%</span>
                <span className="text-blue-100">vs last month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-8 border-t pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>2014-2025 © DreamsPOS. All Right Reserved</p>
          <p>Designed & Developed By Dreams</p>
        </div>
      </footer>
    </div>
  );
}
