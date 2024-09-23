"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Chartغ = function () {
    return (React.createElement("div", { className: " p-2 w-[30%] border rounded-lg shadow-sm flex flex-col" },
        React.createElement("div", { className: "flex justify-between" },
            React.createElement("div", null,
                React.createElement("h2", { className: "font-bold" }, "Card Title"),
                React.createElement("p", null, "Description")),
            React.createElement(image_1["default"], { src: 'images/dot.svg', width: 17, height: 17, alt: "dot" })),
        React.createElement("div", { className: 'flex flex-col justify-end h-full' },
            React.createElement("a", { className: "text-blue-600 mt-2", href: "#" }, "view details"))));
};
exports["default"] = Chartغ;
