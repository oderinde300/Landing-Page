import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import { RiSearchFill } from 'react-icons/ri'
import { FaUserAlt } from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

    return (
        <nav className='flex justify-between items-center px-4 h-24 text-textColor' >
            <h1 className='w-full font-[700] text-3xl text-[#3A3A3ACC]'><span className='text-primary'>JPA</span> Furniture</h1>
            <ul className='hidden md:flex font-[700] text-xl w-full '>
                <li className='p-4 text-primary'>Home</li>
                <li className='p-4 flex justify-center items-center'>Product <span className='pl-1'><IoIosArrowDown /></span></li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div className='hidden md:flex justify-end items-center w-full'>
                <div className='p-4'>
                    <RiSearchFill size={20} />
                </div>
                <div className='p-4'>
                    <FaUserAlt size={20} />
                </div>
            </div>
            <div onClick={handleNav} className='block text-textColor md:hidden'>
                {nav ? <AiOutlineClose sixe={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <nav className={nav ? 'fixed top-0 left-0 w-[60%] h-full text-textColor bg-[#F8F5F0] border-r border-r-gray-300 ease-in-out-500 md:hidden z-50' : 'fixed left-[100%]'}>
                <h1 className='w-full m-4 font-[700] text-3xl text-[#3A3A3ACC]'><span className='text-primary'>JPA</span> Furniture</h1>
                <ul>
                    <li className='p-4 text-primary border-b border-b-grey-300'>Home</li>
                    <li className='p-4 border-b border-b-grey-300' >Product</li>
                    <li className='p-4 border-b border-b-grey-300'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </nav>
        </nav >
    )
}

export default NavBar
