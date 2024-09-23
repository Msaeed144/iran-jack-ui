"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_apexcharts_1 = require("react-apexcharts");
var image_1 = require("next/image");
var ChartThree = function () {
    var _a = react_1.useState({
        chart: {
            type: 'area',
            toolbar: {
                show: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2024-09-01T00:00:00.000Z',
                '2024-09-02T00:00:00.000Z',
                '2024-09-03T00:00:00.000Z',
                '2024-09-04T00:00:00.000Z',
                '2024-09-05T00:00:00.000Z',
            ]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy'
            }
        }
    }), chartOptions = _a[0], setChartOptions = _a[1];
    var _b = react_1.useState([
        {
            name: 'Data 1',
            data: [31, 40, 28, 51, 42]
        },
        {
            name: 'Data 2',
            data: [11, 32, 45, 32, 34]
        },
    ]), chartSeries = _b[0], setChartSeries = _b[1];
    return (react_1["default"].createElement("div", { className: "p-2 w-[40%] border rounded-lg shadow-sm flex flex-col" },
        react_1["default"].createElement("div", { className: "flex justify-between" },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", { className: "font-bold" }, "Card Title"),
                react_1["default"].createElement("p", null, "Description")),
            react_1["default"].createElement(image_1["default"], { src: 'images/dot.svg', width: 17, height: 17, alt: "dot" })),
        react_1["default"].createElement(react_apexcharts_1["default"], { options: chartOptions, series: chartSeries, type: "area", height: 150 }),
        react_1["default"].createElement("div", { className: 'flex flex-col justify-end h-full' },
            react_1["default"].createElement("a", { className: "text-blue-600 mt-2", href: "#" }, "view details"))));
};
exports["default"] = ChartThree;
