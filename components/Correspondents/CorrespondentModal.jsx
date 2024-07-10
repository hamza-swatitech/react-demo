"use client"
import React, { useEffect, useState } from 'react';
import { CrossIcon } from '@/constants/svgs';
import CustomDropdown from '../CustomDropdown/CustomDropdown';

const CorrespondentModal = ({ isOpen, onClose, onSave }) => {
  const [selectedItem, setSelectedItem] = useState("");
  const [formValues, setFormValues] = useState({
    name: '',
    matching:selectedItem,
    document: '0',
    last_used: '',
  });


  useEffect(() => {
    setFormValues((prevState) => ({
      ...prevState,
      matching: selectedItem,
    }));
  }, [selectedItem]);

  const [openDropdown, setOpenDropdown] = useState({
    Admin: false,
    Correspondent: false,
    "View User": false,
    "View Groups": false,
    "Matching Algorithm": false,
    "Edit Groups": false,
    "Edit User": false,
  });

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === dropdownName ? true : false;
      });
      return newState;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 console.log("selectedItem------->",selectedItem)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
    setFormValues({
      name: '',
      matching: 'Automatic',
      document: '0',
      last_used: '',
    });
  };

  if (!isOpen) return null;

  const matchingAlgorithm = [
    "Automatic",
    "Automatic",
    "Automatic",
  ];

  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 flex z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative p-4 w-full max-w-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-2 md:p-5 border-b rounded-t-xl bg-BG_text_button">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Create New Correspondent
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-5 ms-auto inline-flex justify-center items-center"
              data-modal-hide="static-modal"
              onClick={onClose}
            >
              {CrossIcon}
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleFormSubmit} className="p-4 md:p-5 space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-1"
                required
              />
            </div>
            <div>
              <label htmlFor="matching" className="block mb-2 text-sm font-medium text-gray-900 ">
                Matching Algorithm
              </label>
              <div className="w-full relative">
                <div className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-md block ps-2 p-1 ">
                  <CustomDropdown
                    list={matchingAlgorithm}
                    setSelectedItem={setSelectedItem}
                    // setSelectedItem={(item) => handleDropdownItemSelect('matching', item)}
                    // selectedItem={formValues.matching}
                    text="Matching Algorithm"
                    isOpen={openDropdown["Matching Algorithm"]}
                    handleClickDropdown={handleDropdownToggle}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="last_used" className="block mb-2 text-sm font-medium text-gray-900 ">
                Last Used
              </label>
              <input
                type="text"
                name="last_used"
                id="last_used"
                value={formValues.last_used}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-1 "
                required
              />
            </div>
            <div className="flex items-center justify-end p-4 md:p-5 border-gray-200 rounded-b">
              <button
                type="submit"
                className="text-white bg-[#233742] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-LightTextColor focus:outline-none bg-[#E1E1E1] rounded-lg border "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CorrespondentModal;
