import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/dashboard");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const isActiveLink = (path) => activeLink === path;

  return (
    <div>
      <div className="fixed top-0 left-0 h-full w-[280px] bg-white text-[#344054] border border-grey-300 z-10 flex flex-col">
        <div className="flex items-center justify-center p-4 bg-white">
          <img
            src={assets.attalqeen_logo}
            alt="At-Talqeen Logo"
            className="w-[217px] h-[48px]"
          />
        </div>
        <ul className="mt-1 flex flex-col flex-grow">
          <li
            className={`flex items-center px-6 py-3 ${
              isActiveLink("/dashboard")
                ? "bg-[#EFFEF6] text-white"
                : "hover:bg-[#EFFEF6]  active:bg-[#EFFEF6]"
            }`}
            onClick={() => setActiveLink("/dashboard")}
          >
            <img
              src={
                isActiveLink("/dashboard")
                  ? assets.dashboard_active
                  : assets.dashboard
              }
              alt="Dashboard Icon"
              className="w-[20px] h-[20px] mr-2"
            />
            <Link
              to="/dashboard"
              className={isActiveLink("/dashboard") ? "text-[#0DAC5C]" : ""}
            >
              Dashboard
            </Link>
          </li>

          <li
            className={`flex items-center px-6 py-3 ${
              isActiveLink("/instructors")
                ? "bg-[#EFFEF6] text-white"
                : "hover:bg-[#EFFEF6]  active:bg-[[#EFFEF6]"
            }`}
            onClick={() => setActiveLink("/instructors")}
          >
            <img
              src={
                isActiveLink("/instructors")
                  ? assets.instructors_active
                  : assets.instructors
              }
              alt="Instructors Icon"
              className="w-[20px] h-[20px] mr-2"
            />
            <Link
              to="/instructors"
              className={isActiveLink("/instructors") ? "text-[#0DAC5C]" : ""}
            >
              Instructors
            </Link>
          </li>

          <li
            className={`flex items-center px-6 py-3 ${
              isActiveLink("/students")
                ? "bg-[#EFFEF6] text-white"
                : "hover:bg-[#EFFEF6]  active:bg-[#EFFEF6]"
            }`}
            onClick={() => setActiveLink("/students")}
          >
            <img
              src={
                isActiveLink("/students")
                  ? assets.students_active
                  : assets.students
              }
              alt="Students Icon"
              className="w-[20px] h-[20px] mr-2"
            />
            <Link
              to="/students"
              className={isActiveLink("/students") ? "text-[#0DAC5C]" : ""}
            >
              Students
            </Link>
          </li>

          <li
            className={`flex items-center px-6 py-3 mb-60 ${
              isActiveLink("/bookings")
                ? "bg-[#EFFEF6] text-white"
                : "hover:bg-[#EFFEF6]  active:bg-[#EFFEF6]"
            }`}
            onClick={() => setActiveLink("/bookings")}
          >
            <img
              src={
                isActiveLink("/bookings")
                  ? assets.bookings_active
                  : assets.bookings
              }
              alt="Bookings Icon"
              className="w-[20px] h-[20px] mr-2"
            />
            <Link
              to="/bookings"
              className={isActiveLink("/bookings") ? "text-[#0DAC5C]" : ""}
            >
              Bookings
            </Link>
          </li>

          <div className="mt-auto">
            <li
              className={`flex px-6 py-3 items-center ${
                isActiveLink("/settings")
                  ? "bg-[#EFFEF6] text-white"
                  : "hover:bg-[#EFFEF6] active:bg-[#EFFEF6]"
              }`}
              onClick={() => setActiveLink("/settings")}
            >
              <img
                src={
                  isActiveLink("/settings")
                    ? assets.settings_active
                    : assets.settings
                }
                alt="Settings Icon"
                className="w-[20px] h-[20px] mr-2"
              />
              <Link
                to="/settings"
                className={isActiveLink("/settings") ? "text-[#0DAC5C]" : ""}
              >
                Settings
              </Link>
            </li>

            <li
              className={`px-6 py-3 mt-0 flex items-center justify-between ${
                isActiveLink("/signout")
                  ? "bg-[#EFFEF6] text-white"
                  : "hover:bg-[#EFFEF6] active:bg-[#EFFEF6]"
              }`}
              onClick={() => setActiveLink("/signout")}
            >
              <img
                src={assets.user_icon}
                alt="user icon"
                className="w-12 h-12"
              />
              <Link
                to="/signout"
                className={isActiveLink("/signout") ? "text-[#0DAC5C]" : ""}
              >
                <div className="flex flex-col">
                  <p className="text-[#101828] text-base font-semibold">
                    Lawal Ayodeji
                  </p>
                  <p className="text-[#475467] text-sm">ayo@at-talqeen.com</p>
                </div>
              </Link>
              <img
                src={assets.signout_icon}
                alt="Signout Icon"
                className="w-[20px] h-[20px]"
              />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
