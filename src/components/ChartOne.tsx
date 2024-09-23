import Image from "next/image";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { ChangeEvent, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
const ChartOne = () => {
  const infoData: number[] = [60, 50, 70];
  const [value, setValue] = useState<number>(0);
  const [info, setInfo] = useState<number | undefined>();
  useEffect(() => {
    setInfo(infoData[value]);
  }, [value]);

  const handleChange = (event: ChangeEvent<HTMLElement>, newValue: number) => {
    setValue(newValue);
    setInfo(infoData[newValue]);
  };

  return (
    <div className=" p-2 w-full sm:w-[30%] border rounded-lg shadow-sm flex flex-col items-center">
      <div className="w-full flex justify-between">
        <div>
          <h2 className="font-bold">Card Title</h2>
          <p>Description</p>
        </div>
        <Image className=" cursor-pointer" src="images/dot.svg" width={17} height={17} alt="dot" />
      </div>

      <Box>
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction label="7 days" />
          <BottomNavigationAction label="30 days" />
          <BottomNavigationAction label="60 days" />
        </BottomNavigation>
      </Box>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 3 }}>
        <Gauge
          width={100}
          height={100}
          value={info}
          startAngle={-90}
          endAngle={90}
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 20,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#00b7c3", // Change this to your desired color for the value arc
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled, // This can be changed as well if needed
            },
          })}
        />
      </Stack>
      <div className="flex justify-center gap-2 items-center text-sm">
        <span className="w-3 h-3 bg-[#E0E0E0]"></span>
        <p>label 1</p>
        <span className="w-3 h-3 bg-[#00b7c3]"></span>
        <p>label 2</p>
      </div>
      <div className="w-full flex flex-col justify-end h-full">
        <a className="text-blue-600" href="#">
          view details
        </a>
      </div>
    </div>
  );
};

export default ChartOne;
