import React from 'react'
import Banner from '../Store/Componentes/Banner'
import Itemscart from './Componente/Itemscart'
import PromoCode from './Componente/PromoCode'
import OrderTotal from './Componente/OrderTotal'
import Container from '../../Golobalcomponentes/Containear'

const Carts = () => {
    return (
        <div>
            <Container>
                <div className='mt-[36px] '>
                    <div className='my-4 mx-2 mb-5'>
                        <Banner />
                        <p className='mt-[22px] font-Poppins font-normal text-[14px] text-[#AFB0C0]'>BROWSE YOUR</p>
                        <h1 className='font-Poppins font-medium text-[24px] text-[#24234B]'>
                            Shopping cart 3
                        </h1>
                        <div className='grid grid-cols-[3fr_2fr_1.5fr_3fr] mt-[13px] mb-2.5 ml-2.5'>
                            <div className='font-Poppins font-medium text-[15px]'>ITEM</div>
                            <div className='font-Poppins font-medium text-[15px]'> QUANTITY</div>
                            <div className='font-Poppins font-medium text-[15px]'>PRICE</div>
                        </div>

                        <div className="flex gap-x-[15px]">

                            <div>
                                <div>
                                    <Itemscart />
                                    <Itemscart />
                                    <Itemscart />
                                    <Itemscart />
                                </div>
                                <PromoCode />
                            </div>
                            <OrderTotal />
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default Carts
