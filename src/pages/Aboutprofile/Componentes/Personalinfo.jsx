import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Personalinfo = () => {
    return (
        <>
            <div className='h-[306px] w-[283px] p-5 mt-[33px] shadow-lg rounded-[15px]'>
                <div className='flex gap-x-38 mb-[29px]'>
                    <h2 className='font-Poppins font-bold text-[14px] text-[#3E3F5E]'>
                        Personal Info
                    </h2>
                    <BsThreeDots />
                </div>
                <div className='mt-[18px] space-y-[18px]'>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>
                        <span>Email:</span>
                        <p>mamudulislam@gmail.com</p>
                    </div>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>
                        <span>Birthday:</span>
                        <p>28 April 1993</p>
                    </div>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>
                        <span>Occupation:</span>
                        <p> MernStack Developer</p>
                    </div>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>
                        <span>Status:</span>
                        <p>unmarried</p>
                    </div>
                    <div className='flex gap-x-3 font-Poppins font-bold text-[12px] text-[#AFB0C0]'>           <span>Birthplace:</span>
                        <p> Narayanganj</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Personalinfo