"use client"
import React from 'react'
import { pagesNavbar, analyticsNavbar, userNavbar } from "../../constants/sidebar"
import Link from 'next/link'
import { IdocsSidebarIcon, IdocsSidebarsmallIcon, rightAngleIcon } from '../../constants/svgs'
import { usePathname } from 'next/navigation'

const Sidebar = ( props) => {
    const { handleNavHeading, navbarHeading } = props;
    const allNavbars = [
        { category: "Pages", items: pagesNavbar },
        { category: "Analytics", items: analyticsNavbar },
        { category: "User", items: userNavbar }
    ];
    return (
        <div className='flex flex-col align-middle sm:p-2 p-0 items-center justify-center rounded w-full'>
            <div className="flex sm:my-4 space-x-2 lg:w-full ">
                <div className='text-sm hidden sm:block mx-auto'>
                    <Link href={"/dashboard"}>{IdocsSidebarIcon}</Link>
                </div>
                <div className='text-sm block sm:hidden'>
                    <Link href={"/dashboard"}>{IdocsSidebarsmallIcon}</Link>
                </div>
            </div>
            <div className=' sm:space-y-0 flex flex-col align-middle sm:items-start items-center min-[1441px]:space-y-6 justify-center'>
                {allNavbars.map((category, index) => (
                    <div className='border-t-[#65737B] border-t min-[1441px]:space-y-6 min-[1441px]:pt-4' key={index}>
                        {category.items.map((page, pageIndex) => (
                            <div key={`${index}-${pageIndex}`} className={`${page.label === navbarHeading && "bg-hoverBgSidebar"} hover:bg-hoverBgSidebar sm:w-32 md:w-36 lg:w-40 xl:w-48 min-[1441px]:w-60 rounded my-2 space-y-0 sm:space-y-3  `} onClick={() => handleNavHeading(page.label)}>
                                <Link href={page.link}>
                                    <div className="text-center sm:mx-1 md:mx-2 space-y-2">
                                        <div className="w-full text-center text-white flex align-middle justify-between items-center py-1">
                                            <div className="flex justify-start items-start text-start space-x-0 sm:space-x-2">
                                                <span className="p-0 m-0 my-auto">{page?.icon}</span>
                                                <p className="p-0 m-0 my-auto hidden sm:block sm:text-[10px] ">{page?.label}</p>
                                            </div>
                                            <span className='hidden md:flex'>{rightAngleIcon}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar