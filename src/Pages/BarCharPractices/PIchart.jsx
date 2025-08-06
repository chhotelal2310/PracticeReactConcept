import React from "react";
import Chart from "react-apexcharts";

const PIChart = () => {
  const options = {
    labels: ["A", "B", "C", "D", "E"],
    colors: ["#EE4B2B", "#465fff", "#FFD700", "#32CD32", "#FF69B4"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
    },
  };

  const series = [44, 55, 41, 17, 15];

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default PIChart;
