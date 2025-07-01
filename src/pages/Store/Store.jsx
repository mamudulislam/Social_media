import React from 'react'
import Banner from './Componentes/Banner'
import StorCard from './Componentes/StorCard'

const Store = () => {
    return (
        <div className='mt-[36px] '>
            <div className='my-4 mx-2 mb-5'>
                <Banner />
                <h1 className='mt-[22px] font-Poppins font-bold text-[14px]'>Categories</h1>
                <div className='w-[1184px] h-[50px] rounded-[7px] bg-[#ffff] mt-[33px] flex items-center justify-around'>
                    <p className='font-Poppins font-medium text-[14px]'>Desktop</p>
                    <p className='font-Poppins font-medium text-[14px]'>Laptop
                    </p>
                    <p className='font-Poppins font-medium text-[14px]'>Component</p>
                    <p className='font-Poppins font-medium text-[14px]'>Monitor</p>
                    <p className='font-Poppins font-medium text-[14px]'>UPS</p>
                    <p className='font-Poppins font-medium text-[14px]'>Tablet</p>
                    <p className='font-Poppins font-medium text-[14px]'>Office Equipment</p>
                    <p className='font-Poppins font-medium text-[14px]'>Camera </p>
                    <p className='font-Poppins font-medium text-[14px]'>Security</p>
                    <p className='font-Poppins font-medium text-[14px]'>Networking</p>
                    <p className='font-Poppins font-medium text-[14px]'>Software</p>
                    <p className='font-Poppins font-medium text-[14px]'>Accessories</p>
                    <p className='font-Poppins font-medium text-[14px]'>Gadget</p>
                    <p className='font-Poppins font-medium text-[14px]'>Gaming</p>
                </div>
                <div className='mt-[20px] flex flex-wrap space-x-[19px] space-y-[21px]'>
                    <StorCard />
                    <StorCard />
                    <StorCard />
                    <StorCard />
                    <StorCard />
                    <StorCard />
                </div>
            </div>
        </div>
    )
}

export default Store