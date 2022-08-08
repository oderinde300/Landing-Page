import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Hero = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div onClick={onClick}
                className='absolute bottom-[-1rem] w-20 h-20 bg-white z-50 rounded-lg left-[-2rem] 
            opacity-70 flex justify-center items-center text-primary'>
                <IoIosArrowBack size={30} />
            </div>
        )
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div onClick={onClick}
                className='absolute bottom-[-1rem] w-20 h-20 bg-white left-20 z-50 rounded-lg 
            opacity-70 flex justify-center items-center text-primary'>
                <IoIosArrowForward size={30} />
            </div>
        )
    };

    const settings = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToshow: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <div className='text-textColor my-4 px-4 relative '>
            <div className='relative h-screen w-full flex '><div
                className='sm:w-0 absolute bg-[#FFECD6] 1xl:w-[800px] h-[550px] rounded-lg 
                left-[25rem] bottom-[-1rem] '> </div>
                <div
                    className='bg-[#F8F8F8] bg-opacity-70 max-w-[645px] max-h-96 
                px-12 rounded-2xl absolute top-20 z-20'>
                    <h1 className='text-primary font-[700] text-2xl sm:text-4xl md:text-6xl w-full my-8'>Help You To Make Modern Furiture</h1>
                    <p className='font-[400] text-xl md:text-2xl mt-6'>We help to create and organize your room to be more cozy, design by professional interior desiggner</p>
                    <button
                        className='bg-primary text-white text-xl py-3 px-6 my-8 rounded-lg'>
                        See Our Product</button>
                </div>
                <div className='max-w-[90%] max-h-96 md:max-w-[890px] md:max-h-[640px] object-contain ml-auto rounded-lg z-10'>
                    <Slider {...settings}>
                        <div>
                            <img className='rounded-lg'
                                src='https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                                alt='furniture'
                            />
                        </div>

                        <div>
                            <img
                                className='rounded-lg'
                                src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                                alt='furniture'
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero;
