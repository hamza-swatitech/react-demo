import { DocumentsCards } from "@/constants/Documents";
import React from "react";
import PDFViewer from "../PDFViewer";
import { Store } from "@/contextApi/context";

const TileViews = () => {
  const { setViewDocument } = Store();
  const handleViewDocument = () =>{
    setViewDocument(true);
  }
  return (
    <>
      <div className=" mt-2 min-h-screen">
        <div className="bg-cover w-full flex justify-center items-center">
          <div className="w-full bg-white  bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-full mx-auto rounded-2xl bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg">
              <div className="grid grid-col-1 gap-4 text-center mx-auto">
                {DocumentsCards.map((documentData, index) => (
                  <article
                    key={index}
                    className="flex bg-white mb-2 shadow transition duration-300 group text-start  hover:shadow-2xl rounded-2xl cursor-pointer border"
                  >
                    <div className="w-1/3 h-full">
                      <PDFViewer path={documentData.pdfUrl} />
                    </div>
                    <div className="w-full m-2 flex flex-col justify-between align-bottom">
                      <div>
                        <p className="ms-3 text-xl font-semibold">
                          {documentData.documentName}
                        </p>
                        <p className="ms-3 text-base mx-3">
                          {documentData.textForTileView}
                        </p>
                      </div>
                      <div className="mx-3 flex justify-between my-auto">
                        <div className="flex space-x-2">
                          <p className="p-2 rounded-md bg-BG_text_button text-sm">
                            {documentData.editIcon}
                          </p>
                          <p className="p-2 rounded-md bg-BG_text_button text-sm" onClick={handleViewDocument}>
                            {documentData.viewIcon}
                          </p>
                          <p className="p-2 rounded-md bg-[#233742] text-sm">
                            {documentData.downloadIcon}
                          </p>
                        </div>
                        <div className="calender my-auto">
                          <p className="mx-3 flex text-xs text-[#6E6E6E85] text-left items-center">
                            <span className="">
                              {documentData.calenderIcon}
                            </span>
                            {documentData.Date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TileViews;
