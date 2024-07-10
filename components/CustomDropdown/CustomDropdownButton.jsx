"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  VectorDown,
  VectorWhiteDown,
  MinusIcon,
  AddIcon,
} from "@/constants/svgs";

const CustomDropdownButton = (props) => {
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [UserOpen, setUserOpen] = useState("User");
  const [activeButton, setActiveButton] = useState("include");
  const {
    textIcon,
    text,
    text_1,
    text_2,
    hasDropdown,
    handleClickDropdown,
    hasSearch,
    hasCalender,
    list,
    isOpen,
    documentView,
  } = props;

  const dropdownRef = useRef(null);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleClickDropdown(null);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleClickDropdown]);

  const handleListItemClick = (title) => {
    handleClickDropdown(null);
  };
  const users = ["User", "Admin"];
  return (
    <div className="inline-block relative" ref={dropdownRef}>
      <div
        className={`md:w-min w-full lg:w-max ${
          isOpen && list
            ? "bg-Bg_Headings text-white flex md:justify-center justify-between "
            : documentView
            ? "bg-white flex justify-between"
            : "bg-BG_text_button flex md:justify-center justify-between "
        } ${
          text === "Delete"
            ? "bg-[#FBEBEC] border-[1px] border-[#DC3545] pr-3"
            : "border-[1px] border-borderColorCustomDropdown "
        }
         ${
           text_1 || text_2
             ? "py-[0.5px] space-x-0 "
             : documentView
             ? "space-x-0 p-1 w-full "
             : "space-x-2 p-2 "
         } ${
          text === "Tile & Content"
            ? "border-[1px] rounded-s-md "
            : "m-0 rounded-md "
        } flex cursor-pointer justify-center align-middle items-center`}
        onClick={() => handleClickDropdown(text)}
      >
        <div
          className={`${textIcon ? "flex" : text_1 ? "text-sm p-2" : "hidden"}`}
        >
          {textIcon ? textIcon : text_1 === "-" ? MinusIcon : text_1}
        </div>
        <div
          className={`${
            text_2 === " "
              ? "border-none"
              : text_1 || text_2
              ? "border-x-[1px] border-borderColorCustomDropdown p-2 px-3 text-sm capitalize text-nowrap m-0"
              : "border-0 text-sm capitalize text-nowrap"
          } ${text === "Delete" && "text-[#DC3545]"} ${
            text === "100%" ? "px-0 w-16" : ""
          } `}
        >
          {text === "100%" ? (
            <div className="flex justify-start ms-0 text-nowrap">
              {text} <span className=" my-auto">{VectorDown}</span>
            </div>
          ) : (
            text
          )}
        </div>
        <div
          className={`selectIcon text-sm ${
            text === "Delete" ? "hidden" : "block"
          } text-nowrap p-2 ${text_2 === "+" ? "ps-2 text-center" : "ps-1"} `}
        >
          {isOpen && list
            ? VectorWhiteDown
            : text_2
            ? text_2 === "+"
              ? AddIcon
              : text_2 === " "
              ? ""
              : text_2
            : VectorDown}
        </div>
      </div>
      {list && (
        <ul
          className={`absolute ${isOpen ? "block" : "hidden"}  ${
            (hasCalender === "Added" || hasDropdown === "Permission") &&
            `right-[0.5px]`
          } z-10 shadow-xl  ${
            hasCalender || hasDropdown ? "w-80" : "w-48"
          } border rounded-md bg-white p-4 text-gray-700`}
          onClick={(e) => e.stopPropagation()}
        >
          {hasSearch ? (
            <div>
              {hasSearch === "Tags" ? (
                <input
                  type="search"
                  placeholder="Filter tags"
                  className="w-full mb-2 p-2 border rounded outline-none"
                />
              ) : (
                <div className="w-full space-y-2">
                  <div className="flex justify-between border rounded-md">
                    <button
                      className={`w-1/2 rounded-s ${
                        activeButton === "include"
                          ? "bg-Bg_Headings text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() => handleButtonClick("include")}
                    >
                      Include
                    </button>
                    <button
                      className={`w-1/2 ${
                        activeButton === "exclude"
                          ? "bg-Bg_Headings text-white"
                          : "bg-white text-black"
                      } rounded-e`}
                      onClick={() => handleButtonClick("exclude")}
                    >
                      Exclude
                    </button>
                  </div>
                  <input
                    type="search"
                    placeholder="Filter tags"
                    className="w-full mb-2 p-2 border rounded outline-none"
                  />
                </div>
              )}
              {list.map((title, index) => (
                <li
                  key={index}
                  className="flex items-start hover:text-white hover:bg-Bg_Headings justify-start active:bg-Bg_Headings active:text-white focus:bg-Bg_Headings cursor-pointer rounded"
                  onClick={() => handleListItemClick(title)}
                >
                  <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                    <p className="p-0 m-0 my-auto ms-2 sm:text-md">{title}</p>
                  </div>
                </li>
              ))}
            </div>
          ) : hasCalender === "Created" || hasCalender === "Added" ? (
            <div>
              {list.map((title, index) => (
                <li
                  key={index}
                  className="flex items-start  justify-start cursor-pointer rounded"
                  onClick={() => handleListItemClick(title.time)}
                >
                  <div className="flex justify-between items-start text-black text-start space-x-0 sm:space-x-2 py-1 w-full ">
                    <p className="p-0 m-0 my-auto ms-2 sm:text-sm  ">
                      {title.time}
                    </p>
                    <p className="p-0 m-0 my-auto ms-2 sm:text-xs text-text_Gray ">
                      {title.date}
                    </p>
                  </div>
                </li>
              ))}
              <label
                htmlFor=""
                className="p-0 m-0 my-auto ms-2 sm:text-sm text-black"
              >
                {" "}
                After
              </label>
              <input
                type="date"
                className=" documentAddedCreatedPlaceholder outline-none text-text_Gray w-full p-0 m-0 my-auto ms-2 sm:text-sm"
              />
              <label
                htmlFor=""
                className="p-0 m-0 my-auto ms-2 sm:text-sm text-black"
              >
                {" "}
                Before
              </label>
              <input
                type="date"
                className="documentAddedCreatedPlaceholder outline-none text-text_Gray w-full p-0 m-0 my-auto ms-2 sm:text-sm"
              />
            </div>
          ) : hasDropdown === "Permission" ? (
            <div>
              {list.map((title, index) => (
                <li
                  key={index}
                  className="flex items-start text-text_Gray hover:text-white hover:bg-Bg_Headings justify-start active:bg-Bg_Headings active:text-white focus:bg-Bg_Headings cursor-pointer rounded"
                  onClick={() => handleListItemClick(title)}
                >
                  <div className="flex justify-start  hover:text-white rounded hover:bg-Bg_Headings items-start text-start space-x-0 sm:space-x-2 py-1">
                    <p className="p-0 m-0 my-auto ms-2 sm:text-md">{title}</p>
                  </div>
                </li>
              ))}
              <div
                className={` "bg-Bg_Headings text-white" space-x-2 w-full bg-BG_text_button flex p-2 cursor-pointer justify-center border-black rounded-md align-middle items-center`}
                onClick={() => setIsUserOpen(!isUserOpen)}
              >
                <div className="text-sm capitalize text-nowrap w-full border-black">
                  {UserOpen}
                </div>
                <div className="selectIcon ps-1">{VectorDown}</div>
              </div>
              <ul
                className={`absolute ${isUserOpen ? "block" : "hidden"}
                    right-[0.2px] z-10 shadow-xl  ${
                      hasCalender || hasDropdown ? "w-80" : "w-48"
                    } border rounded-md bg-white p-4 text-gray-700`}
                onClick={(e) => e.stopPropagation()}
              >
                {users.map((title, index) => (
                  <li
                    key={index}
                    className="flex items-start hover:text-white hover:bg-Bg_Headings justify-start active:bg-Bg_Headings active:text-white focus:bg-Bg_Headings cursor-pointer rounded"
                    onClick={() => {
                      setUserOpen(title), setIsUserOpen(!isUserOpen);
                    }}
                  >
                    <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                      <p className="p-0 m-0 my-auto ms-2 sm:text-md">{title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            list.map((title, index) => (
              <li
                key={index}
                className="flex items-start hover:text-white hover:bg-Bg_Headings justify-start active:bg-Bg_Headings active:text-white focus:bg-Bg_Headings cursor-pointer rounded"
                onClick={() => handleListItemClick(title)}
              >
                <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2 py-1">
                  <p className="p-0 m-0 my-auto ms-2 sm:text-md">{title}</p>
                </div>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdownButton;
