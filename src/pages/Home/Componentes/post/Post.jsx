import React, { useState } from 'react';
import { FaThumbsUp, FaHeart, FaLaugh, FaSurprise, FaSadTear, FaAngry, FaRegComment, FaRegShareSquare } from 'react-icons/fa';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import postData from './postdata';

const Post = () => {
    const [posts, setPosts] = useState(postData);
    const [showReactions, setShowReactions] = useState(null);

    const reactions = [
        { type: 'like', icon: "👍" },
        { type: 'love', icon: "❤️" },
        { type: 'haha', icon: "😂" },
        { type: 'wow', icon: "😯" },
        { type: 'sad', icon: "😢" },
        { type: 'angry', icon: "😡" }
    ];

    const handleReaction = (postId, reactionType) => {
        setPosts(posts.map(post => post.id === postId ? {
            ...post,
            reaction: post.reaction === reactionType ? null : reactionType,
            stats: {
                ...post.stats,
                likes: post.reaction === reactionType ? post.stats.likes - 1 :
                    (post.reaction ? post.stats.likes : post.stats.likes + 1)
            }
        } : post));
        setShowReactions(null);
    };

    return (
        <div className="space-y-4 mt-5" >
            {posts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow p-6 mx-43">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full mr-3" />
                            <div>
                                <h3 className="font-Poppins font-bold text-[14px]">{post.author}</h3>
                                <p className="font-Poppins font-medium text-[12px] text-[#AFB0C0]">{post.timePosted}</p>
                            </div>
                        </div>
                        <HiOutlineDotsHorizontal className="text-gray-500" />
                    </div>

                    <p className="mb-3 font-Poppins font-normal text-[12px] ">{post.content}</p>

                    <div className="flex justify-between text-xs text-gray-500 border-t border-b py-2 my-2">
                        <div className="flex items-center">
                            {post.reaction && reactions.find(r => r.type === post.reaction)?.icon}
                            <span className="ml-1">{post.stats.likes}</span>
                        </div>
                        <div className="flex space-x-4">
                            <span>{post.stats.comments} comments</span>
                            <span>{post.stats.shares} shares</span>
                        </div>
                    </div>

                    <div className="flex justify-between text-gray-500 text-sm">
                        <div className="flex-1 relative"
                            onMouseEnter={() => setShowReactions(post.id)}
                            onMouseLeave={() => setShowReactions(null)}>
                            <button className={`w-full py-2 rounded flex items-center justify-center ${post.reaction ? 'text-blue-500' : ''}`}
                                onClick={() => handleReaction(post.id, 'like')}>
                                {post.reaction ? reactions.find(r => r.type === post.reaction)?.icon : <FaThumbsUp />}
                                <span className="ml-1">{post.reaction || 'Like'}</span>
                            </button>

                            {showReactions === post.id && (
                                <div className="absolute bottom-full left-0 mb-2 bg-white shadow-lg rounded-full p-1 flex">
                                    {reactions.map(reaction => (
                                        <button key={reaction.type} className="p-2 hover:scale-125 transition-transform"
                                            onClick={() => handleReaction(post.id, reaction.type)}>
                                            {reaction.icon}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className="flex-1 py-2 rounded flex items-center justify-center hover:bg-gray-100">
                            <FaRegComment className="mr-1" /> Comment
                        </button>

                        <button className="flex-1 py-2 rounded flex items-center justify-center hover:bg-gray-100">
                            <FaRegShareSquare className="mr-1" /> Share
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Post;