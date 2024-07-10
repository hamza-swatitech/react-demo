import React from "react";

const DocumentNotes = () => {
  return (
    <div className="w-full">
      <p className="text-md font-bold text-black">Notes</p>
      <div>
        <p className="mt-3">Title</p>
        <textarea
          className="border border-[#E1E1E1] w-full h-28 p-2 outline-none"
          name=""
          id=""
          placeholder="Enter note"
        ></textarea>
      </div>
    </div>
  );
};

export default DocumentNotes;
