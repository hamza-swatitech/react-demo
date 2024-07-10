import Link from "next/link";
import React from "react";
import {
  CorrespondentsBlackIcon,
  DocumentsBlackTypeIcon,
  SearchIcon,
  SettingsblackIcon,
  UserIcon,
  UserlargeIcon,
  logOutIcon,
} from "../../constants/svgs";
const Navbar = (props) => {
  const { navbarHeading } = props;

  return (
    <nav className=" w-full">
      <div className="w-full flex flex-wrap items-center justify-center text-center sm:justify-between">
        <Link
          href=""
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center sm:text-2xl sm:ms-2.5 text-xl font-semibold whitespace-nowrap  capitalize">
            {navbarHeading}
          </span>
        </Link>
        <div
          className="sm:items-center sm:justify-between justify-center items-center text-center w-full sm:flex sm:w-4/6 flex-col"
          id="navbar-sticky"
        >
          <ul className="flex md:p-0 sm:my-auto w-full z-10 justify-between items-center text-center flex-col-reverse space-y-reverse space-y-0 sm:space-y-0 sm:flex-row">
            <li className="sm:mx-auto sm:w-3/5 w-full ">
              <div className="relative flex items-center sm:mx-auto justify-between sm:justify-around my-2 border border-[#23374233] rounded-md">
                <input
                  type="search"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm outline-none text-black active:outline-none bg-[#D9D9D942] focus:outline-none border-gray-300 "
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-1">
                  {SearchIcon}
                </div>
              </div>
            </li>
            <li className="  sm:justify-center sm:flex hidden  sm:w-auto w-full">
              <div className="dropdownDashboard inline-block relative">
                <button className=" inline-flex items-center sm:me-3">
                  <span className="mx-auto p-2.5 rounded-full w-12 h-12 bg-BG_text_button border-0">
                    {UserIcon}
                  </span>
                </button>
                <ul className="dropdownMenu absolute hidden right-3 shadow-md w-60 border rounded-md bg-white p-3 text-gray-700">
                  <li className="flex items-start justify-start border-b py-2">
                    <span className=" rounded-full w-10 h-10 p-[6px] bg-BG_text_button border-0">
                      {UserIcon}
                    </span>
                    <div className="ms-3 text-start">
                      <p className="text-md m-0 p-0">John Doe</p>
                      <p className="text-sm m-0 p-0">Johndoe@email.com</p>
                    </div>
                  </li>
                  <li className="flex items-start justify-start hover:bg-BG_text_button cursor-pointer rounded">
                    <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                      <span>{CorrespondentsBlackIcon}</span>
                      <p className="p-0 m-0 my-auto hidden sm:block sm:text-md">
                        My Profile
                      </p>
                    </div>
                  </li>
                  <Link href="/dashboard/settings">
                    <li className="flex items-start justify-start hover:bg-BG_text_button cursor-pointer rounded">
                      <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1 w-full">
                        <span>{SettingsblackIcon}</span>
                        <p className="p-0 m-0 my-auto hidden sm:block sm:text-md">
                          Settings
                        </p>
                      </div>
                    </li>
                  </Link>
                  <li className="flex items-start justify-start hover:bg-BG_text_button cursor-pointer rounded">
                    <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                      <span>{DocumentsBlackTypeIcon}</span>
                      <p className="p-0 m-0 my-auto hidden sm:block sm:text-md">
                        Documentation
                      </p>
                    </div>
                  </li>
                  <Link href="/dashboard">
                    <li className="flex items-start justify-start border-t hover:bg-BG_text_button cursor-pointer rounded">
                      <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                        <span>{logOutIcon}</span>
                        <p className="p-0 m-0 my-auto hidden sm:block sm:text-md">
                          Log out
                        </p>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
            <li className=" flex sm:hidden w-full justify-evenly">
              <div className="dropdownDashboard inline-block relative">
                <button className=" inline-flex items-center sm:me-3">
                  <span className="mx-auto p-4 rounded-full w-20 h-20 bg-BG_text_button border-2 sm:border-0">
                    {UserlargeIcon}
                  </span>
                </button>
                <ul className="dropdownMenu absolute hidden right-[-73px] z-10 shadow-md w-60 border rounded-md bg-white p-3 text-gray-700">
                  <li className="flex items-start justify-start border-b py-2">
                    <span className=" rounded-full w-10 h-10 p-[6px] bg-BG_text_button border-0">
                      {UserIcon}
                    </span>
                    <div className="ms-3 text-start">
                      <p className="text-md m-0 p-0">John Doe</p>
                      <p className="text-sm m-0 p-0">Johndoe@email.com</p>
                    </div>
                  </li>
                  <li className="flex items-start justify-start hover:bg-BG_text_button cursor-pointer rounded">
                    <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                      <span>{CorrespondentsBlackIcon}</span>
                      <p className="p-0 m-0 my-auto  sm:text-md">
                        My Profile
                      </p>
                    </div>
                  </li>
                  <Link href="/dashboard/settings">
                    <li className="flex items-start justify-start hover:bg-BG_text_button cursor-pointer rounded">
                      <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1 w-full">
                        <span>{SettingsblackIcon}</span>
                        <p className="p-0 m-0 my-auto sm:text-md">
                          Settings
                        </p>
                      </div>
                    </li>
                  </Link>
                  <li className="flex items-start justify-start hover:bg-BG_text_button cursor-pointer rounded">
                    <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                      <span>{DocumentsBlackTypeIcon}</span>
                      <p className="p-0 m-0 my-auto  sm:text-md">
                        Documentation
                      </p>
                    </div>
                  </li>
                  <Link href="/dashboard">
                    <li className="flex items-start justify-start border-t hover:bg-BG_text_button cursor-pointer rounded">
                      <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                        <span>{logOutIcon}</span>
                        <p className="p-0 m-0 my-auto  sm:text-md">
                          Log out
                        </p>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
