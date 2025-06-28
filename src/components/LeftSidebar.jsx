import { NavLink, useLocation } from 'react-router-dom';
import {
    CgFeed,
    CgShoppingCart
} from 'react-icons/cg';
import {
    FiUsers,
    FiInfo
} from 'react-icons/fi';

const mainMenuItems = [
    { icon: CgFeed, label: "Profile", path: "/" },
    { icon: CgFeed, label: "Newsfeed", path: "/Newsfeed" },
    { icon: FiUsers, label: "Friend", path: "/Friend" },
    { icon: FiInfo, label: "About Me", path: "/Aboutme" },
    { icon: CgFeed, label: "Store", path: "/Store" },
    { icon: CgShoppingCart, label: "Carts", path: "/Carts" }
];

const Leftsidebar = () => {
    const location = useLocation();

    return (
        <div className='bg-white p-4 rounded-lg shadow-sm w-full max-w-[280px] mx-auto lg:mx-0 sticky top-4'>
            <div className='bg-[#615DFA] w-[110px] h-[110px] rounded-full mx-auto flex items-center justify-center'>
                <img
                    src="https://lh3.googleusercontent.com/ogw/AF2bZygz4I4sgIOyqorMdW5eorluMFnuvHXUIKuAmeepHsqMnaI=s64-c-mo"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
            <h1 className='font-Poppins font-bold text-[16px] md:text-[18px] lg:text-[20px] text-center mt-2'>Mamudul Islam</h1>
            <p className='text-[#AFB0C0] font-Poppins font-medium text-[12px] md:text-[13px] lg:text-[14px] text-center'>www.abm.com</p>
            <div className="flex items-center justify-center mt-10 mb-10 text-center">
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] space-x-2.5 items-center">
                    <div>
                        <h2 className="font-Poppins font-bold text-[14px] md:text-[15px] lg:text-[16px]">930</h2>
                        <p className="font-Poppins font-medium text-[12px] md:text-[13px] text-[#AFB0C0]">Friends</p>
                    </div>
                    <span className="text-[#AFB0C0] text-[25px]">|</span>
                    <div>
                        <h2 className="font-Poppins font-bold text-[14px] md:text-[15px] lg:text-[16px]">1.2K</h2>
                        <p className="font-Poppins font-medium text-[12px] md:text-[13px] text-[#AFB0C0]">Followers</p>
                    </div>
                    <span className="text-[#AFB0C0] text-[25px]">|</span>
                    <div>
                        <h2 className="font-Poppins font-bold text-[14px] md:text-[15px] lg:text-[16px]">500</h2>
                        <p className="font-Poppins font-medium text-[12px] md:text-[13px] text-[#AFB0C0]">Following</p>
                    </div>
                </div>
            </div>
            <div className='space-y-3'>
                {mainMenuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={`main-${index}`}
                            to={item.path}
                            aria-label={item.label}
                            className={({ isActive }) =>
                                `group flex items-center gap-x-3 p-[12px] rounded-[10px] transition duration-300 text-[13px] md:text-[14px] lg:text-[15px] ${isActive
                                    ? 'bg-[#23D2E2] text-white'
                                    : 'hover:bg-[#23D2E2] hover:text-white text-[#AFB0C0]'
                                }`
                            }
                        >
                            <Icon size={18} />
                            <span className="font-Poppins font-semibold">{item.label}</span>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};

export default Leftsidebar;
