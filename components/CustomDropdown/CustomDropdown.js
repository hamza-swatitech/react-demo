"use client";
import React, { useEffect, useRef, useState } from "react";
import { VectorDown } from "@/constants/svgs";

const CustomDropdown = (props) => {
  const { text, list, isOpen, handleClickDropdown, detail,setSelectedItem } = props;
  const [selectItem, setSelectItem] = useState(detail ? "Select items" : text);
  const [dropdownPosition, setDropdownPosition] = useState("bottom");
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    checkDropdownPosition();
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleClickDropdown();
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

  const handleListItemClick = (title) => {
    handleClickDropdown(null);
    setSelectedItem(title)
    setSelectItem(title)
  }

  return (
    <div className={`inline-flex justify-between ${detail ? "w-4/5" : "w-full "} `} >
      <div className="w-full" onClick={() => handleClickDropdown(text)} >
        <div className="flex justify-between" ref={dropdownRef}>
          <p className="text-nowrap text-sm">{selectItem ? selectItem : text}</p>
          <div className="text-sm text-nowrap p-2">{VectorDown}</div>
        </div>
      </div>
      {list && (
        <ul
          className={`absolute ${
            isOpen ? "block" : "hidden"
          } z-10 shadow-xl rounded-md p-4 bg-white text-gray-700 ${
            dropdownPosition === "top" ? "bottom-full mb-0" : "top-full mt-0" 
          }`}
          // onClick={(e) => e.stopPropagation()}
            ref={buttonRef} >
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
  );
};

export default CustomDropdown;
