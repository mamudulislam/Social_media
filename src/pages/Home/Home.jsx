import React from 'react';
import facebook from "../../assets/social_media/facebook.png";
import insta from "../../assets/social_media/insta.png";
import twitter from "../../assets/social_media/twitter.png";
import youtube from "../../assets/social_media/youtube.png";
import Aboutme from './Componentes/Aboutme';
import PhotoGallery from './Componentes/PhotoGallery';
import Videofolder from './Componentes/Videofolder';
import Post from './Componentes/post/Post';

const Home = () => {
    return (
        <div className='my-4 mx-8 mb-5'>
            {/* Banner with centered profile circle */}
            <div className='relative flex justify-center'>
                <div className='w-full max-w-[1125px] h-[300px] bg-[#45437F]'></div>

                {/* Centered Profile Circle */}
                <div className='absolute -bottom-[76px]'>
                    <div className='w-[152px] h-[152px] rounded-full border-[11px] border-white flex items-center justify-center bg-white'>
                        <div className='w-[130px] h-[130px] bg-[#615DFA] rounded-full'></div>
                    </div>
                </div>
            </div>
            {/* Action buttons - centered below profile circle */}
            <div className='flex justify-center space-x-4 absolute  -bottom-[76px] right-23'>
                <button className='py-[15px] px-[52px] bg-[#615DFA] rounded-[7px] text-white font-Poppins text-[14px] font-semibold hover:bg-[#504dc7] transition-colors'>
                    Add Friend
                </button>
                <button className='py-[15px] px-[52px] bg-[#23D2E2] rounded-[7px] text-white font-Poppins text-[14px] font-semibold hover:bg-[#1cb8c6] transition-colors'>
                    Send Message
                </button>
            </div>
            {/* Profile stats and social links */}
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

            {/* Main content grid */}
            <div className='grid grid-cols-1 md:grid-cols-[30%_70%] gap-8 mt-8'>
                <div className='space-y-8'>
                    <Aboutme />
                    <PhotoGallery />
                    <Videofolder />
                </div>
                <div>
                    <Post />
                </div>
            </div>
        </div >
    );
};

export default Home;