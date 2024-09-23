/* eslint-disable @next/next/no-img-element */
'use client'
import ChartFive from "@/components/ChartFive";
import ChartFour from "@/components/ChartFour";
import ChartOne from "@/components/ChartOne";
import ChartSix from "@/components/ChartSix";
import ChartThree from "@/components/ChartThree";
import ChartTwo from "@/components/ChartTwo";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ cross , setCross ] = useState(false)
  const [ group , setGroup ] = useState(false)
  const [ option1 , setOption1 ] = useState(false)

  return (
    <>
    {
      cross ?"":
      <header className={`hidden ${cross?"hidden":"sm:flex sm:justify-between sm:items-center"} shadow-md z-10 mb-[0.35px]  w-full h-9 bg-[#f0f0f0]  p-2 `} >
        <div>
          <Image src='/images/logo.png' width={30} height={30} alt="logo" />
        </div>
        <div className="flex flex-row-reverse gap-3">
          <label htmlFor="" className="relative text-gray-400 focus-within:text-gray-600 block">
            <Image className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-1" src='/images/search.svg' width={7} height={7} alt="search" />
            <input type="text" className="form-input border ps-8 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block focus:outline-none rounded border-[#828282] shadow-md" placeholder="Search" />
          </label>
          <div className="flex">
            <Image src='images/left.svg' width={20} height={20} alt="multiply" />
            <Image src='images/right.svg' width={20} height={20} alt="multiply" />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-2 items-center">
          <Image onClick={()=>setCross(true)} src='images/multiply.svg' width={20} height={20} alt="multiply" />
          <Image src='images/square.svg' width={17} height={17} alt="square" />
          <Image src='images/minus.svg' width={20} height={20} alt="minus" />
          <div className="border border-[#828282] rounded-full p-1 relative">
            <Image src='images/user.svg' width={17} height={17} alt="user" />
            <Image className="absolute bottom-[-2px] left-4 border-white rounded-full border-2" src='images/correct.svg' width={15} height={15} alt="user" />
          </div>
          <Image src='images/dot.svg' width={17} height={17} alt="dot" />
        </div>
      </header>
    }
      
      <main className="w-full flex">
        <div className={`hidden ${cross?"hidden":"sm:flex"} w-12 bg-[#f0f0f0] text-[#828282] text-[0.5rem] text-center flex flex-col gap-3`}>
          <div className="text-center">
            <Image className="mx-auto" src='images/bell.svg' width={25} height={25} alt="bell" />
            <p>Activity</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/chat.svg' width={25} height={25} alt="bell" />
            <p>Chat</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/people.svg' width={25} height={25} alt="bell" />
            <p>Teams</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/calendar.svg' width={25} height={25} alt="bell" />
            <p>Calendar</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/call.svg' width={25} height={25} alt="bell" />
            <p>Calls</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/file.svg' width={25} height={25} alt="bell" />
            <p>Files</p>
          </div>
          <div className="text-center text-[#5E60C2] border-s-2 border-[#5E60c2] ms-[2px]">
            <Image className="mb-1 mx-auto" src='/images/logo.png' width={25} height={25} alt="bell" />
            <p>Van Arsdel</p>
          </div>
          <div className="text-center">
            <Image className="mb-1 mx-auto" src='images/dot.svg' width={25} height={25} alt="bell" />
          </div>
          <div className="text-center">
            <Image className="mx-auto mb-2" src='images/plus.svg' width={25} height={25} alt="bell" />
            <p>Apps</p>
          </div>
        </div>
        <div className="w-full">
          <div className="hidden sm:flex justify-between px-3  border-b border-opacity-30 border-[#828282]">
            <div className="flex gap-3 text-sm">
              <div className="flex py-2 gap-1">
              <Image src='/images/blacklogo.png' width={25} height={25} alt="bell" />
                <p className=" font-extrabold">Van Arsdel</p>
              </div>
              <p className="py-2 border-b-4 rounded-sm border-blue-400">Home</p>
              <p className="py-2">Timeline</p>
              <p className="py-2">Chat</p>
              <p className="py-2">Assigned To you</p>
            </div>
            <div className="flex gap-3">
              <Image src='images/upload.svg' width={17} height={17} alt="dot" />
              <Image src='images/dot.svg' width={17} height={17} alt="dot" />
            </div>

          </div>
          <div className="hidden sm:flex">
            <div className="flex justify-between p-1 border-b">
              <div className=" flex items-center gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <span className="w-5 rounded-md h-[0.20rem] bg-[#828282] "></span>
                <span className="w-5 rounded-md h-[0.20rem] bg-[#828282] "></span>
                <span className="w-5 rounded-md h-[0.20rem] bg-[#828282] "></span>
              </div>
              <div>
                <select name="" id="" className="p-2 bg-[#5b5fc7] rounded-md text-white">
                  <option value="">O Text</option>
                </select>
              </div>
              <div className="flex gap-4 ps-4 pe-6 ">
                <div className="flex gap-2">
                  <Image src='images/circle.svg' width={20} height={20} alt="multiply" />
                  <p>Text</p>
                </div>
                <div className="flex gap-2">
                  <Image src='images/circle.svg' width={20} height={20} alt="multiply" />
                  <p>Text</p>
                </div>
              </div>
              <div className="flex gap-4 ps-4 pe-6 border-e border-[#828282]">
              <div className="flex gap-2">
                  <Image src='images/circle.svg' width={20} height={20} alt="multiply" />
                  <p>Text</p>
                </div>
                <div className="flex gap-2">
                  <Image src='images/circle.svg' width={20} height={20} alt="multiply" />
                  <p>Text</p>
                </div>
                <div className="flex gap-2">
                  <Image src='images/circle.svg' width={20} height={20} alt="multiply" />
                  <p>Text</p>
                </div>
              </div>
              <div className="flex gap-4">
              <div className="flex gap-2">
                  <Image src='images/circle.svg' width={20} height={20} alt="multiply" />
                  <p>Text</p>
                </div>
                <div className="flex gap-2">
                  <Image src='images/circle.svg' width={20} height={20} alt="multiply" />
                  <p>Text</p>
                </div>
              </div>
              </div>
              <div className="flex items-center flex-row-reverse gap-2 p-1">
                <div>
                <label htmlFor="" className="relative text-gray-400 focus-within:text-gray-600 block">
                <Image className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-1" src='/images/search.svg' width={7} height={7} alt="search" />
                <input type="text" className="p-1 form-input border ps-8 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block focus:outline-none rounded border-[#828282] shadow-md h-8" placeholder="Find" />
              </label>
                </div>
              <p className=" font-bold">
                Filter
              </p>
              </div>
            </div>
          </div>
          <div className="sm:hidden flex justify-between m-3">
            <div className="flex gap-2 items-center">
              <div className="border rounded-full p-4">
              <Image src='images/user.svg' width={17} height={17} alt="user" />
              </div>
              <p className="font-extrabold text-lg">Van Arsdel</p>
            </div>
            <div className="flex gap-4 flex-row-reverse">
             <Image src='images/dot.svg' width={17} height={17} alt="dot" />
             <Image src='images/robot.svg' width={17} height={17} alt="dot" />
            </div>
          </div>
          <div className="sm:hidden flex mb-2 mx-auto ">
            
              <div className="border-b-2 border-blue-500 font-bold p-2 w-1/3 text-center">Tab 1</div>
              <div className=" w-1/3 text-center font-bold p-2">Tab 2</div>
              <div className=" w-1/3 text-center font-bold p-2">Tab 3</div>
       
          </div>
          <div className="flex h-[80%]">
            <div className="w-1/5 border-e hidden sm:block">
              <div className="ms-2 flex items-center text-[#828282]" onClick={()=>setGroup(!group)}>
                <p>Group title</p>
                {
                  group ? 
                  <Image src='/images/down.svg' width={30} height={30} alt="search" />
                  :
                  <Image src='/images/up.svg' width={30} height={30} alt="search" />

                }
              </div>
              {
                group ? 
                <div className=" ms-6 text-[#828282]">
                  <div className="flex items-center my-2" onClick={()=>setOption1(!option1)}>
                    <p>Option</p>
                    {
                      option1 ? 
                      <Image src='/images/down.svg' width={25} height={25} alt="down" />
                      :
                      <Image src='/images/up.svg' width={25} height={25} alt="up" />
                    }
                  </div>
                  {
                   option1 ? 
                      <div className="ms-10">
                        <ul>
                          <li className="flex gap-1">Items <Image src='/images/down.svg' width={25} height={25} alt="down" />                      </li>
                          <li className="flex gap-1">Items <Image src='/images/down.svg' width={25} height={25} alt="down" />                      </li>
                          <li className="flex gap-1">Items <Image src='/images/down.svg' width={25} height={25} alt="down" />                      </li>
                        </ul>
                      </div>:
                  ""
                  }
                  
                  <div className="my-2">Option</div>
                </div>
                :
                ""
              }
            </div>
            <div className="flex sm:p-1 p-3  flex-col w-full border-s border-[#828282] h-fit border-opacity-30">
              <div className="w-full flex sm:flex-row flex-col  h-fit gap-2 mb-1 ">
                <ChartOne />
                <ChartTwo />
                <ChartThree />
              </div>
              <div className="w-full flex sm:flex-row flex-col h-fit gap-2">
                <ChartFour />
                <ChartFive />
                <ChartSix />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="z-10 sm:hidden sticky bottom-0 left-0 right-0 flex justify-between p-4 bg-white">
      <div className="text-center">
            <Image className="mx-auto" src='images/bell.svg' width={25} height={25} alt="bell" />
            <p>Activity</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/chat.svg' width={25} height={25} alt="bell" />
            <p>Chat</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/people.svg' width={25} height={25} alt="bell" />
            <p>Teams</p>
          </div>
          <div className="text-center">
            <Image className="mx-auto" src='images/calendar.svg' width={25} height={25} alt="bell" />
            <p>Calendar</p>
          </div>
          <div className="text-center">
            <Image src='images/dot.svg' width={25} height={25} alt="dot" />
            <p>More</p>
          </div>
      </footer>
    </>
  );
}
