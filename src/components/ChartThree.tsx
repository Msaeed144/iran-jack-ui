/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import Image from "next/image";

const ChartThree: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-09-01T00:00:00.000Z",
        "2024-09-02T00:00:00.000Z",
        "2024-09-03T00:00:00.000Z",
        "2024-09-04T00:00:00.000Z",
        "2024-09-05T00:00:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  });

  const [chartSeries, setChartSeries] = useState<any[]>([
    {
      name: "Data 1",
      data: [31, 40, 28, 51, 42],
    },
    {
      name: "Data 2",
      data: [11, 32, 45, 32, 34],
    },
  ]);

  return (
    <div className="p-2 w-full sm:w-[40%] border rounded-lg shadow-sm flex flex-col">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">Card Title</h2>
          <p>Description</p>
        </div>
        <Image className=" cursor-pointer" src="images/dot.svg" width={17} height={17} alt="dot" />
      </div>

      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={150}
      />
      <div className="flex flex-col justify-end h-full">
        <a className="text-blue-600 mt-2" href="#">
          view details
        </a>
      </div>
    </div>
  );
};

export default ChartThree;
