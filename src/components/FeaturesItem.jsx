import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const FeaturesItem = (props) => {
    return (
        <div className='flex-col flex md:flex-row text-textColor mb-10 '>
            < div className='w-52 h-52' >
                <img className='w-52 h-52 object-cover rounded-lg ' src={props.image}
                    alt={props.name} />
            </ div>
            <div className='flex flex-col justify-between items-start h-52 ml-6'>
                <div className='w-80'>
                    <h1 className='font-[700] text-2xl mb-2'>{props.name}</h1>
                    <p className='font-[400] text-base'> {props.description}</p>
                </div>
                <button className='font-[500] text-base flex items-center hover:text-primary'>Read More
                    <span className='text-primary ml-8'><IoIosArrowForward /></span>
                </button>
            </div>
        </div >
    )
}

export default FeaturesItem
