import Chart from "react-apexcharts";

const LineChart = () => {
  const options = {
    colors: ["#EE4B2B", "#465fff"],

    // plotOptions: {
    //   bar: {
    //     dataLabels: {
    //       position: "top",
    //     },
    //   },
    // },

    // chart: {
    //   fontFamily: "Outfit, sans-serif",
    //   height: 310,
    //   type: "line", // Set the chart type to 'line'
    //   toolbar: {
    //     show: false, // Hide chart toolbar
    //   },
    // },
    dataLabels: {
      enabled: false, // Disable data labels
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
          show: true,
        },
      },
      xaxis: {
        lines: {
          /* The below properties are used to show grid line x-axis provide the show value is boolean*/
          show: true,
        },
      },
    },

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

    stroke: {
      curve: "smooth",
      // curve: "straight",
      // curve: "stepline",
      width: 4,
    },

    // fill: {
    //   type: "gradient" / "solid" / "pattern" / "image",
    // },

    // markers: {
    //   size: 4,
    // },

    /* The below properties are used to when pass the at list to series data*/
    // legend: {
    //   show: true,
    //   position: "top",
    //   horizontalAlign: "center",
    //   fontFamily: "Outfit",
    //   onItemClick: {
    //     toggleDataSeries: true,
    //   },
    //   onItemHover: {
    //     highlightDataSeries: false,
    //   },
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
          <Chart options={options} series={series} type="line" height={500} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
