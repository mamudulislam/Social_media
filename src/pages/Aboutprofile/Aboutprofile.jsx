import React from 'react'
import Aboutme from '../Home/Componentes/Aboutme'
import facebook from "../../assets/social_media/facebook.png"
import insta from "../../assets/social_media/insta.png"
import twitter from "../../assets/social_media/twitter.png"
import youtube from "../../assets/social_media/youtube.png"
import Personalinfo from './Componentes/Personalinfo'
import Biodata from './Componentes/Biodata'
import Profilebgpic from '../Home/Componentes/profilebgpic/Profilebgpic'
const Aboutprofile = () => {
    return (
        <div className='my-4 mx-8 mb-5'>
            <Profilebgpic />
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