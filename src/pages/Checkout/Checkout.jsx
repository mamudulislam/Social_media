import React from 'react'
import Banner from '../Store/Componentes/Banner'
import Checkoutformbil from './Componentes/Checkoutformbil'

const Checkout = () => {
    return (
        <>

            <div className='my-4 mx-8 mb-5 mt-[36px]'>
                <Banner />
                <p className='mt-[22px] font-Poppins font-normal text-[14px] text-[#AFB0C0]'>YOUR ORDER</p>
                <h1 className='font-Poppins font-medium text-[24px] text-[#24234B]'>
                    Checkout
                </h1>
                <Checkoutformbil />
            </div>
        </>
    )
}

export default Checkout