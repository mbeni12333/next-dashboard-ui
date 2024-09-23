import { ChartConfig } from "@/components/ui/chart";

export const lineChartData = [
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
export const lineChartConfig = {
  value: {
    label: "value",
    color: "var(--chart-1)",
  },
};
export const topProductsConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
};

export const topProductsData = [
  { product: "Product 1", value: 400, fill: "hsl(var(--chart-1))" },
  { product: "Product 2", value: 300, fill: "hsl(var(--chart-2))" },
  { product: "Product 3", value: 200, fill: "hsl(var(--chart-3))" },
  { product: "Product 4", value: 278, fill: "hsl(var(--chart-4))" },
  { product: "Product 5", value: 189, fill: "hsl(var(--chart-5))" },
  { product: "Product 6", value: 239, fill: "hsl(var(--chart-6))" },
];

export const pieChartData = [
  { product: "Polypropylene", value: 400, fill: "hsl(var(--chart-1))" },
  { product: "Polyethylene", value: 300, fill: "hsl(var(--chart-2))" },
  { product: "PVC", value: 200, fill: "hsl(var(--chart-3))" },
  { product: "PET", value: 278, fill: "hsl(var(--chart-4))" },
  { product: "PS", value: 189, fill: "hsl(var(--chart-5))" },
  { product: "PP", value: 239, fill: "hsl(var(--chart-6))" },
];

export const pieChartConfig = {
  desktop: {
    label: "Desktop",
    color: "red",
    labelColor: "var(--gray-200)",
  },
};

export const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

export const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
