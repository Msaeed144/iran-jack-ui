import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Image from "next/image";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from 'react';

const ChartSix = () => {
  const dataSet = [
    [
      { group: 'group A', data: [4, 3, 5] },
      { group: 'group B', data: [6, 5, 4] },
      { group: 'group C', data: [8, 1, 2] }
    ],
    [
      { group: 'group A', data: [2, 4, 7] },
      { group: 'group B', data: [1, 6, 3] },
      { group: 'group C', data: [5, 2, 4] }
    ],
    [
      { group: 'group A', data: [5, 3, 6] },
      { group: 'group B', data: [3, 7, 2] },
      { group: 'group C', data: [6, 4, 8] }
    ]
  ];

  const [value, setValue] = useState(0); 
  const [data, setData] = useState(dataSet[0]); 

  const handleChange = (_event: React.ChangeEvent<unknown>, newValue: number) => {
    setValue(newValue);
    setData(dataSet[newValue]);
  };

  return (
    <div className="p-2 w-full sm:w-[40%] border rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">Card Title</h2>
          <p>Description</p>
        </div>
        <Image className=" cursor-pointer" src='images/dot.svg' width={17} height={17} alt="dot" />
      </div>
      <Box>
        <BottomNavigation className="!h-5" showLabels value={value} onChange={handleChange}>
          <BottomNavigationAction label="7 days" />
          <BottomNavigationAction label="30 days" />
          <BottomNavigationAction label="60 days" />
        </BottomNavigation>
      </Box>
      <div className='sm:w-full w-[20px]'>
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]} // داده‌های محور X
          series={data.map(item => ({ data: item.data }))} 
          width={350}
          height={200}
        />
      </div>
      <div className='flex flex-col justify-end h-full'>
       <a className="text-blue-600 mt-2" href="#">view details</a>
      </div>
    </div>
  );
};

export default ChartSix;
