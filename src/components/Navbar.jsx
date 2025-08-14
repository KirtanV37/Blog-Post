import React from 'react'
import { IoLogoDeviantart } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { NavLink } from 'react-router';
const Navbar = () => {

    return (
        <>
            <div className="max-w-full flex gap-4 h-[90px] items-center justify-between">
                <div className="col-span-3 flex items-center gap-4">
                    <NavLink to='/'><IoLogoDeviantart className="text-[#008ECC]" size={24} /></NavLink>
                </div>
                <div className=' flex gap-4 justify-between'>
                    <ul className='flex justify-between gap-4'>
                        <NavLink to='/'> <li>Home</li> </NavLink>
                        <NavLink><li>Blog</li></NavLink>
                        <NavLink
                            to='/create'
                            className='p-0 text-blue-600 inline-flex items-center'
                        >
                            <HiOutlinePencilAlt size={20} />
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar

{ /*<div className='w-full flex'>
            <IoLogoDeviantart size={40} />
            <Input size='md' />
        </div>*/}