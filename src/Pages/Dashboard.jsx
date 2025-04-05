import React from "react";
import { assets } from "../assets/assets";

const Dashboard = () => {
  return (
    <div className="flex justify-center ">
      {/* Main content */}
      <div className="ml-[300px] mr-[30px] p-1 w-full ">
        {" "}
        {/* ml-64 to give the main content area space for the sidebar */}
        <div className="text-[#101828] text-[30px]">
          <p className="font-semibold">Dashboard</p>
          <div className="flex">
            <div className="flex justify-start w-full mt-8">
              <button className="flex text-[#475467]text-sm items-center justify-center text-sm w-[149px] h-[44px] font-medium bg-white border-[1px] border-r-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6]">
                24 Hours
              </button>
              <button className="flex  text-[#475467] items-center justify-center text-sm w-[149px] h-[44px] font-medium bg-white border-[1px] border-r-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6]">
                7 Days
              </button>
              <button className="flex  text-[#475467] items-center justify-center text-sm w-[149px] h-[44px] font-medium bg-white border-[1px] border-r-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6]">
                30 Days
              </button>
              <button className="flex  text-[#475467] items-center justify-center text-sm w-[149px] h-[44px] font-medium bg-white border-[1px] border-r-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6]">
                12 Months
              </button>
            </div>

            <div className="flex justify-end items-center">
              {" "}
              {/* Flex container for alignment */}
              <button className="flex  items-center justify-center text-sm w-[149px] h-[44px] font-semibold bg-white border-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6] ml-auto">
                <img
                  src={assets.calendar_icon}
                  alt="Calendar icon"
                  className="mr-2"
                />
                Select Dates.
              </button>
            </div>
          </div>
        </div>
        <div className="flex mt-6 w-full justify-between">
          <div className="items-center border-[1px] border-grey-300 px-4 py-2 rounded-md  w-[275px]">
            <p className="text-[#667085] text-[14px]">Total Users.</p>
            <p className="text-[30px] font-semibold pt-7 pb-4">5,093</p>
            <div className="flex">
              <img src={assets.total_users} alt="total users icon" />
              <p className="text-[#98A2B3] text-xs">Compared to last week.</p>
            </div>
          </div>
          <div className="items-center border-[1px] border-grey-300 px-4 py-2 rounded-md   w-[275px]">
            <p className="text-[#667085] text-[14px]">Total Students.</p>
            <p className="text-[30px] font-semibold pt-7 pb-4">4,289</p>
            <div className="flex">
              <img src={assets.total_students} alt="total users icon" />
              <p className="text-[#98A2B3] text-xs">Compared to last month.</p>
            </div>
          </div>
          <div className="items-center border-[1px] border-grey-300 px-4 py-2 rounded-md  w-[275px]">
            <p className="text-[#667085] text-[14px]">Total Instructors.</p>
            <p className="text-[30px] font-semibold pt-7 pb-4">600</p>
            <div className="flex">
              <img src={assets.total_instructors} alt="total users icon" />
              <p className="text-[#98A2B3] text-xs">Compared to last month.</p>
            </div>
          </div>
          <div className="items-center border-[1px] border-grey-300 px-4 py-2 rounded-md  w-[275px]">
            <p className="text-[#667085] text-[14px]">Total Sessions.</p>
            <p className="text-[30px] font-semibold pt-7 pb-4">8,000</p>
            <div className="flex">
              <img src={assets.total_sessions} alt="total users icon" />
              <p className="text-[#98A2B3] text-xs">Compared to last month.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <img src={assets.overview_users} alt="" />
          <img src={assets.sessions_users} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
