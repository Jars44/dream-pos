import {
  LayoutDashboard,
  Package,
  Box,
  Grid2X2Plus,
  TrendingUp,
  LayoutList,
  ShieldCheck,
  GalleryVertical,
  QrCode,
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
  UserPen,
  CircleAlert,
  Triangle,
  SquareDashed,
  FileCheckCorner,
  ScanBarcode,
  Layers,
  TrendingUpDown,
  LayersPlus,
  FileOutput,
  Files,
  LaptopMinimal,
  TicketIcon,
  CreditCard,
  TicketPercent,
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
      { title: "Super Admin", href: "#", icon: UserPen },
    ],
  },
  {
    title: "Inventory",
    items: [
      { title: "Products", href: "/dashboard/inventory/products", icon: Box },
      { title: "Create Product", href: "/dashboard/inventory/create-product", icon: Grid2X2Plus },
      { title: "Expired Products", href: "/dashboard/inventory/expired", icon: CircleAlert },
      { title: "Low Stocks", href: "/dashboard/inventory/low-stocks", icon: TrendingUp },
      { title: "Category", href: "/dashboard/inventory/category", icon: LayoutList },
      { title: "Sub Category", href: "/dashboard/inventory/sub-category", icon: GalleryVertical },
      { title: "Brands", href: "/dashboard/inventory/brands", icon: Triangle },
      { title: "Units", href: "/dashboard/inventory/units", icon: SquareDashed },
      { title: "Variant Attributes", href: "/dashboard/inventory/variant-attributes", icon: FileCheckCorner },
      { title: "Warranties", href: "/dashboard/inventory/warranties", icon: ShieldCheck },
      { title: "Print Barcode", href: "/dashboard/inventory/print-barcode", icon: ScanBarcode },
      { title: "Print QR Code", href: "/dashboard/inventory/print-qrcode", icon: QrCode },
    ],
  },
  {
    title: "Stock",
    items: [
      { title: "Manage Stock", href: "#", icon: Layers },
      { title: "Stock Adjustment", href: "#", icon: TrendingUpDown },
      { title: "Stock Transfer", href: "#", icon: LayersPlus },
    ],
  },
  {
    title: "Sales",
    items: [
      { title: "Sales", href: "#", icon: ShoppingCart },
      { title: "Invoices", href: "#", icon: FileSpreadsheet },
      { title: "Sales Return", href: "#", icon: FileOutput },
      { title: "Quotation", href: "#", icon: Files },
      { title: "POS", href: "#", icon: LaptopMinimal },
    ],
  },
  {
    title: "Promo",
    items: [
      { title: "Coupons", href: "#", icon: TicketIcon },
      { title: "Gift Card", href: "#", icon: CreditCard },
      { title: "Discount", href: "#", icon: TicketPercent },
    ],
  },
  {
    title: "Purchases",
    items: [
      { title: "Purchase Orders", href: "#", icon: ShoppingCart },
      { title: "Purchases Return", href: "#", icon: ArrowLeft },
    ],
  },
  {
    title: "Finance & Accounts",
    items: [
      { title: "Accounts", href: "#", icon: Coins },
      { title: "Transactions", href: "#", icon: ArrowLeftRight },
    ],
  },
  {
    title: "Peoples",
    items: [
      { title: "Customers", href: "#", icon: Users },
      { title: "Suppliers", href: "#", icon: Users },
      { title: "People", href: "#", icon: Users },
    ],
  },
  {
    title: "HRM",
    items: [
      { title: "Employees", href: "#", icon: Users },
      { title: "Payroll", href: "#", icon: Coins },
      { title: "Attendance", href: "#", icon: Clock },
    ],
  },
  {
    title: "Reports",
    items: [
      { title: "Sales Report", href: "#", icon: FileText },
      { title: "Purchase Report", href: "#", icon: FileText },
      { title: "Inventory Report", href: "#", icon: Package },
      { title: "Financial Report", href: "#", icon: Coins },
    ],
  },
  {
    title: "User Management",
    items: [
      { title: "Users", href: "#", icon: UserCog },
      { title: "Roles", href: "#", icon: ShieldCheck },
      { title: "Permissions", href: "#", icon: ShieldAlert },
    ],
  },
  {
    title: "Content (CMS)",
    items: [
      { title: "Pages", href: "#", icon: LayoutTemplate },
      { title: "Blog", href: "#", icon: FileText },
    ],
  },
  {
    title: "Pages",
    items: [{ title: "Front Website", href: "#", icon: Globe }],
  },
  {
    title: "Settings",
    items: [{ title: "General Settings", href: "#", icon: Settings }],
  },
];
