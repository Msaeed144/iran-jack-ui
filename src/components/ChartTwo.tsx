
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import Image from "next/image";

        
const ChartTwo = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
      const data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr' , 'May' , 'Jun'],
          datasets: [
              {
                  label: 'Sales',
                  data: [540, 325, 702, 620 , 275 , 680],
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
      const options = {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      };

      setChartData(data);
      setChartOptions(options);
  }, []);

  return (
    <div className=" p-2 w-full sm:w-[30%] border rounded-lg shadow-sm flex flex-col">
         <div className="flex justify-between">
                  <div>
                    <h2 className="font-bold">Card Title</h2>
                    <p>Description</p>
                  </div>
                  <Image className=" cursor-pointer" src='images/dot.svg' width={17} height={17} alt="dot" />
                </div>

             <div className='w-full'>
             <Chart type="bar" data={chartData} options={chartOptions} />

              </div> 
    <div className='flex flex-col justify-end h-full'>
       <a className="text-blue-600 mt-2" href="#">view details</a>
      </div>
    </div>
  )
}

export default ChartTwo





