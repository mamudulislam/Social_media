import React from 'react'

const Checkoutformbil = () => {
    return (
        <>
            <div className='grid grid-cols-[1fr_1fr] gap-x-[15px] mt-[25px]'>
                <div className='w-[784px] h-[561px] bg-[#FFFFFF] p-[32px] rounded-[15px]'>
                    <h2 className='font-Poppins font-medium text-[18px]'>Billing Details</h2>
                    <div className='mt-[32px]'>
                        <div className='grid grid-cols-2 gap-x-3 gap-y-[22px]'>
                            <div>
                                <input type="text" placeholder="First name" className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]' />
                            </div>
                            <div>
                                <input type="text" placeholder="Last name" className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]' />
                            </div>

                            <div>
                                <input type="email" placeholder="Email" className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]' />
                            </div>
                            <div>
                                <input type="number" placeholder="Phone number" className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]' />
                            </div>
                        </div>

                        <div className='mt-[22px]'>
                            <input type="text" placeholder="address" className='w-full h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]' />
                        </div>

                        <div className='grid grid-cols-2 gap-x-3 gap-y-[22px] mt-[22px]'>
                            <div>
                                <input type="text" placeholder="New York" className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]' />
                            </div>
                            <div>
                                <input type="number" placeholder="ZIP Code" className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]' />
                            </div>
                        </div>
                        <div className='mt-[22px]'>
                            <textarea type="text" placeholder="Write any additional details here..." className='w-[720px] h-[160px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px] resize-none' />
                        </div>
                    </div>
                </div>
                <div className='w-[384px] h-[743px] bg-[#fff] p-[27px]'>
                    <h2 className='font-Poppins font-medium text-[17px] text-[#181828]'>Order Summery</h2>
                    <div className='mt-[31px] space-y-5'>
                        <div className='flex gap-x-[124px]'>
                            <p className='font-Poppins font-medium text-[14px] text-[#45437F] w-[156px]'>Twitch stream ui pack</p>
                            <p className='font-Poppins font-medium text-[12px]'><span className='text-[#23D2E2]'>$</span>44.00</p>
                        </div>
                        <div className='flex gap-x-[124px]'>
                            <p className='font-Poppins font-medium text-[14px] text-[#45437F] w-[156px]'>Twitch stream ui pack</p>
                            <p className='font-Poppins font-medium text-[12px]'><span className='text-[#23D2E2]'>$</span>44.00</p>
                        </div>
                        <div className='flex gap-x-[124px]'>
                            <p className='font-Poppins font-medium text-[14px] text-[#45437F] w-[156px]'>Twitch stream ui pack</p>
                            <p className='font-Poppins font-medium text-[12px]'><span className='text-[#23D2E2]'>$</span>44.00</p>
                        </div>
                        <div className='flex gap-x-[124px]'>
                            <p className='font-Poppins font-medium text-[14px] text-[#45437F] w-[156px]'>Twitch stream ui pack</p>
                            <p className='font-Poppins font-medium text-[12px]'><span className='text-[#23D2E2]'>$</span>44.00</p>
                        </div>
                    </div>
                    <div className='h-[1px] w-[329px] bg-[#AFB0C0] mt-[33px]'></div>
                </div>
            </div >

        </>
    )
}

export default Checkoutformbil