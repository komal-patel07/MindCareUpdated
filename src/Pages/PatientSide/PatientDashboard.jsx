import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/Btn";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { UserCircle, CalendarCheck } from "lucide-react";
const improvementData = [
  { name: "Significantly Improved", value: 50 }, // 50% of users saw major improvements
  { name: "Slight Improvement", value: 30 }, // 30% saw some improvement
  { name: "No Improvement", value: 20 }, // 20% showed no progress
];

const data = [
  { name: "Anxiety", value: 40 },
  { name: "Depression", value: 55 },
  { name: "Stress", value: 35 },
  { name: "Burnout", value: 70 },
  { name: "ABBBB", value: 50 },
];
const COLORS = ["#3b82f6", "#f97316", "#10b981", "#ef4444"];

const COLORS2 = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b", "#8b5cf6"]; // Custom colors

const mentalHealthData = [
  { name: "Anxiety", value: 45 },
  { name: "Depression", value: 30 },
  { name: "Stress", value: 25 },
  { name: "PTSD", value: 15 },
  { name: "Burnout", value: 20 },
];

const sessionsData = [
  { name: "Completed Sessions", value: 150 },
  { name: "Upcoming Sessions", value: 50 },
  { name: "Missed Sessions", value: 20 },
];
export default function PatientDashboard() {
  return (
    <div className="flex">
      <div className=" w-100 shadow-2xl">
        {/* Chart Card */}
        <Card className="col-span-2 p-4">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
      <div className=" w-100">
        
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={sessionsData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#82ca9d"
              dataKey="value"
              label
            >
              {sessionsData.map((_,index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS2[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={improvementData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {improvementData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>

      {/* Profile Card */}
      <div>
        <Card className="col-span-1 p-4 flex items-center gap-4">
          <UserCircle size={50} className="text-gray-500" />
          <div>
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-gray-500">Therapist</p>
          </div>
        </Card>
      </div>
    
    </div>
  );
}
