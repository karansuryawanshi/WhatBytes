import React, { useState } from "react";

const Dialog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState("1");
  const [percentile, setPercentile] = useState("30%");
  const [score, setScore] = useState("10/15");
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-neutral-900/90 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Update Score</h2>
        <label className="block mb-2">
          Rank:
          <input
            type="text"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          />
        </label>
        <label className="block mb-2">
          Percentile:
          <input
            type="text"
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Current Score:
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full border p-2 rounded mt-1"
          />
        </label>
        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setIsModalOpen(false)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
