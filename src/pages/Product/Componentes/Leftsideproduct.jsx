import React from 'react'

const Leftsideproduct = () => {
    return (
        <>
            <div className="w-64 p-4 bg-white rounded-lg shadow-md">
                <div className="mb-6">
                    <h1 className='mt-[22px] font-Poppins font-bold text-[14px]'>Categories</h1>                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span className="font-Poppins font-medium text-[14px] text-[#AFB0C0] cursor-pointer">All Categories</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">1207</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="font-Poppins font-medium text-[14px] text-[#AFB0C0] cursor-pointer">Psd Templates</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">134</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="font-Poppins font-medium text-[14px] text-[#AFB0C0] cursor-pointer">HTML Templates</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">134</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="font-Poppins font-medium text-[14px] text-[#AFB0C0] cursor-pointer">WP Templates</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">134</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="font-Poppins font-medium text-[14px] text-[#AFB0C0] cursor-pointer">Illustration</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">134</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="font-Poppins font-medium text-[14px] text-[#AFB0C0] cursor-pointer">Logos and badges</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">134</span>
                        </li>
                    </ul>
                </div>
                <div className="mb-6">
                    <h3 className="font-Poppins font-bold text-[14px] mb-3">Price Range</h3>
                    <div className="flex space-x-2 mb-3">
                        <input
                            type="number"
                            placeholder="From"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="number"
                            placeholder="To"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button className="w-full font-Poppins bg-[#23D2E2] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                        Apply Price Filter
                    </button>
                </div>
                <div>
                    <h3 className="font-Poppins font-bold text-[14px] mb-3">Reviews</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                            <span className="text-gray-700  cursor-pointer">All reviews</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">1207</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-[#FCE730] cursor-pointer">★★★★★ 4+</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">1207</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-[#FCE730] cursor-pointer">★★★★★ 4+</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">1207</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-[#FCE730] cursor-pointer">★★★★★ 4+</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">1207</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-[#FCE730] cursor-pointer">★★★★★ 4+</span>
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">1207</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Leftsideproduct