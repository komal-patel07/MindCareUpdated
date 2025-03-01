
import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { issue: "Anxiety", Level: 275, fill: "red" },
    { issue: "Depression", Level: 200, fill: "blue" },
    { issue: "Stress", Level: 187, fill: "pink" },
    { issue: "Realtionship", Level: 173, fill: "orange" },
    { issue: "other", Level: 90, fill: "green" },
  ];
const chartConfig = {
    Level: {
    label: "Level",
    color: "",
  },
  Anxiety: {
    label: "Anixety",
    color: "red",
  },
  Depression: {
    label: " Depression",
    color: "blue",
  },
  Stress: {
    label: "Stress",
    color: "pink",
  },
  Realtionship: {
    label: "Realtionship",
    color: "orange",
  },
  other: {
    label: "Other",
    color: "green   ",
  },
};
export  default function Component() {
  return (
    <Card >
      <CardHeader>
      <CardTitle>Mental Health Condition </CardTitle>
      <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} />
            <XAxis
              dataKey="issue"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0,3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent 
                 
                indicator="line"
                nameKey="issue"
                hideLabel
                 />
               }
            />
            <Line
             dataKey="Level"
             type="natural"
              dot={{
                fill: "var(--color-Level)",
              }}
              activeDot={{
                r:6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Level of Mental health<TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing the issues of individual
        </div>
      </CardFooter>
    </Card>
  )
}
