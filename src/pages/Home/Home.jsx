import React from 'react';
import Aboutme from './Componentes/Aboutme';
import PhotoGallery from './Componentes/PhotoGallery';
import Videofolder from './Componentes/Videofolder';
import Post from './Componentes/post/Post';
import Profilebgpic from './Componentes/profilebgpic/Profilebgpic';

const Home = () => {
    return (
        <div className='my-4 mx-8 mb-5'>
            <Profilebgpic />
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