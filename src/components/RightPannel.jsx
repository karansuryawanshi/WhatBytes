import React from "react";

const RightPannel = ({ score, percentile, rank }) => {
  const syllabusData = [
    {
      label: "HTML Tools, Forms, History",
      percent: 80,
      color: "bg-blue-500",
    },
    {
      label: "Tags & References in HTML",
      percent: 60,
      color: "bg-orange-500",
    },
    {
      label: "Tables & References in HTML",
      percent: 24,
      color: "bg-red-500",
    },
    {
      label: "Tables & CSS Basics",
      percent: 96,
      color: "bg-green-500",
    },
  ];

  const totalQuestions = 15;
  const percentage = (score / 15) * 100;

  return (
    <div className="w-[50rem] bg-gray-100 mr-2 flex flex-col gap-14">
      <div className="bg-white p-6 rounded-lg shadow-md mt-[75px]">
        <h2 className="text-xl font-semibold mb-4">Syllabus Wise Analysis</h2>
        <div className="space-y-12">
          {syllabusData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700 text-base">{item.label}</span>
                <span className="text-gray-600 text-base">{item.percent}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className={`${item.color} rounded-full h-2`}
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Question Analysis */}
      <div className="bg-white p-6 shadow-md rounded-lg ">
        <h3 className="text-lg font-semibold">Question Analysis</h3>
        <div className="relative w-40 h-40 mx-auto">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#eee"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeDasharray={`${percentage}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">{score}/15</span>
            <p className="text-sm text-gray-500">Correct</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">
          You scored {score}/15 questions correct out of {totalQuestions}.
          However it still needs some improvements
        </p>
      </div>
    </div>
  );
};

export default RightPannel;
