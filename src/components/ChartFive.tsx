/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";

const ChartFive = () => {
  const dataSets = [
    [
      { asset: "Stocks", amount: 40000 },
      { asset: "Bonds", amount: 20000 },
      { asset: "Real Estate", amount: 30000 },
      { asset: "Cash", amount: 10000 },
    ],
    [
      { asset: "Stocks", amount: 30000 },
      { asset: "Bonds", amount: 25000 },
      { asset: "Real Estate", amount: 20000 },
      { asset: "Cash", amount: 15000 },
    ],
    [
      { asset: "Stocks", amount: 50000 },
      { asset: "Bonds", amount: 15000 },
      { asset: "Real Estate", amount: 25000 },
      { asset: "Cash", amount: 10000 },
    ],
  ];

  // وضعیت برای سری و گزینه‌ها
  const [value, setValue] = useState(0);
  const [options, setOptions] = useState<any>({
    data: dataSets[0],
    series: [
      {
        type: "donut",
        angleKey: "amount",
        innerRadiusRatio: 0.9,
        innerCircle: {
          fill: "#white",
        },
      },
    ],
    legend: {
      position: "bottom",
    },
  });

  const updateOptions = (selectedValue: number) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      data: dataSets[selectedValue],
    }));
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
    updateOptions(newValue); // بروزرسانی گزینه‌ها با انتخاب جدید
  };

  return (
    <div className="p-2 w-full sm:w-[30%] border rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">Card Title</h2>
          <p>Description</p>
        </div>
        <Image className=" cursor-pointer" src="images/dot.svg" width={17} height={17} alt="dot" />
      </div>
      <Box>
        <BottomNavigation className="!h-5" showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction label="7 days" />
          <BottomNavigationAction label="30 days" />
          <BottomNavigationAction label="60 days" />
        </BottomNavigation>
      </Box>
      <div className="relative mx-auto ag-charts-wrapper" style={{ width: "150px", height: "150px" }}>
        <AgCharts options={options} style={{ width: "150px", height: "150px" }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#2563eb ',
        }}>
          1000
        </div>
      </div>
      <div className="flex flex-col justify-end h-full">
        <a className="text-blue-600 mt-2" href="#">
          View Details
        </a>
      </div>
    </div>
  );
};

export default ChartFive;
