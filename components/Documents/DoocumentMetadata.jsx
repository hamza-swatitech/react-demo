import React from "react";

const DoocumentMetadata = () => {
  const MetaDataArray = [
    {
      Heading: "Date Modified",
      description: "Mar 31, 2024",
    },
    {
      Heading: "Date added",
      description: "  Mar 28, 2024",
    },
    {
      Heading: "Media filename",
      description: "0000035.jpg",
    },
    {
      Heading: "Original filename",
      description: " 435210.jpg ",
    },
    {
      Heading: "Original MD5 checksum",
      description: " 984686458582582gg",
    },
    {
      Heading: "Original file size",
      description: "125 KB",
    },
    {
      Heading: "Original mime type",
      description: "img/jpg",
    },
    {
      Heading: "Achieve file size",
      description: "41 KB",
    },
  ];
  return (
    <div>
      <p className="text-md font-bold text-black">MetaData</p>
      <div className="bg-BG_text_button space-y-4 rounded-xl p-4  mt-3">
        {MetaDataArray.map((text, index) => (
          <div className="flex">
              <p key={index} className=" text-sm font-semibold">
                {text.Heading}:
              </p>
              <p className=" text-sm ms-2">
                {text.description}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoocumentMetadata;
