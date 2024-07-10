"use client";
import React, { useRef, useState } from "react";
import { CrossIcon, DiceIcon, VectorDown } from "@/constants/svgs";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const TagsModal = ({ isOpen, onClose, onSave }) => {
  const colorInputRef = useRef(null);
  const [formValues, setFormValues] = useState({
    name: "",
    color: "#3769cd",
    inboxTag: false,
    matching: "",
    owner: "",
    viewUser: "",
    viewGroups: "",
    editUser: "",
    editGroups: "",
  });
  const [isPermissionsOpen, setPermissionsOpen] = useState(false);
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
    console.log("formValues ------------>",formValues)
    setFormValues({
      name: "",
      color: "#3769cd",
      inboxTag: false,
      matching: "Automatic",
      owner: "",
      viewUser: "",
      viewGroups: "",
      editUser: "",
      editGroups: "",
    });
  };

  if (!isOpen) return null;
  const handleColorPick = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  const handleDropdownSelect = (name, value) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const matchingAlgorithm = [
    "Automatic",
    "Automatic",
    "Automatic",
  ];
  const togglePermissions = () => {
    setPermissionsOpen(!isPermissionsOpen);
  };
  const list = ["lorem ipsum", "dolor sit", "amet consectetur", "Quis mi"];
  const viewUserList = [
    "lorem ipsum",
    "dolor sit",
    "amet consectetur",
    "Quis mi",
  ];
  const viewUserGroups = [
    "lorem ipsum",
    "dolor sit",
    "amet consectetur",
    "Quis mi",
  ];
  const editUserList = [
    "lorem ipsum",
    "dolor sit",
    "amet consectetur",
    "Quis mi",
  ];
  const editUserGroups = [
    "lorem ipsum",
    "dolor sit",
    "amet consectetur",
    "Quis mi",
  ];
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[100%]">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-2 rounded-t-lg bg-BG_text_button">
            <h3 className="text-md font-medium text-gray-900">
              Create New Tag
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="static-modal"
              onClick={onClose}
            >
              {CrossIcon}
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleFormSubmit} className="p-6 space-y-2">
            <div>
              <label
                htmlFor="name"
                className=" mb-1.5 text-sm font-semibold text-gray-900 "
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="4352150"
                value={formValues.name}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg block w-full p-1.5"
                required
              />
            </div>
            <div>
              <label
                htmlFor="color"
                className=" mb-1.5 text-sm font-semibold text-gray-900 "
              >
                Color
              </label>
              <div className="flex relative items-center border rounded-lg h-8">
                <input
                  type="color"
                  name="color"
                  id="color"
                  ref={colorInputRef}
                  value={formValues.color}
                  onChange={handleInputChange}
                  className="h-10 w-10 bg-blue-800 rounded-s-lg absolute top-[50%] left-[50%]"
                  hidden
                  required
                />
                <div
                  className="w-12 h-full bg-blue-800 rounded-s-lg flex items-center justify-center"
                  style={{ backgroundColor: formValues.color }}
                  onClick={handleColorPick}
                ></div>
                <input
                  type="text"
                  name="color"
                  id="colorHex"
                  value={formValues.color}
                  onChange={handleInputChange}
                  className="bg-gray-50 text-gray-900 text-sm outline-none rounded-e-lg block w-full py-1 px-2 h-full"
                  readOnly
                />
                <span
                  className="border border-s rounded-e-lg py-1 px-2 h-full flex items-center"
                  onClick={handleColorPick}
                >
                  {DiceIcon}
                </span>
              </div>
            </div>
            <div className="flex items-center py-1.5">
              <input
                type="checkbox"
                name="inboxTag"
                id="inboxTag"
                checked={formValues.inboxTag}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              />
              <label
                htmlFor="inboxTag"
                className="ml-2 text-sm font-semibold text-gray-900 "
              >
                Inbox tag
              </label>
            </div>
            <div>
              <label
                htmlFor="Matching Algorithm"
                className=" mb-1.5 text-sm font-semibold text-gray-900 "
              >
                Matching Algorithm
              </label>
              <div className="w-full relative">
                <div className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-md block ps-2 p-1 ">
                  <CustomDropdown
                    list={matchingAlgorithm}
                    setSelectedItem={(value) => handleDropdownSelect('matching', value)}
                    text="Matching Algorithm"
                    isOpen={openDropdown["Matching Algorithm"]}
                    handleClickDropdown={handleDropdownToggle}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={togglePermissions}
                className="flex items-center justify-between w-full text-left text-gray-900 border rounded-t-lg p-1.5"
              >
                <span className=" text-sm font-semibold text-gray-900 ">Edit Permissions</span>
                <span
                  className={`p-1.5 transform transition-transform ${
                    isPermissionsOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {VectorDown}
                </span>
              </button>
              {isPermissionsOpen && (
                <div className=" space-y-3 border rounded-b-lg p-3 bg-[#F5F5F5] border-gray-200">
                  <div className="flex justify-between">
                    <label className="block text-sm font-semibold text-gray-900">
                      Owner:
                    </label>
                    <div className="relative bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-md block ps-2 p-1 ">
                      <CustomDropdown
                      setSelectedItem={(value) => handleDropdownSelect('owner', value)}
                        list={list}
                        text="Admin"
                        isOpen={openDropdown.Admin}
                        handleClickDropdown={handleDropdownToggle}
                      />
                    </div>
                  </div>
                  <p className="text-end text-[10px] text-text_Gray">
                    Objects without an owner can be viewed and edited by all
                    users
                  </p>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900">
                      View:
                    </label>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className=" text-sm font-semibold text-gray-900">
                          User:
                        </label>
                        <div className="relative bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-md block ps-2 p-1">
                          <CustomDropdown
                            list={viewUserList}
                            setSelectedItem={(value) => handleDropdownSelect('viewUser', value)}
                            text="View User"
                            isOpen={openDropdown["View User"]}
                            handleClickDropdown={handleDropdownToggle}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <label className=" text-sm font-semibold text-gray-900">
                          Groups:
                        </label>
                        <div className="relative bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-md block ps-2 p-1 ">
                          <CustomDropdown
                            list={viewUserGroups}
                            setSelectedItem={(value) => handleDropdownSelect('viewGroups', value)}
                            text="View Groups"
                            isOpen={openDropdown["View Groups"]}
                            handleClickDropdown={handleDropdownToggle}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-900">
                      Edit:
                    </label>
                    <div className="space-y-2">
                      <div className="flex justify-between text-center">
                        <label className=" text-sm font-semibold text-gray-900">
                          User:
                        </label>
                        <div className="relative bg-gray-50 border  w-64 border-gray-300 text-gray-900 text-sm rounded-md block ps-2 p-1">
                          <CustomDropdown
                            list={editUserList}
                            setSelectedItem={(value) => handleDropdownSelect('editUser', value)}
                            text="Edit User"
                            isOpen={openDropdown["Edit User"]}
                            handleClickDropdown={handleDropdownToggle}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <label className=" text-sm font-semibold text-gray-900">
                          Groups:
                        </label>
                        <div className="relative bg-gray-50 border w-64 border-gray-300 text-gray-900 text-sm rounded-md block ps-2 p-1 ">
                          <CustomDropdown
                            list={editUserGroups}
                            setSelectedItem={(value) => handleDropdownSelect('editGroups', value)}
                            text="Edit Groups"
                            isOpen={openDropdown["Edit Groups"]}
                            handleClickDropdown={handleDropdownToggle}
                          />
                        </div>
                      </div>
                      <p className="text-end text-[10px] text-text_Gray">
                        Edit permissions also grant viewing permissions
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center justify-end space-x-2 border-gray-200 ">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Save
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none  rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 focus:z-10 "
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

export default TagsModal;
