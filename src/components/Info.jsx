import React from 'react'
import { Typography } from '@material-tailwind/react';
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router';
import { HiOutlinePencilAlt } from "react-icons/hi";

const Info = () => {
    return (
        <div className='w-full mb-8 mt-4 flex items-center gap-8'>
            <div>
                <Typography variant="h2" className="text-start font-bold mb-2">Latest Blog Posts</Typography>
                <Typography className="text-start text-gray-600 max-w-2xl mx-auto">
                    Explore our collection of articles covering various topics from technology to lifestyle
                </Typography>
            </div>
            <div className="flex items-center h-[48px] bg-gray-50 rounded-lg px-4">
                <button type='submit' onClick={() => alert('button was clicked')}><CiSearch size={24} className="text-[#008ECC]" /></button>
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 bg-transparent focus:outline-none"
                />
            </div>
            <NavLink to='/create'><button className='flex items-center gap-1 p-3 rounded-lg  text-white bg-blue-300'>Create Post<HiOutlinePencilAlt size={20} color='white' /> </button></NavLink>
        </div>
    )
}

export default Info