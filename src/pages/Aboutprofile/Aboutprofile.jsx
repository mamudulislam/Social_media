import React from 'react'
import Aboutme from '../Home/Componentes/Aboutme'
import facebook from "../../assets/social_media/facebook.png"
import insta from "../../assets/social_media/insta.png"
import twitter from "../../assets/social_media/twitter.png"
import youtube from "../../assets/social_media/youtube.png"
import Personalinfo from './Componentes/Personalinfo'
import Biodata from './Componentes/Biodata'
const Aboutprofile = () => {
    return (
        <div className='my-4 mx-8 mb-5'>
            <div className='w-[1285px] h-[300px] bg-[#45437F] relative'></div>
            <div className='w-[152px] h-[152px] rounded-full border-[11px] border-[#fff] flex items-center justify-center top-[342px] left-[862px] absolute'>
                <div className='w-[130px] h-[130px] bg-[#615DFA] rounded-full'></div>
            </div>
            <div className='flex space-x-4 absolute left-[1110px] top-[381px]'>
                <button className='py-[15px] px-[52px] bg-[#615DFA] rounded-[7px] text-[#fff] font-Poppins text-[14px] font-semibold'>
                    Add Friend
                </button>
                <button className='py-[15px] px-[52px] bg-[#23D2E2] rounded-[7px] text-[#fff] font-Poppins text-[14px] font-semibold'>
                    Send Message
                </button>
            </div>

            <div className='flex justify-between mt-22 mx-0 items-center '>
                <div className="flex space-x-2.5 items-center justify-center">
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

                <div className='text-center'>
                    <h1 className="font-Poppins font-bold text-[16px]">Mamudul Islam</h1>
                    <p className="text-[#AFB0C0] font-Poppins font-medium text-[12px]">www.abm.com</p>
                </div>

                <div className='flex gap-x-4 justify-center mr-[32px]'>
                    <div><img src={facebook} alt="facebook icon" /></div>
                    <div><img src={insta} alt="instagram icon" /></div>
                    <div><img src={twitter} alt="twitter icon" /></div>
                    <div><img src={youtube} alt="youtube icon" /></div>
                </div>
            </div>
            <div className='grid grid-cols-[30%_70%]'>
                <div>
                    <Aboutme />
                    <Personalinfo />
                </div>
                <div>
                    <Biodata />
                </div>
            </div>
        </div>
    )
}

export default Aboutprofile