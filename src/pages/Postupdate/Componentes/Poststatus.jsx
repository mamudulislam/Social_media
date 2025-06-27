import React, { useState } from 'react';
import { FaCamera, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import { MdPhotoSizeSelectActual } from 'react-icons/md';

const Poststatus = () => {
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState([]);
    const [activeTab, setActiveTab] = useState('status'); // 'status' or 'product'

    const handlePost = () => {
        if (postText.trim() !== '') {
            const newPost = {
                text: postText,
                id: Date.now(),
                author: "Mamudul Islam",
                time: "Just now",
                likes: 0,
                comments: 0,
                shares: 0,
                participants: 0
            };
            setPosts([newPost, ...posts]);
            setPostText('');
        }
    };

    const handleDiscard = () => {
        setPostText('');
    };

    return (
        <div className='w-[585px] h-auto mt-[51px]'>
            <div className='grid grid-cols-1'>
                <div className='grid grid-cols-2'>
                    <button
                        onClick={() => setActiveTab('status')}
                        className={`py-[20px] px-[108px] rounded-t-[15px] font-Poppins text-[12px] font-bold ${activeTab === 'status'
                                ? 'bg-[#615DFA] hover:bg-[#8c88ff] text-[#fff]'
                                : 'bg-[#fff] hover:bg-[#a0a0a0] text-[#DEDEDE]'
                            }`}
                    >
                        Status
                    </button>
                    <button
                        onClick={() => setActiveTab('product')}
                        className={`py-[20px] px-[98px] rounded-t-[15px] font-Poppins text-[12px] font-bold ${activeTab === 'product'
                                ? 'bg-[#615DFA] hover:bg-[#8c88ff] text-[#fff]'
                                : 'bg-[#fff] hover:bg-[#a0a0a0] text-[#DEDEDE]'
                            }`}
                    >
                        Product Upload
                    </button>
                </div>

                {activeTab === 'status' ? (
                    <>
                        <div className='border-b-2 text-[#D9D9D9]'></div>
                        <textarea
                            placeholder='Hi, Mamudul Islam, Share your post ...'
                            className='resize-none h-[150px] outline-none p-4 font-Poppins text-sm'
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                        ></textarea>

                        <div className='border-b-2 text-[#D9D9D9]'></div>
                        <div className='grid grid-cols-2 gap-x-[69px]'>
                            <div className='flex mx-auto gap-x-5 mt-[26px] text-[26px] text-[#3E3F5E]'>
                                <FaCamera />
                                <MdPhotoSizeSelectActual />
                            </div>
                            <div className='mt-[26px] flex gap-x-[20px]'>
                                <button
                                    onClick={handleDiscard}
                                    className='px-[37px] py-[13px] bg-[#181828] rounded-[6px] text-[#FFFFFF] font-Poppins font-bold text-[12px]'
                                >
                                    Discard
                                </button>
                                <button
                                    onClick={handlePost}
                                    className='px-[37px] py-[13px] bg-[#615DFA] rounded-[6px] text-[#FFFFFF] font-Poppins font-bold text-[12px]'
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                        <div className='mt-6'>
                            {posts.map((post) => (
                                <div key={post.id} className='bg-white p-4 mt-4 rounded-[10px] shadow-sm font-Poppins'>
                                    <div className='flex items-center mb-3'>
                                        <div className='w-10 h-10 rounded-full bg-gray-300 mr-3'></div>
                                        <div>
                                            <p className='font-bold text-sm'>{post.author}</p>
                                            <p className='text-xs text-gray-500'>{post.time}</p>
                                        </div>
                                    </div>
                                    <p className='text-sm text-[#333] mb-4'>{post.text}</p>
                                    <div className='border-b border-[#D9D9D9] my-2'></div>
                                    <div className='flex justify-between text-xs text-gray-500 mb-3'>
                                        <span>{post.participants} Participants</span>
                                        <span>{post.comments} Comments</span>
                                        <span>{post.shares} Shares</span>
                                    </div>
                                    <div className='flex justify-between border-t border-[#D9D9D9] pt-3'>
                                        <button className='flex items-center text-gray-500 text-sm'>
                                            <FaThumbsUp className='mr-2' /> Like
                                        </button>
                                        <button className='flex items-center text-gray-500 text-sm'>
                                            <FaComment className='mr-2' /> Comment
                                        </button>
                                        <button className='flex items-center text-gray-500 text-sm'>
                                            <FaShare className='mr-2' /> Share
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className='bg-white p-4'>
                        <div className='grid grid-cols-2 gap-4 mb-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Product name</label>
                                <input
                                    type="text"
                                    className='w-full p-2 border border-gray-300 rounded-md'
                                    placeholder='Enter product name'
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Product Category</label>
                                <input
                                    type="text"
                                    className='w-full p-2 border border-gray-300 rounded-md'
                                    placeholder='Select category'
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-3 gap-4 mb-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Product Size</label>
                                <input
                                    type="text"
                                    className='w-full p-2 border border-gray-300 rounded-md'
                                    placeholder='Size'
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Price</label>
                                <input
                                    type="text"
                                    className='w-full p-2 border border-gray-300 rounded-md'
                                    placeholder='$12'
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Product Color</label>
                                <input
                                    type="text"
                                    className='w-full p-2 border border-gray-300 rounded-md'
                                    placeholder='Color'
                                />
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Quantity</label>
                            <input
                                type="number"
                                className='w-full p-2 border border-gray-300 rounded-md'
                                placeholder='10'
                            />
                        </div>

                        <div className='grid grid-cols-2 gap-4 mb-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Image Preview</label>
                                <div className='w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center'>
                                    <FaCamera className='text-gray-400 text-2xl' />
                                </div>
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-1'>Image Thumbnail</label>
                                <div className='w-full h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center'>
                                    <MdPhotoSizeSelectActual className='text-gray-400 text-2xl' />
                                </div>
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>Product Description</label>
                            <textarea
                                className='w-full p-2 border border-gray-300 rounded-md h-24'
                                placeholder='Enter product description'
                            ></textarea>
                        </div>

                        <div className='flex justify-end gap-4'>
                            <button
                                onClick={handleDiscard}
                                className='px-6 py-2 bg-gray-200 rounded-md text-gray-700 font-Poppins font-bold text-sm'
                            >
                                Discard
                            </button>
                            <button
                                className='px-6 py-2 bg-[#615DFA] rounded-md text-white font-Poppins font-bold text-sm'
                            >
                                Upload Product
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Poststatus;