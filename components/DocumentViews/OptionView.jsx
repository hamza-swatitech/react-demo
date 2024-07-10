import { DocumentsCards } from '@/constants/Documents'
import React from 'react'
import PDFViewer from '../PDFViewer'
import { Store } from '@/contextApi/context';

const GridViews = () => {
  const { setViewDocument } = Store();
  const handleViewDocument = () => {
    setViewDocument(true);
  }
  return (
    <>
        <div className=" mt-5 min-h-screen">
        <div className="bg-cover w-full flex justify-center items-center">
          <div className="w-full bg-white  bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-full mx-auto rounded-2xl bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center mx-auto" >
                {DocumentsCards.map((documentData, index) => (
                  <article
                    key={index}
                    className="bg-white mb-2 shadow transition duration-300 group text-start  hover:shadow-2xl rounded-2xl cursor-pointer border"
                  >
                    <div>
                      <PDFViewer path={documentData.pdfUrl} />
                    </div>
                    <div>
                      <p className="ms-3 text-sm">
                        {documentData.documentName}
                      </p>
                      <p className="mx-3 flex text-xs text-[#6E6E6E85] text-left items-center">
                        <span className="me-2">
                          {documentData.calenderIcon}
                        </span>
                        {documentData.Date}
                      </p>
                    </div>
                    <div className="m-3 flex space-x-2">
                      <p className="p-2 rounded-md bg-BG_text_button text-sm" onClick={handleViewDocument}>
                        {documentData.editIcon}
                      </p>
                      <p className="p-2 rounded-md bg-BG_text_button text-sm" onClick={handleViewDocument}>
                        {documentData.viewIcon}
                      </p>
                      <p className="p-2 rounded-md bg-[#233742] text-sm">
                        {documentData.downloadIcon}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GridViews