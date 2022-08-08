import React from 'react'
import Slider from 'react-slick';
import { data1 } from '../store/data1';
import FeaturesItem from './FeaturesItem';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Features = () => {
    const NextArrow = ({ onClick }) => {
        return (
            <div onClick={onClick}
                className='absolute bottom-[-1rem] w-20 h-20 bg-white z-50 rounded-lg right-[7rem] 
            opacity-70 flex justify-center items-center text-primary'>
                <IoIosArrowBack size={30} />
            </div>
        )
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div onClick={onClick}
                className='absolute bottom-[-1rem] w-20 h-20 bg-white right-[1rem] z-50 rounded-lg 
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

    const featuresItem = data1.map(data => {
        return <FeaturesItem
            key={data.id}
            name={data.name}
            image={data.image}
            description={data.description}
        />
    })

    return (
        <section className='lg:flex gap-20 px-12 relative'>
            <div>
                <p className='text-textColor font-[700] text-2xl md:text-3xl mb-8 w-[95%] md:w-[429px]'>
                    Some of the interiors that we provide for you</p>
                <div
                    className='sm:w-0 absolute bg-[#FFECD6] md:w-[611px] h-[450px] top-[10rem] rounded-lg 
                left-[5rem] '> </div>
                <div className='max-w-[100%] h-96 md:w-[625px] md:h-[532px] object-cover rounded-lg z-10'>
                    <Slider {...settings}>
                        <div>
                            <img className='rounded-lg h-full'
                                src='https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80'
                                alt='furniture'
                            />
                        </div>
                        <div>
                            <img
                                className='rounded-lg h-full'
                                src='https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80image.png'
                                alt='furniture'
                            />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='flex flex-col'>
                {featuresItem}
            </div>
        </section>
    )
}

export default Features;
