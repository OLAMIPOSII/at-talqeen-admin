import React, { useState } from "react";
import { instructorData } from "../assets/assets"; // Adjust the path based on your file structure
import { assets } from "../assets/assets";

const Instructors = () => {
  const [instructorDataList, setInstructorDataList] = useState(instructorData);

  return (
    <div className="justify-center ">
      {/* Main content */}
      <div className="ml-[300px] mr-[30px] w-[1300px] p-1 ">
        {" "}
        {/* ml-64 to give the main content area space for the sidebar */}
        <div className="text-[#101828] text-[30px]">
          <p className="font-semibold">Instructors</p>
        </div>
        <div className="container py-8">
          <div className="flex justify-between w-full">
            <div className="relative w-[442px]">
              {" "}
              {/* Set width of input container */}
              <input
                type="text"
                placeholder="Search..."
                className="border-gray-300 border-[1px] px-10 py-1 text-gray-800 rounded-md border-[1px] w-full h-[44px]" // Padding left to fit icon
              />
              <img
                src={assets.search_icon}
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] text-gray-500"
              />
            </div>

            <div className="flex justify-end items-center">
              {" "}
              {/* Flex container for alignment */}
              <button className=" flex items-center mr-2 justify-center text-sm w-[116px] h-[44px] font-semibold bg-white  border-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6] ml-auto">
                <img src={assets.filter_icon} alt="" className="mr-2" />
                filter.
              </button>
              <button className=" flex items-center justify-center text-sm w-[148px] h-[44px] font-semibold bg-white  border-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6] ml-auto">
                <img src={assets.calendar_icon} alt="" className="mr-2" />
                Select Dates.
              </button>
              <button
                className=" flex items-center justify-center ml-2
               text-sm w-[103px] h-[44px] font-semibold bg-white  border-[1px] border-gray-300 px-2 py-1 text-gray-800 rounded-md hover:bg-[#EFFEF6] hover:border-[#EFFEF6] ml-auto"
              >
                <img src={assets.export_icon} alt="" className="mr-2" />
                Exports.
              </button>
            </div>
          </div>
          {/* Header row */}
          <div className="grid grid-cols-5 gap-4 text-lg font-semibold bg-gray-100 py-2 px-4 mb-4">
            <p>Name</p>
            <p>Nationality</p>
            <p>Date Registered</p>
            <p>Status</p>
            <p>Action</p>
          </div>

          {/* Rendering instructor data */}
          {instructorDataList.map((instructorData) => (
            <div
              key={instructorData.id}
              className="grid grid-cols-5 gap-4 border-b py-2 px-4 hover:bg-gray-50"
            >
              <div className="flex items-center">
                <p>
                  <img src={instructorData.image} alt="" />
                </p>
                <div className="col ml-3">
                  <p className="text-[14px]">{instructorData.name}</p>
                  <p className="text-[14px] text-[#344054] font-base">
                    {instructorData.email}
                  </p>
                </div>
              </div>
              <p>{instructorData.nationality}</p>
              <p>{instructorData.dateRegistered}</p>

              {/* Rendering status icon as an image */}
              <p>
                <img
                  src={instructorData.status}
                  alt={instructorData.status}
                  className="w-[67px] h-[24px]" // Add classes to control size
                />
              </p>

              {/* Rendering action icon as an image */}
              <p>
                <img
                  src={instructorData.action}
                  alt={instructorData.action}
                  className="w-6 h-6 cursor-pointer" // Add classes for action icon, like a pointer for clicks
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
