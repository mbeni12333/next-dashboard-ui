"use client";
import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  Activity,
  ChevronDown,
  ChevronLeft,
  Menu as MenuIcon,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
  CreditCard,
  Receipt,
  Users,
  Contact,
  ShoppingCart,
  Package,
  UserCircle,
  Wrench,
  Factory,
  Truck,
  Clipboard,
  BarChart as BarChartIcon,
  FileText,
  DollarSign,
  Calendar,
  HelpCircle,
  MessageSquare,
  PlusCircle,
  TrendingUp,
  Car,
  BarChart,
} from "lucide-react";
import { Button } from "./ui/button";

export const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "hover:text-blue-500",
  },
  {
    name: "Accounts",
    icon: CreditCard,
    color: "hover:text-green-500",
    subItems: [
      { name: "Account History", href: "/accounts/history", icon: FileText },
      { name: "Expenses", href: "/accounts/expenses", icon: Receipt },
    ],
  },
  {
    name: "People",
    icon: Users,
    color: "hover:text-purple-500",
    subItems: [
      { name: "Users", href: "/users", icon: User },
      { name: "Contacts", href: "/contacts", icon: Contact },
      { name: "Employees", href: "/employees", icon: UserCircle },
      { name: "Technicians", href: "/technicians", icon: Wrench },
    ],
  },
  {
    name: "Sales",
    icon: ShoppingCart,
    color: "hover:text-orange-500",
    subItems: [
      { name: "Orders", href: "/orders", icon: ShoppingCart },
      { name: "Products", href: "/products", icon: Package },
      { name: "Invoices", href: "/invoices", icon: FileText },
    ],
  },
  {
    name: "Operations",
    icon: Wrench,
    color: "hover:text-red-500",
    subItems: [
      { name: "Machines", href: "/machines", icon: Wrench },
      { name: "Maintenance", href: "/maintenance", icon: Wrench },
      { name: "Production", href: "/production", icon: Factory },
    ],
  },
  {
    name: "Logistics",
    icon: Truck,
    color: "hover:text-yellow-500",
    subItems: [
      { name: "Transporters", href: "/transporters", icon: Truck },
      { name: "Vehicles", href: "/vehicles", icon: Truck },
    ],
  },
  {
    name: "Inventory",
    icon: Package,
    color: "hover:text-indigo-500",
    subItems: [
      { name: "Products", href: "/inventory/products", icon: Package },
      { name: "Stock", href: "/inventory/stock", icon: BarChart },
    ],
  },
  {
    name: "HR",
    icon: UserCircle,
    color: "hover:text-pink-500",
    subItems: [
      { name: "Employees", href: "/hr/employees", icon: Users },
      { name: "Payslips", href: "/hr/payslips", icon: DollarSign },
      { name: "Employee Hours", href: "/hr/hours", icon: Calendar },
    ],
  },
];

interface MenuItemProps {
  item: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    href?: string;
    color: string;
    subItems?: {
      name: string;
      href: string;
      icon: React.ComponentType<{ className?: string }>;
    }[];
  };
  isOpen: boolean;
  toggleOpen: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, isOpen, toggleOpen }) => {
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const Icon = item.icon;

  return (
    <div>
      <div
        className={cn(
          "flex items-center py-2 px-4 cursor-pointer rounded-md transition-colors",
          item.color,
          isOpen && "bg-gray-800"
        )}
        onClick={() => hasSubItems && toggleOpen()}
      >
        <Icon className="h-5 w-5 mr-2" />
        <span className="flex-grow">{item.name}</span>
        {hasSubItems && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen && "transform rotate-180"
            )}
          />
        )}
      </div>
      {hasSubItems && (
        <div className={cn("ml-4", isOpen ? "block" : "hidden")}>
          {item.subItems?.map((subItem) => (
            <a
              key={subItem.name}
              href={subItem.href}
              className={cn(
                "flex items-center py-2 px-4 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors",
                item.color
              )}
            >
              {React.createElement(subItem.icon, { className: "h-4 w-4 mr-2" })}
              <span>{subItem.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function SideBar() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleOpenItem = (itemName: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(itemName)
        ? prevOpenItems.filter((item) => item !== itemName)
        : [...prevOpenItems, itemName]
    );
  };
  return (
    <aside
      className={cn(
        "flex flex-col bg-gray-900 border-r border-gray-800 transition-all duration-300",
        isMobile
          ? isMobileSidebarOpen
            ? "fixed inset-y-0 left-0 z-50 w-64"
            : "hidden"
          : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Admin</h1>
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileSidebarOpen(false)}
            className="lg:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            isOpen={openItems.includes(item.name)}
            toggleOpen={() => toggleOpenItem(item.name)}
          />
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <Button variant="ghost" className="w-full justify-start mb-2">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <HelpCircle className="mr-2 h-4 w-4" />
          Help Center
        </Button>
        <Button variant="ghost" className="w-full justify-start mb-2">
          <MessageSquare className="mr-2 h-4 w-4" />
          Feedback
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </aside>
  );
}
