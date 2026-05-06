import {
  LayoutDashboard,
  Package,
  PlusCircle,
  AlertTriangle,
  TrendingDown,
  FolderTree,
  Tag,
  Boxes,
  Snowflake,
  ShieldCheck,
  Printer,
  QrCode,
  Store,
  ShieldAlert,
  Coins,
  Users,
  FileText,
  Settings,
  Globe,
  FileSpreadsheet,
  UserCog,
  LayoutTemplate,
  ShoppingCart,
  ArrowLeft,
  ArrowLeftRight,
  Clock,
} from "lucide-react";

export interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SidebarCategory {
  title: string;
  items: SidebarItem[];
}

export const sidebarData: SidebarCategory[] = [
  {
    title: "Main",
    items: [
      {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Inventory",
    items: [
      { title: "Products", href: "/dashboard/inventory/products", icon: Package },
      { title: "Create Product", href: "/dashboard/inventory/create-product", icon: PlusCircle },
      { title: "Expired Products", href: "/dashboard/inventory/expired", icon: AlertTriangle },
      { title: "Low Stocks", href: "/dashboard/inventory/low-stocks", icon: TrendingDown },
      { title: "Category", href: "/dashboard/inventory/category", icon: FolderTree },
      { title: "Sub Category", href: "/dashboard/inventory/sub-category", icon: Tag },
      { title: "Brands", href: "/dashboard/inventory/brands", icon: Boxes },
      { title: "Units", href: "/dashboard/inventory/units", icon: Snowflake },
      { title: "Variant Attributes", href: "/dashboard/inventory/variant-attributes", icon: ShieldCheck },
      { title: "Warranties", href: "/dashboard/inventory/warranties", icon: ShieldAlert },
      { title: "Print Barcode", href: "/dashboard/inventory/print-barcode", icon: Printer },
      { title: "Print QR Code", href: "/dashboard/inventory/print-qrcode", icon: QrCode },
    ],
  },
  {
    title: "Stock",
    items: [
      { title: "Manage Stock", href: "/dashboard/stock/manage", icon: Store },
      { title: "Stock Adjustment", href: "/dashboard/stock/adjustment", icon: TrendingDown },
      { title: "Stock Transfer", href: "/dashboard/stock/transfer", icon: Boxes },
    ],
  },
  {
    title: "Sales",
    items: [
      { title: "Sales", href: "/dashboard/sales", icon: TrendingDown },
      { title: "Invoices", href: "/dashboard/sales/invoices", icon: FileSpreadsheet },
      { title: "Sales Return", href: "/dashboard/sales/return", icon: ShieldAlert },
      { title: "Quotation", href: "/dashboard/sales/quotation", icon: FileText },
      { title: "POS", href: "/dashboard/sales/pos", icon: Coins },
    ],
  },
  {
    title: "Promo",
    items: [{ title: "Promotions", href: "/dashboard/promo", icon: Tag }],
  },
  {
    title: "Purchases",
    items: [
      { title: "Purchase Orders", href: "/dashboard/purchases", icon: ShoppingCart },
      { title: "Purchases Return", href: "/dashboard/purchases/return", icon: ArrowLeft },
    ],
  },
  {
    title: "Finance & Accounts",
    items: [
      { title: "Accounts", href: "/dashboard/finance", icon: Coins },
      { title: "Transactions", href: "/dashboard/finance/transactions", icon: ArrowLeftRight },
    ],
  },
  {
    title: "Peoples",
    items: [
      { title: "Customers", href: "/dashboard/peoples/customers", icon: Users },
      { title: "Suppliers", href: "/dashboard/peoples/suppliers", icon: Users },
      { title: "People", href: "/dashboard/peoples", icon: Users },
    ],
  },
  {
    title: "HRM",
    items: [
      { title: "Employees", href: "/dashboard/hrm/employees", icon: Users },
      { title: "Payroll", href: "/dashboard/hrm/payroll", icon: Coins },
      { title: "Attendance", href: "/dashboard/hrm/attendance", icon: Clock },
    ],
  },
  {
    title: "Reports",
    items: [
      { title: "Sales Report", href: "/dashboard/reports/sales", icon: FileText },
      { title: "Purchase Report", href: "/dashboard/reports/purchase", icon: FileText },
      { title: "Inventory Report", href: "/dashboard/reports/inventory", icon: Package },
      { title: "Financial Report", href: "/dashboard/reports/financial", icon: Coins },
    ],
  },
  {
    title: "User Management",
    items: [
      { title: "Users", href: "/dashboard/users", icon: UserCog },
      { title: "Roles", href: "/dashboard/roles", icon: ShieldCheck },
      { title: "Permissions", href: "/dashboard/permissions", icon: ShieldAlert },
    ],
  },
  {
    title: "Content (CMS)",
    items: [
      { title: "Pages", href: "/dashboard/cms/pages", icon: LayoutTemplate },
      { title: "Blog", href: "/dashboard/cms/blog", icon: FileText },
    ],
  },
  {
    title: "Pages",
    items: [{ title: "Front Website", href: "/dashboard/pages", icon: Globe }],
  },
  {
    title: "Settings",
    items: [{ title: "General Settings", href: "/dashboard/settings", icon: Settings }],
  },
];
