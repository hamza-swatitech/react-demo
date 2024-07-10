"use client";
import React, { useState } from "react";
import CustomDropdownButton from "@/components/CustomDropdown/CustomDropdownButton";
import {
  CreateCorrespondentsIcon,
  CrossIcon,
  DeleteDocumentIcon,
  EditIcon,
  FilterIcon,
  PermissionCorrespondentsIcon,
  paginationLeftArrow,
  paginationRightArrow,
} from "@/constants/svgs";
import CorrespondentModal from "@/components/Correspondents/CorrespondentModal";

const page = () => {
  const [openDropdown, setOpenDropdown] = useState({
    Tags: false,
    Sort: false,
    View: false,
    Added: false,
    Select: false,
    Created: false,
    Permission: false,
    Correspondent: false,
    "Storage Path": false,
    "Document Type": false,
    "Tile & Content": false,
  });

  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItem, setcheckedItem] = useState("")
  const [unCheck, setUnCheck] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [CorrespondentsTableData, setCorrespondentsTableData] = useState([]);
  const CorrespondentsTableHeading = ["input","Name","Matching","Document Count","Last Used","Actions"];
  const handleCheckboxChange = (name) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
    setcheckedItem(name);
    setUnCheck((prev)=>!prev);
  };

  const handleSelectAllChange = (e) => {
    const checked = e.target.checked;
    setCheckedItems(
      CorrespondentsTableData.reduce(
        (acc, item) => ({
          ...acc,
          [item.name]: checked,
        }),
        {}
      )
    );
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === dropdownName ? true : false;
      });
      return newState;
    });
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSave = (newData) => {
    setCorrespondentsTableData((prevData) => [...prevData, newData]);
    handleCloseModal();
  };
  const permissionList = [
    "All",
    "My Documents",
    "Shared with me",
    "Shared by me",
    "Unowned",
  ];
  const hasInput = CorrespondentsTableHeading.includes("input");
  const remainingHeadings = CorrespondentsTableHeading.filter(
    (heading) => heading !== "input"
  );

  const handleDelete = (index) =>{
    const newArray = [...CorrespondentsTableData]
    newArray.splice(index,1);
    setCorrespondentsTableData(newArray)
  }
  // console.log("CorrespondentsTableData",CorrespondentsTableData)

  return (
    <div className="sm:mx-3 w-ful">
      <div className="flex sm:flex-row flex-col mt-6 md:flex-wrap md:gap-2 gap-2 lg:gap-2 justify-center sm:justify-end">
        {unCheck && (
          <button type="button" onClick={() => handleCheckboxChange(checkedItem)}>
            <div className="w-full flex md:w-min text-sm p-2 border-[1px] text-nowrap text-[#233742] border-[#233742] rounded-md">
              {CrossIcon} <span className="ms-1">Clear selection</span>
            </div>
          </button>
        )}
        <CustomDropdownButton
          text="Delete"
          textIcon={DeleteDocumentIcon}
          handleClickDropdown={handleDropdownToggle}
        />
        <CustomDropdownButton
          text="Permission"
          right="-173%"
          hasDropdown={"Permission"}
          list={permissionList}
          handleClickDropdown={handleDropdownToggle}
          textIcon={PermissionCorrespondentsIcon}
          isOpen={openDropdown.Permission}
          openDropdown={openDropdown}
        />
        <button onClick={handleOpenModal} className="">
          <CustomDropdownButton
            list=""
            textIcon={CreateCorrespondentsIcon}
            text="Create"
            handleClickDropdown={handleDropdownToggle}
          />
        </button>
      </div>
      <div className="flex w-full sm:flex-row flex-col mt-3 md:mr-9">
        <div className="flex flex-start gap-2 w-full sm:flex-row flex-col">
          <div className="flex flex-start gap-2 w-full">
            <p className="my-auto text-lg font-semibold">Filter:</p>
            <input
              className="outline-none border-2 border-inputBorderb w-full rounded-lg p-2"
              type="search"
              name="Name"
              id="Name"
              placeholder="Name"
            />
          </div>
          <div className=" bg-BG_text_button w-full text-black border-[1px] border-borderColorCustomDropdown rounded-md flex cursor-pointer  md:w-min align-middle items-center">
            <div className="w-full md:w-min text-sm p-1.5 rounded-s-md">
              {paginationLeftArrow}
            </div>
            <div className="text-sm capitalize p-2 md:p-2.5 md:px-4 w-full md:w-min text-nowrap m-0 border-x-[1px] border-x-Bg_Headings">
              1
            </div>
            <div className="selectIcon w-full md:w-min text-sm text-nowrap p-1.5 rounded-e-md">
              {paginationRightArrow}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full sm:flex-row flex-col md:mr-9 ">
        <div className="w-full my-4 overflow-x-auto border rounded-lg border-borderColorCustomDropdown">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {hasInput && (
                  <th scope="col" className="px-6 py-3 border-b-2">
                    <div className="flex items-center">
                      <input
                        id="select-all"
                        type="checkbox"
                        onChange={handleSelectAllChange}
                        checked={CorrespondentsTableData.every(
                          (item) => checkedItems[item.name]
                        )}
                        className="w-4 h-4 border border-gray-300 rounded outline-none"
                      />
                    </div>
                  </th>
                )}
                {remainingHeadings.map((heading, index) => (
                  <th key={index} scope="col" className="px-6 py-3 border-b-2">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CorrespondentsTableData.map((TableData, index) => (
                <tr
                  className="border-b border-gray-200 odd:bg-[#F2F2F2]"
                  key={index}
                >
                  {hasInput && (
                    <td className="px-6 py-2">
                      {/* <input
                        id={`checkbox-${index}`}
                        type="checkbox"
                        checked={checkedItems[TableData.name] || false}
                        onChange={() => handleCheckboxChange(TableData.name)}
                        className="w-4 h-4 border border-gray-300 rounded focus:ring-3 "
                      /> */}
                      <input
                        id={`checkbox-${index}`}
                        type="checkbox"
                        checked={checkedItems[TableData.name] || false}
                        onChange={(e) => handleCheckboxChange(TableData.name,e)}
                        className="w-4 h-4 border border-gray-300 rounded focus:ring-3 "
                      />
                    </td>
                  )}
                  <th
                    scope="row"
                    className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {TableData.name}
                  </th>
                  <td className="px-6 py-2">{TableData.matching}</td>
                  <td className="px-6 py-2 ">{index}</td>
                  <td className="px-6 py-2">{TableData.last_used}</td>
                  <td className="px-6 py-2">
                    <div className="w-full text-black rounded-md flex cursor-pointer md:w-min align-middle items-center">
                      <div className="w-full flex md:w-min text-sm p-2 border-[1px] border-borderColorCustomDropdown bg-BG_text_button rounded-s-md">
                        {FilterIcon} <span className="ms-1">Documents</span>
                      </div>
                      <div className="text-sm capitalize md:p-2 p-2 w-full bg-BG_text_button flex md:w-min text-nowrap m-0 border-y-[1px] border-borderColorCustomDropdown">
                        {EditIcon}
                        <span className="ms-1">Edit</span>
                      </div>
                      <div className="selectIcon w-full md:w-min bg-[#FBEBEC] border-[1px] border-[#DC3545] text-sm flex text-nowrap p-2 rounded-e-md" onClick={()=>handleDelete(index)}>
                        {DeleteDocumentIcon}
                        <span className="ms-1 text-[#DC3545]" >Delete</span>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <CorrespondentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default page;
