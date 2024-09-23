"use strict";
exports.__esModule = true;
var react_1 = require("react");
var chart_1 = require("primereact/chart");
var image_1 = require("next/image");
var ChartTwo = function () {
    var _a = react_1.useState({}), chartData = _a[0], setChartData = _a[1];
    var _b = react_1.useState({}), chartOptions = _b[0], setChartOptions = _b[1];
    react_1.useEffect(function () {
        var data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620, 275, 680],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                    ],
                    borderWidth: 1
                }
            ]
        };
        var options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };
        setChartData(data);
        setChartOptions(options);
    }, []);
    return (react_1["default"].createElement("div", { className: " p-2 w-[30%] border rounded-lg shadow-sm flex flex-col" },
        react_1["default"].createElement("div", { className: "flex justify-between" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", { className: "font-bold" }, "Card Title"),
                react_1["default"].createElement("p", null, "Description")),
            react_1["default"].createElement(image_1["default"], { src: 'images/dot.svg', width: 17, height: 17, alt: "dot" })),
        react_1["default"].createElement(chart_1.Chart, { type: "bar", data: chartData, options: chartOptions }),
        react_1["default"].createElement("div", { className: 'flex flex-col justify-end h-full' },
            react_1["default"].createElement("a", { className: "text-blue-600 mt-2", href: "#" }, "view details"))));
};
exports["default"] = ChartTwo;
