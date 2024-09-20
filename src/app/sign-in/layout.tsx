"use client";

import React, { useState, useEffect, useMemo } from "react";
import "../globals.css";
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  LineChart,
  Line,
  PieChart,
  Pie,
  Label,
  Dot,
  Cell,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Poly } from "next/font/google";

// ... (keep the menuItems and MenuItem component as they are)

const lineChartData = [
  { date: "Jan", value: 4000, fill: "hsl(var(--chart-1))" },
  { date: "Feb", value: 3000, fill: "hsl(var(--chart-2))" },
  { date: "Mar", value: 2000, fill: "hsl(var(--chart-3))" },
  { date: "Apr", value: 2780, fill: "hsl(var(--chart-4))" },
  { date: "May", value: 1890, fill: "hsl(var(--chart-5))" },
  { date: "Jun", value: 2390, fill: "hsl(var(--chart-6))" },
  { date: "Jul", value: 3490, fill: "hsl(var(--chart-7))" },
  { date: "Aug", value: 4000, fill: "hsl(var(--chart-8))" },
  { date: "Sep", value: 3000, fill: "hsl(var(--chart-9))" },
  { date: "Oct", value: 2000, fill: "hsl(var(--chart-10)" },
  { date: "Nov", value: 2780, fill: "hsl(var(--chart-11)" },
  { date: "Dec", value: 1890, fill: "hsl(var(--chart-12)" },
];
const lineChartConfig = {
  value: {
    label: "value",
    color: "var(--chart-1)",
  },
};
const topProductsConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
};

const topProductsData = [
  { product: "Product 1", value: 400, fill: "hsl(var(--chart-1))" },
  { product: "Product 2", value: 300, fill: "hsl(var(--chart-2))" },
  { product: "Product 3", value: 200, fill: "hsl(var(--chart-3))" },
  { product: "Product 4", value: 278, fill: "hsl(var(--chart-4))" },
  { product: "Product 5", value: 189, fill: "hsl(var(--chart-5))" },
  { product: "Product 6", value: 239, fill: "hsl(var(--chart-6))" },
];

const pieChartData = [
  { product: "Polypropylene", value: 400, fill: "hsl(var(--chart-1))" },
  { product: "Polyethylene", value: 300, fill: "hsl(var(--chart-2))" },
  { product: "PVC", value: 200, fill: "hsl(var(--chart-3))" },
  { product: "PET", value: 278, fill: "hsl(var(--chart-4))" },
  { product: "PS", value: 189, fill: "hsl(var(--chart-5))" },
  { product: "PP", value: 239, fill: "hsl(var(--chart-6))" },
];

const pieChartConfig = {
  desktop: {
    label: "Desktop",
    color: "red",
    labelColor: "var(--gray-200)",
  },
};

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const menuItems = [
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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
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

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileSidebarOpen(true)}
                className="lg:hidden"
              >
                <MenuIcon className="h-4 w-4" />
              </Button>
            )}
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 pr-4 py-2 w-64 rounded-md bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Order
            </Button>
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Product
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 px-1 min-w-[1.25rem] h-5">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-800 text-white border-gray-700"
              >
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New order received</DropdownMenuItem>
                <DropdownMenuItem>Product out of stock</DropdownMenuItem>
                <DropdownMenuItem>New user registered</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-800 text-white border-gray-700"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-green-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  $45,231.89
                </div>
                <p className="text-xs text-gray-400">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  New Customers
                </CardTitle>
                <Users className="h-4 w-4 text-blue-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-400">+2350</div>
                <p className="text-xs text-gray-400">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  Sales
                </CardTitle>
                <CreditCard className="h-4 w-4 text-purple-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-400">
                  +12,234
                </div>
                <p className="text-xs text-gray-400">+19% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  Active Now
                </CardTitle>
                <Activity className="h-4 w-4 text-yellow-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">+573</div>
                <p className="text-xs text-gray-400">+201 since last hour</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <Card className="col-span-1 bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Revenue over time
                </CardTitle>
                <CardDescription className="text-gray-400">
                  January - June 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={lineChartConfig}>
                  <LineChart
                    data={lineChartData}
                    margin={{
                      top: 24,
                      left: 24,
                      right: 24,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="value"
                      type="natural"
                      stroke="hsl(var(--chart-5))"
                      strokeWidth={5}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none text-gray-200">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div className="leading-none text-gray-400">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
            <Card className="col-span-1 bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-200">Top Products</CardTitle>
                <CardDescription className="text-gray-400">
                  January - June 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={topProductsConfig}>
                  <BarChart data={topProductsData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="product"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar
                      dataKey="value"
                      fill="hsl(var(--chart-5))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none text-gray-200">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div className="leading-none text-gray-400">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
            <Card className="col-span-1 bg-gray-800 border-gray-700 row-span-1 ">
              <CardHeader>
                <CardTitle className="text-gray-200">Bar Chart</CardTitle>
                <CardDescription className="text-gray-400">
                  January - June 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid
                      vertical={false}
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tick={{ fill: "hsl(var(--muted-foreground))" }}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar
                      dataKey="desktop"
                      fill="hsl(var(--chart-5))"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none text-gray-200">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div className="leading-none text-gray-400">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
            <Card className="bg-gray-800 border-gray-700 row-span-1 col-span-1 flex flex-col">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Sales by Category
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ChartContainer
                  config={pieChartConfig}
                  className="mx-auto pb-0   [&_.recharts-pie-label-text]:text-gray-200"
                >
                  <PieChart>
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <Pie
                      data={pieChartData}
                      dataKey="value"
                      nameKey="product"
                      outerRadius={180}
                      label={(entry) => entry.product}
                      labelLine={false}
                    />
                  </PieChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none text-gray-200">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div className="leading-none text-muted-foreground text-gray-400">
                  Showing total visitors for the last 6 months
                </div>
              </CardFooter>
            </Card>
            <Card className="col-span-2 row-span-1 max-h-[600px] bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-200">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-auto">
                  <table className="w-full text-sm text-left text-gray-300">
                    <thead className="text-xs uppercase bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Order ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Customer
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Total
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {[...Array(9)].map((_, index) => (
                        <tr key={index} className="border-b border-gray-700">
                          <td className="px-6 py-4">#ORD-{1000 + index}</td>
                          <td className="px-6 py-4">Customer {index + 1}</td>
                          <td className="px-6 py-4">Product {index + 1}</td>
                          <td className="px-6 py-4">
                            ${(Math.random() * 1000).toFixed(2)}
                          </td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-900 text-green-300">
                              Completed
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {children}
        </main>
      </div>
    </div>
  );
}
