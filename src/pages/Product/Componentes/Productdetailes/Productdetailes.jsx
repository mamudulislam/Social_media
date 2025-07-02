import React from 'react';
import { useParams } from 'react-router-dom';
import Productdata from '../Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../settings/Redux/feature/cartSlice';
import ReactImageMagnify from 'react-image-magnify';

const ProductDetails = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const product = Productdata.find((item) => item.slug === slug);

    if (!product) return <div>Product not found</div>;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`}>★</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half">☆</span>);
        }

        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`}>☆</span>);
        }

        return stars;
    };

    return (
        <div className="p-8">
            <p className="mt-[22px] font-Poppins font-normal text-[14px] text-[#AFB0C0]">BROWSE PRODUCTS</p>
            <h1 className="font-Poppins font-medium text-[24px] text-[#24234B]">Digital Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-x-8 mt-8'>
                <div className={`${product.imageColor || 'bg-[#F6F7FB]'} rounded-lg p-8 flex items-center justify-center`}>
                    <div className="relative w-full h-96">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <ReactImageMagnify
                                {...{
                                    smallImage: {
                                        alt: product.name,
                                        isFluidWidth: true,
                                        src: product.image
                                    },
                                    largeImage: {
                                        src: product.image,
                                        width: 800,
                                        height: 800
                                    },
                                    lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                                    enlargedImageContainerStyle: { zIndex: 50 },
                                    enlargedImagePosition: 'over'
                                }}
                            />
                        </div>
                        <div
                            className="absolute top-0 left-0 w-16 h-16 rounded-full opacity-30"
                            style={{ backgroundColor: product.tagColor || '#FFE1E1' }}
                        ></div>
                        <div
                            className="absolute bottom-0 right-0 w-24 h-24 rounded-full opacity-30"
                            style={{ backgroundColor: product.tagColor || '#E1F6FF' }}
                        ></div>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

                    <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-[#24234B]">${product.price}</span>
                    </div>

                    <div className="flex items-center mb-6">
                        <span className="text-[#4CAF50] font-medium mr-2">{product.rating}/5</span>
                        <div className="text-yellow-400">
                            {renderStars(product.rating)}
                        </div>
                        <span className="ml-2 text-gray-500">({product.reviews.toLocaleString()} reviews)</span>
                    </div>

                    <div className="mb-8">
                        <p className="text-gray-700 mb-2">Category: {product.category}</p>
                        <p className="text-gray-700">{product.description}</p>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-[#24234B] text-white py-3 px-8 rounded-lg hover:bg-[#3A3985] transition-colors"
                    >
                        Add to your cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;