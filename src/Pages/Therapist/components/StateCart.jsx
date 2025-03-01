
import { Card,CardContent,CardHeader } from "@/components/ui/card";
export default function  StatsCard({ title, value, date }){(
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
        {date && <span className="text-gray-500">{date}</span>}
      </CardContent>
    </Card>
  )};