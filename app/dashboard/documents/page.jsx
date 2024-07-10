"use client";
import React, { useState } from "react";
import CustomDropdownButton from "@/components/CustomDropdown/CustomDropdownButton";
import testPdf from "@/public/pdf/samplePDF.pdf";
import GridViews from "@/components/DocumentViews/GridViews";
import TileViews from "@/components/DocumentViews/TileViews";
import OptionView from "@/components/DocumentViews/OptionView";
import { Store } from "@/contextApi/context";
import {
  ActionIcon,
  CorrespondentsDocumentBlackIcon,
  CorrespondentsIcon,
  CrossIcon,
  CustomFieldsIcon,
  DeleteDocumentIcon,
  DocumentEqualIcon,
  DocumentSelectIcon,
  DocumentSelectWhiteIcon,
  DocumentTableList,
  DocumentTagsIcon,
  DocumentWindowIcon,
  DocumentsBlackIcon,
  DocumentsStoragePath,
  DocumentsTypeIcon,
  DownloadIcon,
  LeftArrowIcon,
  RightArrowIcon,
  ShareLinksIcon,
  StoragePathIcon,
  TagsIcon,
  VectorDown,
} from "@/constants/svgs";
import DocumentDetails from "@/components/Documents/DocumentDetails";
import DocumentContent from "@/components/Documents/DocumentContent";
import DoocumentMetadata from "@/components/Documents/DoocumentMetadata";
import DocumentNotes from "@/components/Documents/DocumentNotes";
import DocumentPermissions from "@/components/Documents/DocumentPermissions";

