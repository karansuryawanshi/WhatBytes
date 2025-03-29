import React, { useState } from "react";
import { Trophy, FileText, Check } from "lucide-react";
import { NotebookPen } from "lucide-react";
import HTML from "../assets/html-icon.svg";
import Graph from "../components/Graph";
import Navbar from "../components/Navbar";
import RightPannel from "../components/RightPannel";
// import Dialog from "../components/Dialog";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState("1");
  const [percentile, setPercentile] = useState("30");
  const [score, setScore] = useState("10");

  const handlePercentileCheck = (value) => {
    const num = Number(value);
    if (num >= 0 && num <= 100) {
      setPercentile(value);
    }
  };

  const handleScoreCheck = (value) => {
    const num = Number(value);
    if (num >= 0 && num <= 15) {
      setScore(value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex md:flex-row flex-col w-screen gap-6">
      <Navbar></Navbar>
      <div className="flex flex-col md:flex-grow  w-full space-y-4">
        <p className="my-6 mx-2 text-lg">Skill test</p>
        <div className="bg-white shadow-md rounded-lg p-6 flex sm:flex-row flex-col justify-between items-center">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row items-center space-x-3">
              <img src={HTML} alt="HTML5 Logo" className="w-12 h-12" />
              <div>
                <h2 className="text-xl font-semibold">
                  Hyper Text Markup Language
                </h2>
                <p className="text-gray-500">
                  Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </p>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setIsModalOpen(true)}
          >
            Update
          </button>
        </div>

        <div className="flex gap-6">
          <div className="bg-white w-full shadow-md rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Quick Statistics</h3>
            <div className="flex flex-col gap-6 sm:flex-row justify-between">
              <div className="flex gap-2 items-center justify-center text-center">
                <div className="border border-gray-400 bg-neutral-50 p-2 rounded-full">
                  <Trophy className="w-8 h-8 mx-auto text-yellow-600" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">{rank}</p>
                  <p className=" text-gray-500">YOUR RANK</p>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center text-center">
                <div className="border border-gray-400 bg-neutral-50 p-2 rounded-full">
                  <NotebookPen className="w-8 h-8 mx-auto text-orange-500" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">{percentile}%</p>
                  <p className=" text-gray-500">PERCENTILE</p>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center text-center">
                <div className="border border-gray-400 bg-neutral-50 p-2 rounded-full">
                  <Check className="w-8 h-8 mx-auto text-green-500" />
                </div>
                <div className="text-sm">
                  <p className="font-bold">{score}/15</p>
                  <p className=" text-gray-500">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Graph score={score} percentile={percentile} rank={rank}></Graph>

        {isModalOpen && (
          <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/90 bg-opacity-50">
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
                  onChange={(e) => handlePercentileCheck(e.target.value)}
                  className="w-full border p-2 rounded mt-1"
                />
              </label>
              <label className="block mb-4">
                Current Score:
                <input
                  type="text"
                  value={score}
                  onChange={(e) => handleScoreCheck(e.target.value)}
                  className="w-full border p-2 rounded mt-1"
                />
              </label>
              <div className="flex justify-end space-x-2">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
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
        )}
      </div>

      <RightPannel
        score={score}
        percentile={percentile}
        rank={rank}
      ></RightPannel>
    </div>
  );
};

export default Dashboard;
