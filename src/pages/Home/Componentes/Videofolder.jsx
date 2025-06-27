import React from 'react';
import videoplayback1 from "../../../assets/video/videoplayback1.mp4";
import videoplayback2 from "../../../assets/video/videoplayback2.mp4";
import videoplayback3 from "../../../assets/video/videoplayback3.mp4";

const Videofolder = () => {
    const videos = [
        { src: videoplayback1 },
        { src: videoplayback2 },
        { src: videoplayback3 },
    ];

    return (
        <div className="h-auto w-[283px] p-5 mt-[33px] shadow-lg rounded-[15px] overflow-hidden bg-white">
            <div className="flex justify-between items-center mb-[20px]">
                <h2 className="font-Poppins font-bold text-[14px] text-[#3E3F5E]">
                    Video <span className="text-[#41EFFFCC]">{videos.length}</span>
                </h2>
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    className="text-[#7E7E7E] cursor-pointer"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
                </svg>
            </div>

            <div className="space-y-3">
                {videos.map((video, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-md w-full h-[100px]"
                    >
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        >
                            <source src={video.src} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videofolder;