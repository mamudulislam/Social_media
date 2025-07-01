import React from 'react'
import storeshop from "../../../assets/storeshop.png"
const Banner = () => {
    return (
        <>
            <div className='w-[1140px] h-[160px] bg-[#615DFA] flex gap-x-[36px] rounded-[14px]'>
                <img src={storeshop} />
                <div>
                    <h1 className='mt-[47px] font-Poppins font-bold text-[36px] text-[#ffffff]'>MERNIAN Marketplace</h1>
                    <p className='font-Poppins font-normal text-[15px] text-[#ffffff]'>The best place for the community to buy and sell!</p>
                </div>
            </div>
        </>
    )
}

export default Banner