import { useDispatch } from 'react-redux';
import { addToCart } from '../../../settings/Redux/feature/cartSlice';
import { useNavigate } from 'react-router-dom';
import Productdata from './Product';

const Rightsideproduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        navigate(`/product/${item.slug}`);
    };

    const handleViewDetails = (slug) => {
        navigate(`/product/${slug}`);
    };

    return (
        <div className='mt-[20px]'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Productdata.map((item) => (
                    <div key={item.id} className="max-w-xs rounded-2xl overflow-hidden shadow-lg text-center bg-white">
                        <div className={`${item.imageColor} h-40 relative rounded-t-2xl`}>
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                            <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-indigo-500 font-bold text-sm shadow">
                                ${item.price}
                            </span>
                        </div>

                        <div className="p-4">
                            <h3 className="text-black font-bold text-[18px] leading-snug">{item.name}</h3>
                            <div className="flex items-center justify-center mt-2 space-x-1 text-sm text-gray-500">
                                <span className={`w-3 h-3 ${item.tagColor} rounded-full inline-block`}></span>
                                <span>{item.category}</span>
                            </div>
                            <button
                                onClick={() => handleViewDetails(item.slug)}
                                className="block mt-2 text-sm text-indigo-500 underline hover:text-indigo-600 transition"
                            >
                                Full Screen View
                            </button>
                        </div>

                        <div className="flex">
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="flex-1 py-3 bg-violet-500 text-white text-sm font-semibold rounded-bl-2xl hover:bg-violet-600 transition"
                            >
                                Add To Cart
                            </button>
                            <button className="flex-1 py-3 bg-cyan-400 text-white text-sm font-semibold rounded-br-2xl hover:bg-cyan-500 transition">
                                Wishlist
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rightsideproduct;