"use client";
import React, { useEffect, useRef } from "react";

const page = () => {
  const progressRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const progress = progressRef.current;
    if (progress) {
      progress.style.width = progress.getAttribute("data-done") + "%";
      progress.style.opacity = 1;
    }
  }, []);
  const handleBrowseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="w-full flex justify-end flex-col items-end ">
      <div className="statistics border rounded-lg w-full md:w-[250px] mt-3 bg-white md:mr-6  shadow-md">
        <p className="p-1.5 bg-BG_text_button rounded-t-lg border-[1.5px] border-[#3B889F26] text-sm w-full">
          Statistics
        </p>
        <div className="totalCharacters m-3 p-1.5  rounded-lg bg-BG_text_button ">
          <div className="flex justify-between">
            <p>Total Characters</p>
            <p className="bg-[#3B889F] px-2 my-auto text-sm rounded-full text-white">
              1200
            </p>
          </div>
          <div className="progress bg-gray-300 rounded-full relative h-3 w-full my-5">
            <div
              ref={progressRef}
              className="progress-done bg-[#3B889F] rounded-full text-white flex items-center justify-center h-full w-0 transition-all duration-1000 ease-in-out"
              data-done="50"
            ></div>
          </div>
          <div className=" flex">
            <li className="font-semibold w-1/2 text-sm list-none">
              <span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#2EA276]"></span>
              JPEG <span className="text-[#6E6E6E85]">(50%)</span>
            </li>
            <li className="font-semibold w-1/2 text-sm list-none">
              <span className="inline-block w-3 h-3 mr-2 rounded-full bg-[#E99559]"></span>
              PDF <span className="text-[#6E6E6E85]">(50%)</span>
            </li>
          </div>
        </div>
        <div className="totalCharacters m-3 p-2 space-y-2 rounded-lg bg-BG_text_button ">
          <div className="tags flex justify-between align-middle items-center">
            <p className="capitalize">tags</p>
            <p className="w-5 h-5 text-white pt-0.5 pl-1.5 rounded-full text-xs bg-[#3B889F]">
              3
            </p>
          </div>
          <div className="tags flex justify-between align-middle items-center">
            <p className="capitalize">Correspondents</p>
            <p className="w-5 h-5 text-white pt-0.5 pl-1.5 rounded-full text-xs bg-[#3B889F]">
              3
            </p>
          </div>
          <div className="tags flex justify-between align-middle items-center">
            <p className="capitalize">Document Types</p>
            <p className="w-5 h-5 text-white pt-0.5 pl-1.5 rounded-full text-xs bg-[#3B889F]">
              3
            </p>
          </div>
          <div className="tags flex justify-between align-middle items-center">
            <p className="capitalize">Storage Paths</p>
            <p className="w-5 h-5 text-white pt-0.5 pl-1.5 rounded-full text-xs bg-[#3B889F]">
              3
            </p>
          </div>
        </div>
      </div>
      <div className="statistics border rounded-lg w-full md:w-[250px] mt-3 shadow-md bg-white md:mr-6">
        <p className="p-1.5 bg-BG_text_button rounded-t-lg border-[1.5px] border-[#3B889F26] text-sm">
          Upload new Document
        </p>
        <div className="selectFile p-1.5 relative">
          <p className="text-xs text-[#6E6E6E85]">Drop document anywhere or</p>
          <input
            type="file"
            className="cursor-pointer absolute top-8 w-32 left-16"
            ref={fileInputRef}
            hidden
          />
          <p
            className="w-32 cursor-pointer bg-BG_text_button text-center my-3 mx-auto border-black rounded-lg border-2 border-dotted"
            onClick={handleBrowseFile}
          >
            Browse File
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
