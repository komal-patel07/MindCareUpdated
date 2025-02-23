"use client";
import React, { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "Anxiety", visitors: 275, fill: "#A7C7E7" },
  { browser: "Depression", visitors: 200, fill: "#B5EAD7" },
  { browser: "Stress", visitors: 287, fill: "#C3B1E1" },
  { browser: "Anger", visitors: 173, fill: "#F5E3C1" },
  { browser: "other", visitors: 190, fill: "#C59" },
];

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
} ;

function PieChartComponent() {
  const totalVisitors = useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.visitors, 0),
    []
  );

  return (
    <Card className="flex  flex-col w-96 shadow-md">
      
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              fill={({ payload }) => payload.fill}
            >
              <Label
                content={(props) => {
                  const { viewBox } = props || {};
                  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null;

                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                      {/* <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                        {totalVisitors.toLocaleString()}
                      </tspan> */}
                      <tspan x={viewBox.cx} y={viewBox.cy + 4} className="text-sm fill-muted-foreground">
                        Mental Issues
                      </tspan>
                    </text>
                  );
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
      
      </CardFooter>
    </Card>
  );
}

export default PieChartComponent;


const desktopData = [
  { month: "January", desktop: 186, fill: "var(--color-january)" },
  { month: "February", desktop: 305, fill: "var(--color-february)" },
  { month: "March", desktop: 237, fill: "var(--color-march)" },
  { month: "April", desktop: 173, fill: "var(--color-april)" },
  { month: "May", desktop: 209, fill: "var(--color-may)" },
];

const mobileData = [
  { month: "", mobile: 80, fill: "var(--color-january)" },
  { month: "February", mobile: 200, fill: "var(--color-february)" },
  { month: "March", mobile: 120, fill: "var(--color-march)" },
  { month: "April", mobile: 190, fill: "var(--color-april)" },
  { month: "May", mobile: 130, fill: "var(--color-may)" },
];

const chartConfig1 = {
  visitors: { label: "Visitors" },
  desktop: { label: "Desktop" },
  mobile: { label: "Mobile" },
  january: { label: "January", color: "red" },
  february: { label: "February", color: "#253562" },
  march: { label: "March", color: "green" },
  april: { label: "April", color: "orange" },
  may: { label: "May", color: "purple" },
};

function StackedPieChart() {
  return (
    <Card className="flex flex-col w-96 shadow-md">
      {/* <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Stacked</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig1} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelKey="visitors"
                  nameKey="month"
                  indicator="line"
                  labelFormatter={(_, payload) => {
                    const key = payload?.[0]?.dataKey;
                    return key && chartConfig1[key] ? chartConfig1[key].label : "";
                  }}
                />
              }
            />
            <Pie data={desktopData} dataKey="desktop" outerRadius={60} fill={({ payload }) => payload.fill} />
            <Pie data={mobileData} dataKey="mobile" innerRadius={70} outerRadius={90} fill={({ payload }) => payload.fill} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
       
      </CardFooter>
    </Card>
  );
}
const chartData2 = [
  { browser: "Chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig2 = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "red" },
  safari: { label: "Safari", color: "blue" },
  firefox: { label: "Firefox", color: "green" },
  edge: { label: "Edge", color: "purple" },
  other: { label: "Other", color: "orange" },
};

function PieChartNoSeparator() {
  return (
    <Card className="flex flex-col w-96 shadow-md">
      {/* <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart - Separator None</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig2} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData2}
              dataKey="visitors"
              nameKey="browser"
              stroke="none"
              fill={({ payload }) => payload.fill}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        
      </CardFooter>
    </Card>
  );
}



export { StackedPieChart,PieChartNoSeparator};
