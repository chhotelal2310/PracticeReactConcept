import Chart from "react-apexcharts";

const AreaChart = () => {
    const options = {
        colors: ["#EE4B2B", "#465fff"],
        yaxis: {
            labels: {
                formatter: (val) => `${val}`,
            },
        },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
            yaxis: {
                lines: {
                    show: true,
                },
            },
            xaxis: {
                lines: {
                    show: true,
                },
            },
        },
        stroke: {
            curve: "smooth",
        },

    };

    const series = [
        {
            name: "Sales-1",
            data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
        },
        {
            name: "Sales-2",
            data: [16, 35, 301, 28, 140, 15, 21, 195, 25, 30, 20, 12],
        },
    ];

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-50">
            <div className="w-full max-w-5xl px-4">
                <Chart options={options} series={series} type="area" height={500} />
            </div>
        </div>
    );
};

export default AreaChart;
