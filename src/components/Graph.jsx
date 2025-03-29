import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";

const Graph = ({ score, percentile }) => {
  const data = [
    { x: 0, y: 0 },
    { x: 25, y: 10 },
    { x: 35, y: 30 },
    { x: 45, y: 50 },
    { x: 50, y: 70 },
    { x: 55, y: 85 },
    { x: 60, y: 90 },
    { x: 70, y: 80 },
    { x: 75, y: 60 },
    { x: 80, y: 40 },
    { x: 90, y: 30 },
    { x: 100, y: 20 },
  ];

  // let newPercentile = percentile % 10;
  console.log("[percentile]", percentile);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-center text-xl font-bold mb-4">Comparison Graph</h2>
      <div className="text-center text-gray-600 mb-4">
        <p>You scored {percentile}% percentile which is lower than the</p>
        <p>
          average percentile 72% of all the engineers who took this assessment
        </p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 100]}
            dataKey="x"
            label={{
              value: "Percentile",
              position: "insideBottomRight",
              offset: -10,
            }}
          />
          <YAxis
            label={{
              value: "Frequency",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="y"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ stroke: "#8884d8", strokeWidth: 2 }}
          />

          {/* Reference Line for Your Percentile */}
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

          {/* Reference Dot at 90 */}
          <ReferenceDot
            x={90}
            y={60}
            r={8}
            fill="purple"
            stroke="purple"
            label={{ position: "top", value: "90", fill: "purple" }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="text-center text-gray-600 mt-4">
        <p className="text-sm">Number of Students: 4</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Graph;
