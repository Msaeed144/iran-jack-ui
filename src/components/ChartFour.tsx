import Image from "next/image";
import { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts'; 

const ChartFour = () => {
  const [series, setSeries] = useState([76, 67, 61, 90]);

  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '20%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        },
        barLabels: {
          enabled: true,
          useSeriesColors: true,
          offsetX: -8,
          fontSize: '12px',
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
        },
      },
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: true
        }
      }
    }]
  });

  return (
    <div className="p-2 w-full sm:w-[30%] border rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">Card Title</h2>
          <p>Description</p>
        </div>
        <Image src='images/dot.svg' width={17} height={17} alt="dot" />
      </div>
      <div className="mx-auto w-full sm:w-[200px]">
        <ReactApexChart options={options} series={series} type="radialBar" height={390} />
      </div>
      <div className='flex flex-col justify-end h-full'>
       <a className="text-blue-600 mt-2" href="#">view details</a>
      </div>
    </div>
  );
};

export default ChartFour;
