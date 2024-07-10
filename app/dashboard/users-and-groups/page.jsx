import React from 'react';
import { usersData } from '../../../constants/users'
const page = () => {
    const handleUserEdit=()=>{
        console.log("Edit User")
    }
    const userHeadings = ["id", "Image", "Name", "e-mail", "status", "role","actions"]
    return (
        <div>
            <table className="w-full text-sm text-left text-black rtl:text-right">
                <thead className="text-xs uppercase  ">
                    <tr>
                        {userHeadings.map((headings, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {headings}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((tableData, index) => (
                        <tr className="border-b last:border-b-0 text-black  italic" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">
                                {tableData.id}
                            </th>
                            <td className="px-6 py-4">
                                <img src={tableData.image} alt="" className='h-10 w-10 rounded-full' />
                            </td>
                            <td className="px-6 py-4">
                                {tableData.name}
                            </td>
                            <td className="px-6 py-4">
                                {tableData.email}
                            </td>
                            <td className="px-6 py-4">
                                {tableData.status}
                            </td>
                            <td className="px-6 py-4">
                                {tableData.role}
                            </td>
                            <td className="px-6 py-4 space-x-3">
                                <button className=' cursor-pointer hover:bg-green-700 rounded-sm p-1.5 hover:text-white' type="button">Edit</button>
                                <button className=' cursor-pointer hover:bg-red-700 p-1.5 rounded-sm hover:text-white' type="button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default page;



