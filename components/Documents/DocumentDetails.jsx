import { AddIcon, FilterIcon } from "@/constants/svgs";
import React, { useState } from "react";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const DocumentDetails = () => {
  const [openDropdown, setOpenDropdown] = useState({
    Tags: false,
    Correspondent: false,
    "Storage Path": false,
    "Document Type": false,
  });

  const [selectedItem, setSelectedItem] = useState("Select items");
  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === dropdownName ? true : false;
      });
      return newState;
    });
  };
  console.log("openDropdown", openDropdown.Correspondent);
  const CorrespondentsList = ["User", "Correspondents"];
  return (
    <>
      <form className="w-sm mx-auto mb-0 space-y-2">
        <p className="font-semibold">Details</p>
        <div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="4352150"
            />
          </div>
        </div>
        <div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Archive serial number
          </label>
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none border-s ps-2">
              +1
            </div>
          </div>
        </div>
        <div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Date Created
          </label>
          <div className="relative">
            <input
              type="date"
              className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-1 pe-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="05/08/2024"
            />
            <div className="absolute inset-y-0 end-0 flex items-center border-s pl-2 pe-2.5 pointer-events-none">
              {FilterIcon}
            </div>
          </div>
        </div>
        <div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Correspondent
          </label>
          <div className="w-full relative">
            <div className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block ps-2 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <CustomDropdown
                list={CorrespondentsList}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                detail="true"
                text="Correspondent"
                isOpen={openDropdown.Correspondent}
                handleClickDropdown={handleDropdownToggle}
              />
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center  border-s pl-2 pe-2.5 pointer-events-none">
              {FilterIcon}
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center border-s pl-2 pe-12 pointer-events-none">
              {AddIcon}
            </div>
          </div>
        </div>
        <div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Document Type
          </label>
          <div className="w-full relative">
            <div className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block ps-2 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <CustomDropdown
                list={CorrespondentsList}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                text="Document Type"
                detail="true"
                isOpen={openDropdown["Document Type"]}
                handleClickDropdown={handleDropdownToggle}
              />
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center  border-s pl-2 pe-2.5 pointer-events-none">
              {FilterIcon}
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center border-s pl-2 pe-12 pointer-events-none">
              {AddIcon}
            </div>
          </div>
        </div>
        <div>
          <label
            for="email-address-icon"
            className="block text-sm font-medium text-gray-900 dark:text-white"
          >
            Storage Path
          </label>
          <div className="w-full relative">
            <div className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block ps-2 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <CustomDropdown
                list={CorrespondentsList}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                text="Storage Path"
                detail="true"
                isOpen={openDropdown["Storage Path"]}
                handleClickDropdown={handleDropdownToggle}
              />
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center border-s pl-2 pe-2.5 pointer-events-none">
              {FilterIcon}
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center border-s pl-2 pe-12 pointer-events-none">
              {AddIcon}
            </div>
          </div>
        </div>
        <div>
          <label
            for="email-address-icon"
            className="block text-xs font-medium text-gray-900 dark:text-white"
          >
            Tags
          </label>
          <div className="w-full relative">
            <div className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block ps-2 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <CustomDropdown
                list={CorrespondentsList}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                text="Tags"
                detail="true"
                isOpen={openDropdown.Tags}
                handleClickDropdown={handleDropdownToggle}
              />
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center border-s pl-2 pe-2.5 pointer-events-none">
              {FilterIcon}
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center border-s pl-2 pe-11 pointer-events-none">
              {AddIcon}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className=" bg-BG_text_button my-4 text-black border-[1px] border-borderColorCustomDropdown rounded-md flex cursor-pointer w-min align-middle items-center">
            <div className="flex text-sm p-2 hover:bg-Bg_Headings  rounded-s-md hover:text-white">
              Discard
            </div>
            <div className=" text-sm capitalize p-2 text-nowrap m-0 hover:bg-Bg_Headings hover:text-white border-x-[1px] border-x-borderColorCustomDropdown">
              Save & Next
            </div>
            <div className="selectIcon text-sm hover:bg-Bg_Headings hover:text-white  text-nowrap p-2 rounded-e-md">
              Save
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DocumentDetails;
