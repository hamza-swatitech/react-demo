"use client"
import { usePathname } from 'next/navigation';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import React, { useEffect, useState } from 'react'


const layout = ({ children }) => {
    const [navbarHeading, setNavbarHeading] = useState('');
    const pathName = usePathname();
    useEffect(() => {
      const pathSegments = pathName.split("/");
      const lastValue = pathSegments
        .filter((segment) => segment !== "")
        .map((segment) => segment)
        .pop();
      const headingsMap = {
          "tags": "Tags",
          "mail": "Mail",
          "settings": "Settings",
          "workflows": "Workflows",
          "dashboard": "Dashboard",
          "documents": "Documents",
          "file-tasks": "File Tasks",
          "storage-paths": "Storage Paths",
          "custom-fields": "Custom Fields",
          "documents-type": "Documents Type",
          "correspondents": "Correspondents",
          "configurations": "Configurations",
          "users-and-groups": "Users And Groups",
      };
      setNavbarHeading(headingsMap[lastValue || ""]);
    }, [pathName]);
    
    const handleNavHeading = (heading) => {
        setNavbarHeading(heading);
    };
    return (
        <div className='flex font-hellix'>
            <div className="sidebar w-[10%] sm:w-1/5 lg:w-1/6 xl:w-1/6 fixed top-0 h-[100vh] md:h-[100vh] left-0  bg-bg_sidebar">
                <Sidebar navbarHeading={navbarHeading} handleNavHeading={handleNavHeading}/>
                </div>
            <div className="Main ml-auto w-[90%] xl:w-5/6 lg:w-5/6 sm:w-4/5">
                <div className="navbar w-full bg-white w-screen-xl border-b shadow-md py-2">
                    <Navbar navbarHeading={navbarHeading} />
                    </div>
                <div className='mx-3 '>{children}</div>
            </div>
        </div>
    )
}

export default layout