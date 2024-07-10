// "use client"
// import { useEffect, useState } from 'react';

const PDFViewer = ({ path }) => {
  // const [pdfSrc, setPdfSrc] = useState('');

  // useEffect(() => {
  //   const fetchPdf = async () => {
  //     try {
  //       const response = await fetch(path);
  //       if (!response.ok) {
  //         throw new Error('Failed to load PDF file');
  //       }
  //       const blob = await response.blob();
  //       setPdfSrc(URL.createObjectURL(blob));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchPdf();

  //   return () => {
  //     URL.revokeObjectURL(pdfSrc);
  //   };
  // }, [path]);

  return (
    <div className="pdf-container" >
      <embed src={path} type="application/pdf" width="100%" height="200px" />
    </div>
  );
};

export default PDFViewer;
