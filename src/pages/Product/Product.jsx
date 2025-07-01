import React from 'react'
import Banner from '../Store/Componentes/Banner'
import { FaSearch } from 'react-icons/fa'
import Dropdwanone from './Componentes/Dropdwanone'
import Droptwo from './Componentes/Droptwo'
import Leftsideproduct from './Componentes/Leftsideproduct'
import Rightsideproduct from './Componentes/Rightsideproduct'

const Product = () => {
    return (
        <>
            <div className='mt-[36px] '>
                <div className='my-4 mx-8 mb-5'>
                    <Banner />
                    <p className='mt-[22px] font-Poppins font-normal text-[14px] text-[#AFB0C0]'>BROWSE PRODUTS</p>
                    <h1 className='font-Poppins font-medium text-[24px] text-[#24234B]'>
                        Digital Items
                    </h1>
                    <div className='w-[1140px] h-[103px] bg-[#fff] rounded-[7px] py-[29px] px-[20px] flex gap-x-[13px] mt-[24px]'>
                        <div className='flex gap-[12px]'>
                            <input type="text" placeholder='Search items' className='px-[10px] py-[15px] w-[300px] h-[45px] border-1 border-[#D9D9D9] rounded-[15px] outline-none' />
                            <button className='py-3 px-[21px] bg-[#23D2E2] rounded-[15px]'>
                                <FaSearch color='#fff' />
                            </button>
                        </div>
                        <div className='my-auto'>
                            <Dropdwanone />
                        </div>
                        <div className='my-auto'>
                            <Droptwo />
                        </div>
                        <div>
                            <button className='py-[11px] px-[16px] text-[#FFFFFF] bg-[#615DFA] rounded-[7px] font-Poppins font-medium text-[14px] '>
                                Apply Filters
                            </button>
                        </div>
                    </div>
                    <div className='mt-[20px] grid grid-cols-[1fr_3fr] gap-x-[14px]'>
                        <div>
                            <Leftsideproduct />
                        </div>
                        <div>
                            <Rightsideproduct />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Product