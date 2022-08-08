import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { FaCartPlus } from 'react-icons/fa'
import img1 from '../assets/products/img1.png'
import img2 from '../assets/products/img2.png'
import img3 from '../assets/products/img3.png'
import img4 from '../assets/products/img4.png'



const Products = () => {
    return (
        <section className='w-full px-12 text-textColor mb-1'>
            <div className='w-full flex justify-between items-center'>
                <p className='font-[700] text-3xl'>Products</p>
                <button className='flex justify-center items-center font-[400] text-base hover:text-primary'>
                    See All <span className='text-primary ml-8'><IoIosArrowForward /></span>
                </button>
            </div>
            <div className='w-full md:grid md:grid-cols-2 xl:grid-cols-4 gap-8 my-24'>
                <section className='bg-[#FFECD6] w-[312px] h-[400px] rounded-lg py-8 px-6 relative mb-1' >
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <p className='font-[400] text-sm text-primary '>Sofa</p>
                            <h1 className='font-[700] text-xl'>Glossy Cube</h1>
                        </div>
                        <div className='text-primary'>
                            <FaCartPlus />
                        </div>
                    </div>
                    <div>
                        <img src={img1} alt='furniture' className='absolute right-0' />
                    </div >
                    <p className='bg-white opacity-70 w-28 p-3 text-center rounded-[32px] absolute bottom-[2rem]'>$ 400.00</p>
                </section >

                <section className='bg-[#FFECD6] w-[312px] h-[400px] rounded-lg py-8 px-6 relative mb-1' >
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <p className='font-[400] text-sm text-primary '>Light</p>
                            <h1 className='font-[700] text-xl'>Floor MonoLamp</h1>
                        </div>
                        <div className='text-primary'>
                            <FaCartPlus />
                        </div>
                    </div>
                    <div>
                        <img src={img4} alt='furniture' className='absolute right-0 bottom-2' />
                    </div >
                    <p className='bg-white opacity-70 w-28 p-3 text-center rounded-[32px] absolute bottom-[2rem]'>$ 400.00</p>
                </section >

                <section className='bg-[#FFECD6] w-[312px] h-[400px] rounded-lg py-8 px-6 relative mb-1' >
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <p className='font-[400] text-sm text-primary '>Chair</p>
                            <h1 className='font-[700] text-xl'>Vintage Chair</h1>
                        </div>
                        <div className='text-primary'>
                            <FaCartPlus />
                        </div>
                    </div>
                    <div>
                        <img src={img3} alt='furniture' className='absolute right-0' />
                    </div >
                    <p className='bg-white opacity-70 w-28 p-3 text-center rounded-[32px] absolute bottom-[2rem]'>$ 400.00</p>
                </section >

                <section className='bg-[#FFECD6] w-[312px] h-[400px] rounded-lg py-8 px-6 relative' >
                    <div className='w-full flex justify-between items-center'>
                        <div>
                            <p className='font-[400] text-sm text-primary'>Bed</p>
                            <h1 className='font-[700] text-xl'>Comfort Ling Bed</h1>
                        </div>
                        <div className='text-primary'>
                            <FaCartPlus />
                        </div>
                    </div>
                    <div>
                        <img src={img2} alt='furniture' className='absolute right-0 bottom-2' />
                    </div >
                    <p className='bg-white opacity-70 w-28 p-3 text-center rounded-[32px] absolute bottom-[2rem]'>$ 400.00</p>
                </section >
            </div>
        </section>

    )
}

export default Products
