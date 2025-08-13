// Passing the  series data method-1

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Single values>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

import React from "react";
import Chart from "react-apexcharts";

const SimpleLineChart = () => {
  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: ["A", "B", "C", "D", "E", "F", "G", "H"],
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top", // only controls position for bars here
        },
      },
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: true,
        left: 3,
        top: 3,
        opacity: 0.5,
      },
      // enabledOnSeries: [0], // it is used to enable the data lable of the series 0 for 1, 1 for 2  series and show on.
      // formatter: function (val, opt) {
      //   return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      // },
      style: {
        // colors: ["#FF0000"],
        // fontWeight: "bold",
        fontSize: "20px",
      },
      // background: {
      //   enabled: true,
      //   foreColor: "#fff",

      //   borderRadius: 2,
      //   padding: 4,
      //   opacity: 0.7,
      //   borderWidth: 1,
      //   borderColor: "#fff",
      // },

      offsetX: 0,
      offsetY: -30,
    },
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 35, 91, 50, 49, 60, 70],
    },
    // {
    //   name: "series-2",
    //   data: [30, 40, 35, 91, 50, 49, 60, 70],
    // },
  ];
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-green-400 w-full max-w-2xl max-h-2/4">
          <Chart options={options} series={series} type="bar" height={500} />
        </div>
      </div>
    </>
  );
};

export default SimpleLineChart;

/****************************************** Passing the series data methode-2
  Paired values methode 2(A)
  Paired values in XY (Recommended as it is compatible with all charts)
 *  **********************************************/

/*import Chart from "react-apexcharts";

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
*/

/****************************************** Passing the series data methode-3
   Paired values methode 2(B)
   Numeric paired values in XY
   Attention -------------------------------> xaxis.type: 'numeric'
 
 
 *  **********************************************/
/*
import Chart from "react-apexcharts";

const SimpleLineChart = () => {
  const options = {
    chart: {
      type: "line",
    },
    xaxis: {
      type: "numeric",
    },
  };

  const series = [
    {
      name: "series-1",
      data: [
        { x: 10, y: 30 },
        { x: 20, y: 40 },
        { x: 30, y: 35 },
        { x: 40, y: 50 },
        { x: 50, y: 49 },
        { x: 60, y: 60 },
        { x: 70, y: 70 },
        { x: 80, y: 26 },
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
*/

/*********************************************** 3 Timeline Series *****************************************/
// import Chart from "react-apexcharts";

// const SimpleLineChart = () => {
//   const options = {
//     chart: {
//       height: 380,
//       width: "100%",
//       type: "area",
//       animations: {
//         initialAnimation: {
//           enabled: false,
//         },
//       },
//     },
//     xaxis: {
//       type: "datetime",
//     },
//   };

//   const series = [
//     {
//       name: "series-1",
//       // data: [ time stamp value
//       //   [1486684800000, 34],
//       //   [1486771200000, 43],
//       //   [1486857600000, 31],
//       //   [1486944000000, 43],
//       //   [1487030400000, 33],
//       //   [1487116800000, 52],
//       // ],

//       // date string with value
//       data: [
//         {
//           x: "02-10-2017 GMT",
//           y: 34,
//         },
//         {
//           x: "02-11-2017 GMT",
//           y: 43,
//         },
//         {
//           x: "02-12-2017 GMT",
//           y: 31,
//         },
//         {
//           x: "02-13-2017 GMT",
//           y: 43,
//         },
//         {
//           x: "02-14-2017 GMT",
//           y: 33,
//         },
//         {
//           x: "02-15-2017 GMT",
//           y: 52,
//         },
//       ],
//     },
//   ];
//   return (
//     <>
//       <div className="w-full flex justify-center items-center h-screen bg-gray-100">
//         <div className="bg-green-400 w-full max-w-2xl max-h-2/4">
//           <Chart options={options} series={series} type="area" height={500} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SimpleLineChart;
