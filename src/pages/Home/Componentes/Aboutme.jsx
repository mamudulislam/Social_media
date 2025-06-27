import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Aboutme = () => {
    return (
        <>
            <div className='h-[306px] w-[283px] p-5 mt-[33px] shadow-lg rounded-[15px]'>
                <div className='flex gap-x-38 mb-[29px]'>
                    <h2 className='font-Poppins font-bold text-[14px] text-[#3E3F5E]'>
                        About Me
                    </h2>
                    <BsThreeDots />
                </div>
                <p className='font-Poppins font-normal text-[12px] text-[#AFB0C0] w-[230px]'>Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
                <div className='mt-[18px] space-y-[18px]'>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>
                        <span>Joined:</span>
                        <p>22 November 2008</p>
                    </div>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>
                        <span>City:</span>
                        <p>Dhaka</p>
                    </div>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>
                        <span>Age:</span>
                        <p>18 years</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme