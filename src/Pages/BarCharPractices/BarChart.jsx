// import Chart from "react-apexcharts";

// const BarChart = () => {
//   const options = {
//     colors: ["#465fff"],
//     chart: {
//       fontFamily: "Outfit, sans-serif",
//       type: "bar",
//       height: 180,
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: "39%",
//         borderRadius: 5,
//         borderRadiusApplication: "end",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 4,
//       colors: ["transparent"],
//     },
//     xaxis: {
// categories: [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "Jun",
//   "Jul",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec",
// ],
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     legend: {
//       show: true,
//       position: "top",
//       horizontalAlign: "left",
//       fontFamily: "Outfit",
//     },
//     yaxis: {
//       title: {
//         text: undefined,
//       },
//     },
//     grid: {
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     fill: {
//       opacity: 1,
//     },

// tooltip: {
//   x: {
//     show: false,
//   },
//   y: {
//     formatter: (val) => `${val}`,
//   },
// },
//   };
//   const series = [
//     {
//       name: "Sales",
//       data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
//     },
//   ];
//   return (
//     <div className="w-full flex justify-center items-center bg-green-400">
//       <div className="w-full max-w-full overflow-x-auto custom-scrollbar bg-red-500">
//         <div id="chartOne" className="max-w-[40%] w-full">
//           <Chart options={options} series={series} type="bar" height={180} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BarChart;

import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    colors: [
      "#EE4B2B", // red
      "#465fff", // blue
      "#FFD700", // gold
      "#32CD32", // lime green
      "#FF69B4", // hot pink
      "#8A2BE2", // blue violet
      "#00CED1", // dark turquoise
      "#FFA500", // orange
      "#A52A2A", // brown
      "#7FFF00", // chartreuse
      "#FF4500", // orange red
      "#20B2AA", // light sea green
    ],

    plotOptions: {
      bar: {
        dataLabels: {
          position: "top",
        },
        distributed: true,
      },
    },

    yaxis: {
      labels: {
        formatter: (val) => `${val}`,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        formatter: (val) => `${val}`,
      },
    },
    tooltip: {
      x: {
        formatter: (val) => `@@@${val}`,
        show: true,
      },
      y: {
        formatter: (val) => `###${val}`,
      },
    },

    grid: {
      /* The below propertise is used to show gird line above the graph*/
      // position: "front",
      yaxis: {
        lines: {
          /* The below properties are used to show grid line y-axis provide the show value is boolean*/
          show: false,
        },
      },
      xaxis: {
        lines: {
          /* The below properties are used to show grid line x-axis provide the show value is boolean*/
          show: false,
        },
      },

      // borderColor: "#FF0000",
      // strokeDashArray: 7,

      // row: {
      //   colors: ["#e5e5e5", "transparent"],
      //   opacity: 0.5,
      // },
      // column: {
      //   colors: ["#f8f8f8", "transparent"],
      // },
    },

    /* The below properties are used to when pass the at list to series data*/
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "center",
      fontFamily: "Outfit",
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
    },

    // dataLabels: {
    //   enabled: true,
    //   dropShadow: {
    //     enabled: true,
    //     left: 2,
    //     top: 2,
    //     opacity: 1,
    //   },
    // },
    // dataLabels: {
    //   style: {
    //     fontSize: "30x",
    //     fontWeight: "bold",
    //   },
    // },

    // chart: {
    //   fontFamily: "Outfit, sans-serif",
    //   type: "bar",
    //   height: 180,
    //   toolbar: {
    //     show: false,
    //   },
    // },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     columnWidth: "39%",
    //     borderRadius: 5,
    //     borderRadiusApplication: "end",
    //   },
    // },
    // dataLabels: {
    //   enabled: false,
    // },
    // stroke: {
    //   show: true,
    //   width: 4,
    //   colors: ["transparent"],
    // },
    // xaxis: {
    //   categories: [
    //     "Jan",
    //     "Feb",
    //     "Mar",
    //     "Apr",
    //     "May",
    //     "Jun",
    //     "Jul",
    //     "Aug",
    //     "Sep",
    //     "Oct",
    //     "Nov",
    //     "Dec",
    //   ],
    //   axisBorder: {
    //     show: false,
    //   },
    //   axisTicks: {
    //     show: false,
    //   },
    // },

    // yaxis: {
    //   title: {
    //     text: undefined,
    //   },
    // },
    // grid: {
    //   yaxis: {
    //     lines: {
    //       show: true,
    //     },
    //   },
    // },
    // fill: {
    //   opacity: 1,
    // },
  };
  const series = [
    {
      name: "Sales-1",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
    {
      name: "Sales-2",
      data: [16, 35, 21, 28, 17, 15, 21, 10, 25, 30, 20, 12],
    },
  ];
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full flex justify-center max-w-full overflow-x-auto custom-scrollbar bg-green-100">
        <div id="chartOne" className="max-w-[40%] w-full">
          <Chart options={options} series={series} type="bar" height={500} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
