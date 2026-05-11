"use client";

import { CalendarIcon, Info, X, ShieldCheck, Repeat, Gift, ArrowUp, ArrowDown, FileText } from "lucide-react";
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

  const metrics = [
    {
      title: "Total Sales",
      value: "$48,988,078",
      change: "+22%",
      isPositive: true,
      bgColor: "bg-primary",
      icon: FileText,
      iconColor: "text-primary",
    },
    {
      title: "Total Sales Return",
      value: "$16,478,145",
      change: "-22%",
      isPositive: false,
      bgColor: "bg-[#092C4C]",
      icon: Repeat,
      iconColor: "text-[#092C4C]",
    },
    {
      title: "Total Purchase",
      value: "$24,145,789",
      change: "+22%",
      isPositive: true,
      bgColor: "bg-[#0E9384]",
      icon: Gift,
      iconColor: "text-[#0E9384]",
    },
    {
      title: "Total Purchase Return",
      value: "$18,458,747",
      change: "+22%",
      isPositive: true,
      bgColor: "bg-[#155EEF]",
      icon: ShieldCheck,
      iconColor: "text-[#155EEF]",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Welcome, Admin</h1>
          <p className="text-slate-500 mt-1">
            You have <span className="text-orange-500">200+</span> Orders, Today
          </p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full sm:w-auto justify-start text-left font-normal bg-white border-slate-200"
            >
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

      <Alert className="border-orange-200 bg-orange-50 text-orange-600">
        <div className="flex items-center gap-3 flex-1">
          <Info className="size-5 text-orange-500 shrink-0" />
          <AlertDescription className="flex-1 text-slate-600">
            Your Product <span className="text-orange-500 font-bold">Apple Iphone 15 is running Low, </span>already
            below 5 Pcs.. <span className="text-orange-500 font-bold underline cursor-pointer">Add Stock</span>
          </AlertDescription>
          <button className="p-1 hover:bg-orange-100 rounded transition-colors shrink-0 cursor-pointer">
            <X className="size-4 text-orange-500" />
          </button>
        </div>
      </Alert>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.title} className={`${metric.bgColor} text-white border-0 shadow-md`}>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="shrink-0 w-16 h-16 rounded-lg bg-white flex items-center justify-center">
                    <Icon className={`size-10 ${metric.iconColor}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white/80 text-wrap">{metric.title}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-3xl font-bold text-white mt-1 text-wrap">{metric.value}</p>
                      <div className="inline-flex items-center gap-1 mt-2 rounded-sm bg-white px-2 py-0.5 text-xs font-semibold text-wrap">
                        {metric.isPositive ? (
                          <ArrowUp className="size-3 text-emerald-500" />
                        ) : (
                          <ArrowDown className="size-3 text-red-500" />
                        )}
                        <span className={metric.isPositive ? "text-emerald-500" : "text-red-500"}>{metric.change}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
