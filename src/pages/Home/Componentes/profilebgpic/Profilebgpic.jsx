import React from 'react'
import facebook from "../../../../assets/social_media/facebook.png";
import insta from "../../../../assets/social_media/insta.png";
import twitter from "../../../../assets/social_media/twitter.png";
import youtube from "../../../../assets/social_media/youtube.png";
const Profilebgpic = () => {
    return (
        <div>
            <div className='relative flex justify-center'>
                <div className='w-full max-w-[1275px] h-[300px] bg-[#45437F]'></div>
                <div className='absolute -bottom-[76px]'>
                    <div className='w-[152px] h-[152px] rounded-full border-[11px] border-white flex items-center justify-center bg-white'>
                        <div className='w-[130px] h-[130px] bg-[#615DFA] rounded-full'></div>
                    </div>
                </div>
                <div className='absolute left-1/2 bottom-0 transform -translate-x-[-150px] translate-y-[29px] flex space-x-4'>
                    <button className='py-[15px] px-[52px] bg-[#615DFA] rounded-[7px] text-white font-Poppins text-[14px] font-semibold hover:bg-[#504dc7] transition-colors'>
                        Add Friend
                    </button>
                    <button className='py-[15px] px-[52px] bg-[#23D2E2] rounded-[7px] text-white font-Poppins text-[14px] font-semibold hover:bg-[#1cb8c6] transition-colors'>
                        Send Message
                    </button>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-between items-center mt-20 gap-4'>
                <div className="flex space-x-2.5 items-center">
                    <div>
                        <h2 className="font-Poppins font-bold text-[14px]">930</h2>
                        <p className="font-Poppins font-medium text-[12px] text-[#AFB0C0]">Friends</p>
                    </div>
                    <span className="text-[#AFB0C0] text-[25px]">|</span>
                    <div>
                        <h2 className="font-Poppins font-bold text-[14px]">1200</h2>
                        <p className="font-Poppins font-medium text-[12px] text-[#AFB0C0]">Followers</p>
                    </div>
                    <span className="text-[#AFB0C0] text-[25px]">|</span>
                    <div>
                        <h2 className="font-Poppins font-bold text-[14px]">500</h2>
                        <p className="font-Poppins font-medium text-[12px] text-[#AFB0C0]">Following</p>
                    </div>
                </div>

                <div className='text-center order-first md:order-none'>
                    <h1 className="font-Poppins font-bold text-[16px]">Mamudul Islam</h1>
                    <p className="text-[#AFB0C0] font-Poppins font-medium text-[12px]">www.abm.com</p>
                </div>

                <div className='flex gap-x-4 ml-13'>
                    <div><img src={facebook} alt="facebook" className='w-6 h-6' /></div>
                    <div><img src={insta} alt="instagram" className='w-6 h-6' /></div>
                    <div><img src={twitter} alt="twitter" className='w-6 h-6' /></div>
                    <div><img src={youtube} alt="youtube" className='w-6 h-6' /></div>
                </div>
            </div>
        </div>
    )
}

export default Profilebgpic