import React from 'react';
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'

const Logo = () => {
    return (
        <div className='my-6 md:my-24 px-8'>
            <p className='text-textColor text-2xl text-center mb-16 font-[700]'>Some of our trusted company</p>
            <div className='flex justify-between px-0 md:px-40'>
                <img className='w-16 h-6 sm:w-18 sm:h-6 md:w-36 md:h-12' src={logo1} alt='logo' />
                <img className='w-16 h-6 sm:w-18 sm:h-6 md:w-36 md:h-12' src={logo2} alt='logo' />
                <img className='w-16 h-6 sm:w-18 sm:h-6 md:w-36 md:h-12' src={logo3} alt='logo' />
                <img className='w-16 h-6 sm:w-18 sm:h-6 md:w-36 md:h-12' src={logo4} alt='logo' />
            </div>
        </div>
    )
}

export default Logo;