const page = () => {
  const [activeView, setActiveView] = useState("grid");
  const { viewDocument,setViewDocument } = Store();
  const [activeTab, setActiveTab] = useState("Details");
  const [ documentDetails, setDocumentDetail ] = useState("Details")
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

  const handleCLickNavbar = (NavTab)=>{
    setDocumentDetail(NavTab);
    setActiveTab(NavTab);
  };
  console.log("documentDetails-------->",documentDetails)
  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === dropdownName ? true : false;
      });
      return newState;
    });
  };
  const handleDesignView = (view) => {
    setActiveView(view);
    handleDropdownToggle(null);
  };
  const TileAndContentArray = [
    "Tile",
    "Tile & Content",
    "ASN",
    "Custom fields",
    "Advance Search",
  ];
  const CreatedDocumentArray = [
    { time: "Last 7 days", date: "May 5 2024 - Present" },
    { time: "Last month", date: "May 5 2024 - Present" },
    { time: "Last 3 months", date: "May 5 2024 - Present" },
    { time: "Last year", date: "May 5 2024 - Present" },
  ];
  const SortArray = [
    "ASN",
    "Correspondents",
    "Title",
    "Document Type",
    "Added",
    "Modified",
    "Notes",
    "Owner",
  ];
  const Tagslist = ["H.R", "HR", "Never Opened"];
  const CorrespondentsList = ["admin", "Not assigned"];
  const DocumentTypeList = ["admin", "Not assigned"];
  const StoragePathList = ["admin", "Not assigned"];
  const permissionList = [
    "All",
    "My Documents",
    "Shared with me",
    "Shared by me",
    "Unowned",
  ];
  const documentDetailNavbar = ["Details","Content","Metadata","Notes","Permissions"]
  return (
    <div className="sm:mx-3">
      {viewDocument ? (
        <>
          <div className=" mt-4 rounded-md flex md:flex-row flex-col md:justify-start md:flex-wrap md:gap-2 gap-2 lg:gap-2 flex-nowrap">
            <CustomDropdownButton
              text="1"
              text_1="Page"
              text_2="of 1"
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              text="100%"
              text_1="-"
              text_2="+"
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              text="Delete"
              textIcon={DeleteDocumentIcon}
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              text="Download"
              textIcon={DownloadIcon}
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              textIcon={ActionIcon}
              text="Action"
              right="-43%"
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              isOpen={openDropdown.Added}
              textIcon={CustomFieldsIcon}
              text="Custom Fields"
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              textIcon={ShareLinksIcon}
              list={permissionList}
              text="Share Links"
              handleClickDropdown={handleDropdownToggle}
            />
          </div>
          <div className=" md:mt-4 mt-2 rounded-md flex lg:flex-row h-auto flex-col md:justify-start md:flex-wrap flex-nowrap md:space-x-2 space-x-0 md:space-y-0 space-y-2">
            <div className="lg:w-2/5 w-full h-min space-y-4">
              <div className="flex md:flex-row w-full lg:w-min flex-col justify-start gap-2">
                <div className=" bg-BG_text_button w-full text-black border-[1px] border-borderColorCustomDropdown rounded-md flex cursor-pointer  md:w-min align-middle items-center">
                  <div className="w-full md:w-min text-sm p-2  rounded-s-md">
                    {CrossIcon}
                  </div>
                  <div className="text-sm capitalize md:p-2 p-2 w-full md:w-min text-nowrap m-0 border-x-[1px] border-x-borderColorCustomDropdown" onClick={()=>setViewDocument(!viewDocument)}>
                    {LeftArrowIcon}
                  </div>
                  <div className="selectIcon w-full md:w-min text-sm text-nowrap p-2 rounded-e-md">
                    {RightArrowIcon}
                  </div>
                </div>
                <div className=" bg-BG_text_button text-black border-[1px] border-borderColorCustomDropdown rounded-md flex cursor-pointer w-full md:w-min align-middle items-center">
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
              <div className="w-full">
                <div className="w-full h-min">
                  <nav className="flex justify-between border-b">
                    {documentDetailNavbar.map((navbarItem,index)=>(
                      <p key={index} className={`cursor-pointer pb-1 ${activeTab === navbarItem ? "border-b-2 text-[10px] md:text-base border-BG_Selected_text_button text-BG_Selected_text_button" : "text-[10px] md:text-base"}`} onClick={()=>handleCLickNavbar(navbarItem)}>{navbarItem}</p>
                    ))}
                  </nav>
                </div>
                <div className="w-full h-min mt-3">
                  {documentDetails==="Details" && <DocumentDetails />}
                  {documentDetails==="Content" && <DocumentContent/>}
                  {documentDetails==="Metadata" && <DoocumentMetadata/>}
                  {documentDetails==="Notes" && <DocumentNotes/>}
                  {documentDetails==="Permissions" && <DocumentPermissions/>}
                </div>
              </div>
            </div>
            <div className="lg:flex-1 w-full border-2 h-[70vh]">
              <div>
                <embed
                  src={testPdf}
                  type="application/pdf"
                  width="100%"
                  height="570"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex sm:flex-row flex-col mt-3  md:flex-wrap md:gap-2 gap-2 lg:gap-2 justify-center sm:justify-end md:mr-9 ">
            <CustomDropdownButton
              text="Select"
              textIcon={
                openDropdown.Select
                  ? DocumentSelectWhiteIcon
                  : DocumentSelectIcon
              }
              handleClickDropdown={handleDropdownToggle}
              list={TileAndContentArray}
              isOpen={openDropdown.Select}
            />
            <div className="CustomDropdownButton border-[1px] border-[#3B889F] bg-BG_text_button flex md:justify-center justify-between md:w-min w-full rounded-md align-middle items-center">
              <div
                className={`${
                  activeView === "grid" ? "bg-[#B0CFD8]" : ""
                } rounded-s p-2 icon ps-2`}
                onClick={() => handleDesignView("grid")}
              >
                {DocumentWindowIcon}
              </div>
              <div
                className={`${
                  activeView === "tile" ? "bg-[#B0CFD8]" : ""
                } text p-2 px-2`}
                onClick={() => handleDesignView("tile")}
              >
                {DocumentEqualIcon}
              </div>
              <div
                className={`selectIcon ps-2 ${
                  activeView === "option" ? "bg-[#B0CFD8] " : ""
                } p-2 border-r rounded-r `}
                onClick={() => handleDesignView("option")}
              >
                {DocumentTableList}
              </div>
            </div>
            <CustomDropdownButton
              text="Sort"
              right="-173%"
              list={SortArray}
              isOpen={openDropdown.Sort}
              openDropdown={openDropdown}
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              list=""
              isOpen={openDropdown.View}
              text="View"
              handleClickDropdown={handleDropdownToggle}
            />
          </div>
          <div className="border mt-2 rounded-md  cursor-pointer w-full">
            <div className="bg-BG_text_button w-min ">
              <CustomDropdownButton
                right="-43%"
                text="Tile & Content"
                isOpen={openDropdown["Tile & Content"]}
                list={TileAndContentArray}
                openDropdown={openDropdown}
                handleClickDropdown={handleDropdownToggle}
              />
            </div>
          </div>
          <div className=" mt-3 rounded-md flex md:flex-row flex-col md:justify-start md:flex-wrap flex-nowrap md:gap-2 gap-2">
            <CustomDropdownButton
              text="Tags"
              hasSearch={"Tags"}
              list={Tagslist}
              isOpen={openDropdown.Tags}
              textIcon={openDropdown.Tags ? TagsIcon : DocumentTagsIcon}
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              text="Correspondent"
              hasSearch={"Correspondent"}
              isOpen={openDropdown.Correspondent}
              list={CorrespondentsList}
              textIcon={
                openDropdown.Correspondent
                  ? CorrespondentsIcon
                  : CorrespondentsDocumentBlackIcon
              }
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              isOpen={openDropdown["Document Type"]}
              hasSearch={"Document Type"}
              list={DocumentTypeList}
              text="Document Type"
              textIcon={
                openDropdown["Document Type"]
                  ? DocumentsTypeIcon
                  : DocumentsBlackIcon
              }
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              isOpen={openDropdown["Storage Path"]}
              hasSearch={"Storage Path"}
              list={StoragePathList}
              text="Storage Path"
              textIcon={
                openDropdown["Storage Path"]
                  ? StoragePathIcon
                  : DocumentsStoragePath
              }
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              isOpen={openDropdown.Created}
              hasCalender={"Created"}
              list={CreatedDocumentArray}
              text="Created"
              right="-43%"
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              isOpen={openDropdown.Added}
              hasCalender={"Added"}
              right="100%"
              list={CreatedDocumentArray}
              text="Added"
              handleClickDropdown={handleDropdownToggle}
            />
            <CustomDropdownButton
              isOpen={openDropdown.Permission}
              hasDropdown={"Permission"}
              list={permissionList}
              text="Permission"
              handleClickDropdown={handleDropdownToggle}
            />
          </div>
          {activeView === "grid" ? <GridViews /> : activeView === "tile" ? <TileViews /> : activeView === "option" && <OptionView />}
        </>
      )}
    </div>
  );
};

export default page;
