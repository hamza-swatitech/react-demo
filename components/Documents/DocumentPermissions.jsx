import { CrossIcon, VectorDown } from "@/constants/svgs";
import React, { useEffect, useRef, useState } from "react";

const DocumentPermissions = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState("bottom");
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);


  const checkDropdownPosition = () => {
    if (buttonRef.current && dropdownRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }
  };
  const handleListItemClick = () =>{
   setIsOpenDropdown(!isOpenDropdown)
  }

  useEffect(()=>{
    checkDropdownPosition();
  },[isOpenDropdown])
  const list = ["lorem ipsum","dolor sit","amet consectetur","Quis mi"]
  return (
    <div className="w-full">
      <p className="text-md font-bold text-black">Permissions</p>
      <div className="mt-3">
        <form action="">
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white">
            Owner
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-inputBorder outline-none text-gray-900 text-sm rounded-md  block w-full ps-2 p-1"
            />
            <div
              className="absolute inset-y-0 end-0 flex items-center pe-3 border-s ps-2"
              onClick={()=>setIsOpenDropdown(!isOpenDropdown)}
              // ref={dropdownRef}
            >
              {VectorDown}
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center pe-9 pointer-events-none ps-2">
              {CrossIcon}
            </div>
            {isOpenDropdown && (
              <ul
                className={`absolute ${
                    isOpenDropdown ? "block" : "hidden"
                } z-10 shadow-xl rounded-md p-4 bg-white text-gray-700 ${
                  dropdownPosition === "top"
                    ? "bottom-full mb-0"
                    : "top-full mt-0"
                }`}
              >
                {list.map((title, index) => (
                  <li
                    key={index}
                    className="flex items-start hover:text-white px-2 hover:bg-Bg_Headings justify-start active:bg-Bg_Headings active:text-white focus:bg-Bg_Headings cursor-pointer rounded"
                    onClick={() => handleListItemClick(title)}
                  >
                    <div className="flex justify-start items-start text-start py-1">
                      <p className="p-0 m-0 my-auto sm:text-md">{title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-sm text-LightTextColor">
            Objects without an owner can be viewed and edited by
            <br /> all users
          </p>
        </form>
        <p className="font-semibold text-sm my-4">View</p>
        <form action="" className="">
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Users
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-inputBorder outline-none text-gray-900 text-sm rounded-md  block w-full ps-2 p-1"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer border-s ps-2"
            //  onClick={()=>setIsOpenDropdown(!isOpenDropdown)}
             >
              {VectorDown}
            </div>
          </div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Groups
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-inputBorder outline-none text-gray-900 text-sm rounded-md  block w-full ps-2 p-1"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer border-s ps-2"
            //  onClick={()=>setIsOpenDropdown(!isOpenDropdown)}
             >
              {VectorDown}
            </div>
          </div>
        </form>
        <p className="font-semibold text-sm my-4">Edit</p>
        <form action="" className="">
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Users
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-inputBorder outline-none text-gray-900 text-sm rounded-sm  block w-full ps-2 p-1"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer border-s ps-2"
            //  onClick={()=>setIsOpenDropdown(!isOpenDropdown)}
             >
              {VectorDown}
            </div>
          </div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Groups
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-inputBorder outline-none text-gray-900 text-sm rounded-md  block w-full ps-2 p-1"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer border-s ps-2"
            //  onClick={()=>setIsOpenDropdown(!isOpenDropdown)}
             >
              {VectorDown}
            </div>
          </div>
          <p className="text-sm text-LightTextColor">
            Edit permissions also grant viewing permissions
          </p>
        </form>
      </div>
    </div>
  );
};

export default DocumentPermissions;
