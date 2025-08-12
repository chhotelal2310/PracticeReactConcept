/*

Passing the  series data method-1


import React from "react";
import Chart from "react-apexcharts";

const SimpleLineChart = () => {
  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: ["A", "B", "C", "D", "E", "F", "G", "H"],
    },
  };

  const series = [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-green-400 w-full max-w-2xl max-h-2/4">
          <Chart options={options} series={series} type="line" height={500} />
        </div>
      </div>
    </>
  );
};

export default SimpleLineChart;
*/

/* Passing the series data methode-2 */
import Chart from "react-apexcharts";

const SimpleLineChart = () => {
  const options = {
    chart: {
      type: "line",
    },
  };

  const series = [
    {
      name: "series-1",
      data: [
        { x: "A", y: 30 },
        { x: "B", y: 40 },
        { x: "C", y: 35 },
        { x: "D", y: 50 },
        { x: "E", y: 49 },
        { x: "F", y: 60 },
        { x: "G", y: 70 },
        { x: "H", y: 91 },
      ],
    },
    {
      name: "series-2",
      data: [
        { x: "A", y: 10 },
        { x: "B", y: 30 },
        { x: "C", y: 39 },
        { x: "D", y: 90 },
        { x: "E", y: 89 },
        { x: "F", y: 60 },
        { x: "G", y: 30 },
        { x: "H", y: 21 },
      ],
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-green-400 w-full max-w-2xl max-h-2/4">
          <Chart options={options} series={series} type="line" height={500} />
        </div>
      </div>
    </>
  );
};

export default SimpleLineChart;
