import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

// Install dependencies before running:
// npm install recharts @shadcn/ui

export default function SkillTestDashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  const data = [
    { x: 0, y: 0 },
    { x: 30, y: 40 },
    { x: 50, y: 50 },
    { x: 72, y: 60 },
    { x: 100, y: 80 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex gap-6 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md flex-grow">
        <h2 className="text-xl font-semibold mb-4">Comparison Graph</h2>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 100]}
            dataKey="x"
            label={{ value: "Percentile", position: "insideBottomRight" }}
          />
          <YAxis
            label={{ value: "Frequency", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth={2} />
          <ReferenceLine
            x={percentile}
            stroke="red"
            strokeDasharray="3 3"
            label={{
              position: "insideTopLeft",
              value: "Your Percentile",
              fill: "red",
            }}
          />
        </LineChart>
        <p className="text-center text-gray-600 mt-4">
          Your Rank: {rank}, Score: {score}/15
        </p>
        <Button onClick={() => setIsDialogOpen(true)}>Update</Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h2 className="text-lg font-semibold mb-4">Update Statistics</h2>
          <label>Rank</label>
          <Input
            type="number"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          />
          <label>Percentile</label>
          <Input
            type="number"
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
          />
          <label>Score (out of 15)</label>
          <Input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
          <Button className="mt-4" onClick={() => setIsDialogOpen(false)}>
            Save
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
