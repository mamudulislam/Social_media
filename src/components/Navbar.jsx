import { FaShoppingCart, FaEnvelope, FaBell } from 'react-icons/fa';
import { FiMoreHorizontal, FiSearch, FiSettings } from 'react-icons/fi';
import Container from '../Golobalcomponentes/Containear';
import logo from "../../src/assets/Logo/Logo.png"
const Navbar = () => {
    return (
        <nav className="bg-[#615DFA] py-4">
            <Container>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-4">
                        <div className="text-2xl font-bold text-white">
                            <img src={logo} alt="Logo" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-12 max-w-[750px] flex-1 justify-center">
                        <button className="text-white hover:text-gray-100 font-medium font-Poppins">Menu</button>
                        <button className="text-white hover:text-gray-100 font-medium font-Poppins">Icons</button>
                        <button className="text-white hover:text-gray-100 font-medium font-Poppins">Stores</button>
                        <button className="text-white hover:text-gray-100 font-medium font-Poppins">FAQ</button>
                        <FiMoreHorizontal className="text-2xl text-white" />
                        <div className="relative w-[415px]">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-10 pr-4 py-1.5 rounded-md bg-[#4E4AC8] text-white border-none outline-none font-Poppins"
                            />
                            <FiSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-[#6763DF]" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-9">
                        <div className="inline-block">
                            <div className="flex space-x-[46px]">
                                <span className="text-sm font-medium font-Poppins text-white">Next</span>
                                <span className="text-sm font-medium font-Poppins text-white">35 EXP</span>
                            </div>
                            <div className="relative mt-1 h-[3px] rounded-[7px]">
                                <div className="absolute top-0 left-0 w-[111px] h-full bg-[#4E4AC8] rounded-[7px]"></div>
                                <div className="absolute top-0 left-0 w-[83px] h-full bg-[#41EFFF] rounded-[7px]"></div>
                            </div>
                        </div>
                        <span className="text-[#7A77FD] text-2xl">|</span>
                        <FaShoppingCart className="text-xl text-[#7A77FD] cursor-pointer" />
                        <FaEnvelope className="text-xl text-[#7A77FD] cursor-pointer" />
                        <FaBell className="text-xl text-[#7A77FD] cursor-pointer" />
                        <span className="text-[#7A77FD] text-2xl">|</span>
                        <FiSettings className="text-xl text-[#7A77FD] cursor-pointer" />
                    </div>
                </div>
            </Container>
        </nav >
    );
};

export default Navbar;