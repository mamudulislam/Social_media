import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import FriendData from './FriendData';

const Friendsgroup = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredFriends = FriendData.filter((friend) => {
        const term = searchTerm.toLowerCase();
        return (
            friend.name.toLowerCase().includes(term) ||
            friend.email.toLowerCase().includes(term)
        );
    });

    return (
        <>
            <div className='mx-auto'>
                <p className='mt-[62px] font-Poppins font-normal text-[14px] uppercase text-[#AFB0C0]'>BROWSE ABM mahmud</p>
                <h2 className='mt-1 font-Poppins font-medium text-[24px] text-[#24234B]'>Friends {filteredFriends.length}</h2>
                <div className='mt-[39px] w-[1185px] h-[85px] bg-[#ffffff] flex relative'>
                    <input
                        type="text"
                        placeholder='Search Friends...'
                        className='w-[717px] h-[48px] my-5 mx-5 px-4 border-1 border-gray-400 outline-none rounded-[10px]'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className='w-[84px] h-[48px] bg-[#23D2E2] rounded-[10px] absolute right-95 top-[20px] text-2xl text-[#fff] px-7 py-3'>
                        <FaSearch />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                    {filteredFriends.map((friend) => (
                        <div key={friend.id} className="mt-[31px] max-w-xs rounded-2xl overflow-hidden shadow-lg text-center bg-white">
                            <div className="bg-indigo-800 h-20 rounded-t-2xl relative">
                                <div className="w-20 h-20 rounded-full bg-indigo-400 border-4 border-white absolute left-1/2 transform -translate-x-1/2 top-8"></div>
                            </div>
                            <div className="mt-12">
                                <h3 className="font-Poppins font-medium text-[15px]">{friend.name}</h3>
                                <p className="text-[#AFB0C0] font-Poppins font-normal text-[17px]">{friend.email}</p>

                                <div className="flex justify-center mt-4 space-x-6">
                                    <div>
                                        <p className="font-Poppins font-bold text-[14px]">{friend.friends}</p>
                                        <p className="font-Poppins font-medium text-[12px] text-[#AFB0C0]">Friends</p>
                                    </div>
                                    <span className="text-[#AFB0C0] text-[25px]">|</span>
                                    <div>
                                        <p className="font-Poppins font-bold text-[14px]">{friend.posts}</p>
                                        <p className="font-Poppins font-medium text-[12px] text-[#AFB0C0]">Posts</p>
                                    </div>
                                    <span className="text-[#AFB0C0] text-[25px]">|</span>
                                    <div>
                                        <p className="font-Poppins font-bold text-[14px]">{friend.followers}</p>
                                        <p className="font-Poppins font-medium text-[12px] text-[#AFB0C0]">Followers</p>
                                    </div>
                                </div>

                                <div className="flex justify-center mt-4 space-x-4">
                                    {friend.socialLinks.map((link, index) => (
                                        <div key={index} className="w-8 h-8 rounded-full flex items-center justify-center bg-white">
                                            <img src={link.img} alt="social media icon" className="w-[40px] h-[40px]" />
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex">
                                    <button className="flex-1 py-[8px] px-[31px] bg-violet-500 text-white rounded-bl-[15px] hover:bg-violet-600 transition font-Poppins font-semibold text-[13px]">
                                        Add Friend
                                    </button>
                                    <button className="flex-1 py-[8px] px-[31px] bg-cyan-400 text-white rounded-br-[15px] hover:bg-cyan-500 transition font-Poppins font-semibold text-[13px]">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default Friendsgroup;