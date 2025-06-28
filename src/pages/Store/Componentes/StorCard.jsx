import React from 'react'
import Storedata from './Storedata'

const StorCard = () => {
    return (
        <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg text-center bg-white">
            <div className={`${Storedata.imageColor} h-40 relative rounded-t-2xl`}>
                <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-indigo-500 font-bold text-sm shadow">
                    ${Storedata.price}
                </span>
            </div>

            <div className="p-4">
                <h3 className="text-black font-bold text-[18px] leading-snug">
                    {Storedata.name}
                </h3>

                <div className="flex items-center justify-center mt-2 space-x-1 text-sm text-gray-500">
                    <span className={`w-3 h-3 ${Storedata.tagColor} rounded-full inline-block`}></span>
                    <span>{Storedata.category}</span>
                </div>

                <a
                    href="#"
                    className="block mt-2 text-sm text-indigo-500 underline hover:text-indigo-600 transition"
                >
                    Full Screen View
                </a>
            </div>

            <div className="flex">
                <button className="flex-1 py-3 bg-violet-500 text-white text-sm font-semibold rounded-bl-2xl hover:bg-violet-600 transition">
                    Add To Cart
                </button>
                <button className="flex-1 py-3 bg-cyan-400 text-white text-sm font-semibold rounded-br-2xl hover:bg-cyan-500 transition">
                    Wishlist
                </button>
            </div>
        </div>
    )
}

export default StorCard