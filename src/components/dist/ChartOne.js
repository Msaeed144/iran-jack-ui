"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var React = require("react");
var Box_1 = require("@mui/material/Box");
var BottomNavigation_1 = require("@mui/material/BottomNavigation");
var BottomNavigationAction_1 = require("@mui/material/BottomNavigationAction");
var react_1 = require("react");
var Stack_1 = require("@mui/material/Stack");
var Gauge_1 = require("@mui/x-charts/Gauge");
var ChartOne = function () {
    var infoData = [60, 50, 70];
    var _a = react_1.useState(0), value = _a[0], setValue = _a[1];
    var _b = react_1.useState(), info = _b[0], setInfo = _b[1];
    react_1.useEffect(function () {
        setInfo(infoData[value]);
    }, [value]);
    var handleChange = function (event, newValue) {
        setValue(newValue);
        setInfo(infoData[newValue]);
    };
    return (React.createElement("div", { className: " p-2 w-[30%] border rounded-lg shadow-sm flex flex-col" },
        React.createElement("div", { className: "flex justify-between" },
            React.createElement("div", null,
                React.createElement("h2", { className: "font-bold" }, "Card Title"),
                React.createElement("p", null, "Description")),
            React.createElement(image_1["default"], { src: 'images/dot.svg', width: 17, height: 17, alt: "dot" })),
        React.createElement(Box_1["default"], null,
            React.createElement(BottomNavigation_1["default"], { showLabels: true, value: value, onChange: handleChange },
                React.createElement(BottomNavigationAction_1["default"], { label: "7 days" }),
                React.createElement(BottomNavigationAction_1["default"], { label: "30 days" }),
                React.createElement(BottomNavigationAction_1["default"], { label: "60 days" }))),
        React.createElement(Stack_1["default"], { direction: { xs: 'column', md: 'row' }, spacing: { xs: 1, md: 3 } },
            React.createElement(Gauge_1.Gauge, { width: 100, height: 100, value: info, startAngle: -90, endAngle: 90, sx: function (theme) {
                    var _a;
                    return (_a = {},
                        _a["& ." + Gauge_1.gaugeClasses.valueText] = {
                            fontSize: 20
                        },
                        _a["& ." + Gauge_1.gaugeClasses.valueArc] = {
                            fill: '#00b7c3'
                        },
                        _a["& ." + Gauge_1.gaugeClasses.referenceArc] = {
                            fill: theme.palette.text.disabled
                        },
                        _a);
                } })),
        React.createElement("div", { className: "flex justify-center gap-2 items-center text-sm" },
            React.createElement("span", { className: "w-3 h-3 bg-[#E0E0E0]" }),
            React.createElement("p", null, "label 1"),
            React.createElement("span", { className: "w-3 h-3 bg-[#00b7c3]" }),
            React.createElement("p", null, "label 2")),
        React.createElement("div", { className: 'flex flex-col justify-end h-full' },
            React.createElement("a", { className: "text-blue-600", href: "#" }, "view details"))));
};
exports["default"] = ChartOne;
