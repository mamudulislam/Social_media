import React from 'react'
import { MdDelete } from 'react-icons/md'

const Itemscart = () => {
    return (
        <div>
            <div className="w-[1000px] h-[101px] bg-white rounded-[15px] flex items-center justify-between px-6 shadow-sm mb-4">
                <div className="flex items-center gap-4">
                    <div className="w-[94px] h-[60px] rounded-[15px] bg-[#615DFA]"></div>
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-medium text-[#24234B]">Twitch stream ui pack</p>
                        <p className="text-sm font-bold text-[#24234B]">Stream packs</p>
                        <p className="text-sm text-[#AFB0C0]">ABM shawon</p>
                    </div>
                </div>
                <div className="w-[120px]">
                    <select className="border border-[#E2E4EC] rounded-xl py-2 px-3 text-sm w-full">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="text-[#00D0FF] font-medium text-[16px]">$12.00</div>
                <button className="text-white text-[18px] w-7 h-7 bg-[#EA5050] px-1.5 rounded-full">
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}

export default Itemscart