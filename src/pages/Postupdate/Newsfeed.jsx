import React from 'react'
import facebook from "../../assets/social_media/facebook.png"
import insta from "../../assets/social_media/insta.png"
import twitter from "../../assets/social_media/twitter.png"
import youtube from "../../assets/social_media/youtube.png"
import Aboutme from '../Home/Componentes/Aboutme'
import PhotoGallery from '../Home/Componentes/PhotoGallery'
import Videofolder from '../Home/Componentes/Videofolder'
import Poststatus from './Componentes/Poststatus'
import Profilebgpic from '../Home/Componentes/profilebgpic/Profilebgpic'
const Newsfeed = () => {
    return (
        <div className='my-4 mx-8 mb-5'>
            <Profilebgpic />
            <div className='grid grid-cols-[30%_70%]'>
                <div>
                    <Aboutme />
                    <PhotoGallery />
                    <Videofolder />
                </div>
                <div>
                    <Poststatus />
                </div>
            </div>
        </div>

    )
}

export default Newsfeed;