import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import { useTasks } from "@/context/taskContext";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig: ChartConfig = {
  desktop: {
    label: "Completed",
    color: "#8BCE89",
  },
  mobile: {
    label: "Pending",
    color: "#EB4E31",
  },
};

function RadialChart() {
  const { tasks, completedTasks, activeTasks } = useTasks();
  const tasksTotal = tasks.length;

  const chartData = [
    {
      pending: activeTasks.length,
      completed: completedTasks.length,
    },
  ];

  return (
    <Card className="flex flex-col border border-gray-300 shadow-md bg-[#EDEDED]">
      {/* Header */}
      <CardHeader className="items-center pb-1">
        <CardTitle className="text-center text-lg font-bold">
          Completed vs Pending Tasks
        </CardTitle>
        <CardDescription className="text-center mt-1 text-gray-600">
          Task completion status.
        </CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex flex-col items-center justify-center pt-2 pb-2">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full max-w-[300px] sm:max-w-[350px] h-[230px] sm:h-[280px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={70}
            outerRadius={105}
            width={240}
            height={240}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 12}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {tasksTotal}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground text-sm"
                        >
                          Tasks
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="completed"
              stackId="a"
              cornerRadius={5}
              fill={chartConfig.desktop.color}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="pending"
              stackId="a"
              cornerRadius={5}
              fill={chartConfig.mobile.color}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex-col mt-1 text-sm text-center">
        <div className="flex items-center justify-center gap-2 font-medium leading-none">
          Task completion improved by 12% this month{" "}
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="text-xs text-gray-500">
          Analysis based on tasks completed in the last 30 days.
        </div>
      </CardFooter>
    </Card>
  );
}

export default RadialChart;
