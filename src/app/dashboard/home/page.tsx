"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import {
  Activity,
  Menu as MenuIcon,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  CreditCard,
  Users,
  DollarSign,
  PlusCircle,
  TrendingUp,
} from "lucide-react";

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

import {
  chartConfig,
  chartData,
  lineChartConfig,
  lineChartData,
  pieChartConfig,
  pieChartData,
  topProductsConfig,
  topProductsData,
} from "@/lib/chartsData";

export default function homePage() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">$45,231.89</div>
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
            <div className="text-2xl font-bold text-purple-400">+12,234</div>
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
            <CardTitle className="text-gray-200">Revenue over time</CardTitle>
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
                <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
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
            <CardTitle className="text-gray-200">Sales by Category</CardTitle>
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
                  {[...Array(8)].map((_, index) => (
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
    </>
  );
}
