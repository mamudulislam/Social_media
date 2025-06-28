import React from 'react'

const OrderTotal = () => {
    return (
        <div className="w-[288px] h-[480px] bg-white rounded-[20px] p-6 shadow-md">
            <h2 className="text-[#24234B] text-[16px] font-Poppins font-semibold mb-4">Order totals</h2>
            <div className="text-[49px] font-Poppins font-medium mb-6 leading-tight text-center"> <span className='text-[#00D0FF]'>$</span>39.00</div>
            <div className="text-[14px] space-y-2 mb-6">
                <div className="flex justify-between">
                    <span className="text-[#AFB0C0]">Cart(3)</span>
                    <span className="text-[#24234B]">$44.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#AFB0C0]">Code</span>
                    <span className="text-[#00C2C7]">- $15.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-[#AFB0C0]">Total</span>
                    <span className="text-[#00D0FF]">$39.00</span>
                </div>
            </div>
            <div className='space-y-2.5'>
                <button className="w-full py-3 bg-[#2EE0EB] hover:bg-[#25c8d1] transition rounded-xl text-white font-semibold text-[14px] mt-[53px]">
                    Proceed to checkout
                </button>
                <button className="w-full py-3 bg-white border border-[#E2E4EC] rounded-xl text-[#AFB0C0] font-medium text-[14px]">
                    Update cart
                </button>
            </div>

        </div>
    )
}

export default OrderTotal
