import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import IMGgallary from "../../../assets/IMGgallary.png";
import ModalImage from 'react-modal-image';

const PhotoGallery = () => {
    const photos = [
        {
            src: IMGgallary,
            alt: 'Gallery image 1'
        },
        {
            src: IMGgallary,
            alt: 'Gallery image 2'
        },
        {
            src: IMGgallary,
            alt: 'Gallery image 3'
        },
        {
            src: IMGgallary,
            alt: 'Gallery image 4'
        },
        {
            src: IMGgallary,
            alt: 'Gallery image 5'
        },
        {
            src: IMGgallary,
            alt: 'Gallery image 6'
        },
    ];

    const totalPhotos = 37;
    const displayedPhotos = photos.length;
    const remainingPhotos = totalPhotos - displayedPhotos;

    return (
        <div className="h-[306px] w-[283px] p-5 mt-[33px] shadow-lg rounded-[15px] overflow-hidden bg-white">
            <div className='flex justify-between items-center mb-[29px]'>
                <h2 className='font-Poppins font-bold text-[14px] text-[#3E3F5E]'>
                    Photo <span className='text-[#41EFFFCC]'>{totalPhotos}</span>
                </h2>
                <BsThreeDots className="text-[#7E7E7E] cursor-pointer" />
            </div>

            <div className="grid grid-cols-2 gap-3">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-md w-full h-[80px] cursor-pointer"
                    >
                        <ModalImage
                            small={photo.src}
                            large={photo.src}
                            alt={photo.alt}
                            hideDownload={true}
                            hideZoom={true}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {index === displayedPhotos - 1 && remainingPhotos > 0 && (
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-lg pointer-events-none">
                                +{remainingPhotos}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;