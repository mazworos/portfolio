import React from 'react'
import { IoClose } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {

    const [toggle, setToggle] = useState(false);

    function openMenu() {
        setToggle(true);
    }

    function closeMenu() {
        setToggle(false);
    }
  return (
    <>
        <div className='flex items-center justify-between p-10 lg:flex-row'>
            <div>
                <a href="/" className=' text-white font-mono text-3xl flex items-center tracking-wider'>
                MAZWORO</a>
            </div>
            <div className='space-x-3'>
                <div className='ssm:hidden lg:block space-x-2'>
                <a href="/"className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>Skill</a>
                <a href="/"className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>Project</a>
                <a href="/"className='text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl'>Testimonials</a>

                </div>
                <div className='ssm:block lg:hidden'>
                    {toggle ? (
                        <IoClose onClick={closeMenu} size={30} className='text-white  cursor-pointer '/>
                    ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer '/>) }
                    
                </div>
            </div>
        </div>

        <div className='ssm:block lg:hidden'>
            {toggle ? (
                <div className='flex justify-between ml-10'>
                <ul>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Skill</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Project</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Testimonials</li>
                </ul>
            </div>
            ):(
                <div></div>
            )}
            
        </div>
    </>
  )
}
