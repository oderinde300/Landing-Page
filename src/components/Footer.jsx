
import React from 'react'

const Footer = () => {
    return (
        <section className='w-full flex flex-col justify-between items-center px-16 bg-[#DEB37C] py-16 text-white'>
            <div className='w-full flex flex-col md:flex-row justify-between items-center border-b border-b-white pb-20'>
                <div className='text-white w-full mb-4 md:w-[500px]'>
                    <h1 className='uppercase text-2xl md:text-3xl font-[700]'>
                        subscribe to get the last news about us
                    </h1>
                    <p className='font-[400] text-lg md:text-xl mt-1'> recommended you to subscribe to our newspaper, enter you email to get our daily update about us</p>
                </div>
                <div className=' bg-white w-full md:w-[608px] flex flex-col sm:flex-row justify-between
                 items-center rounded-lg overflow-hidden'>
                    <input type='text' placeholder='Enter your email addresss' className='p-8 outline-none' />
                    <button className='bg-[#FFAD4C] w-44 h-[76px] rounded-lg m-[6px] text-2xl 
                    font-[700] text-white'>
                        Subscribe</button>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row justify-between items-center mt-8'>
                <div className='w-full'>
                    <h1 className='font-[700] text-xl'>PT. LOREM EPSLUM JAYA</h1>
                    <p className='font-[400] text-base'>© 2020. All rights reserved</p>
                </div>
                <ul className='w-full flex flex-col md:flex-row justify-between items- mt-4 font-[700] text-xl'>
                    <li>About Us</li>
                    <li>Partnership</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </section>
    )
}

export default Footer
