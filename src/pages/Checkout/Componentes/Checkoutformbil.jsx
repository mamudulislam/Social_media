import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const CheckoutFormBilling = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: 'New York',
            zipCode: '',
            additionalDetails: '',
            paymentMethod: 'paypal'
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digits').required('Phone is required'),
            address: Yup.string().required('Address is required'),
            city: Yup.string().required('City is required'),
            zipCode: Yup.string().required('ZIP code is required'),
            paymentMethod: Yup.string().required('Payment method is required')
        }),
        onSubmit: values => {
            console.log('Form submitted:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='grid grid-cols-[1fr_1fr] gap-x-[15px] mt-[25px]'>
            <div className='w-[784px] h-[641px] bg-white p-[32px] rounded-[15px]'>
                <h2 className='font-Poppins font-medium text-[18px]'>Billing Details</h2>
                <div className='mt-[32px]'>
                    <div className='grid grid-cols-2 gap-x-3 gap-y-[22px]'>
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First name"
                                className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last name"
                                className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone number"
                                className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.phone}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='mt-[22px]'>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            className='w-full h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="text-red-500 text-xs mt-1">{formik.errors.address}</div>
                        ) : null}
                    </div>
                    <div className='grid grid-cols-2 gap-x-3 gap-y-[22px] mt-[22px]'>
                        <div>
                            <input
                                type="text"
                                name="city"
                                placeholder="New York"
                                className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}
                            />
                            {formik.touched.city && formik.errors.city ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.city}</div>
                            ) : null}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="zipCode"
                                placeholder="ZIP Code"
                                className='w-[354px] h-[48px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px]'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.zipCode}
                            />
                            {formik.touched.zipCode && formik.errors.zipCode ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.zipCode}</div>
                            ) : null}
                        </div>
                    </div>
                    <div className='mt-[22px]'>
                        <textarea
                            name="additionalDetails"
                            placeholder="Write any additional details here..."
                            className='w-[720px] h-[160px] rounded-[15px] text-[#AFB0C0] border-[1px] outline-none px-[22px] py-[14px] resize-none'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.additionalDetails}
                        />
                    </div>
                </div>
            </div>

            <div className='w-[384px] h-[793px] bg-white p-[27px] font-Poppins'>
                <h2 className='font-medium text-[17px] text-[#181828]'>Order Summary</h2>
                <div className='mt-[31px] space-y-5'>
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className='flex justify-between'>
                            <p className='font-medium text-[14px] text-[#45437F] w-[156px]'>Twitch stream ui pack</p>
                            <p className='font-medium text-[12px]'><span className='text-[#23D2E2]'>$</span>44.00</p>
                        </div>
                    ))}
                </div>
                <div className='h-px w-full bg-[#AFB0C0] mt-[33px]'></div>
                <div className="text-[14px] space-y-2 mb-6 mt-[21px]">
                    <div className="flex justify-between">
                        <span className="text-[#AFB0C0] font-medium text-[12px]">Cart(3)</span>
                        <span className="font-medium text-[12px]"><span className='text-[#23D2E2]'>$</span>44.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#AFB0C0] font-medium text-[12px]">Code</span>
                        <span className="font-medium text-[12px]">-<span className='text-[#23D2E2]'>$</span>15.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-[#AFB0C0] font-medium text-[12px]">Total</span>
                        <span className="font-medium text-[12px]"><span className='text-[#23D2E2]'>$</span>39.00</span>
                    </div>
                </div>
                <div className='h-px w-full bg-[#AFB0C0] mt-[33px]'></div>
                <div className='mt-[11px]'>
                    <h2 className='text-center font-medium text-[49px]'>
                        <span className='text-[#23D2E2]'>$</span>39.00
                    </h2>
                </div>
                <div className='h-px w-full bg-[#AFB0C0] mt-[11px]'></div>
                <h3 className='font-medium text-[17px] text-[#181828] mt-[21px]'>Payment Method</h3>
                <div className="mt-4">
                    <div className="mb-4 p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="paypal"
                                name="paymentMethod"
                                value="paypal"
                                checked={formik.values.paymentMethod === 'paypal'}
                                onChange={formik.handleChange}
                                className="h-4 w-4 text-blue-500 focus:ring-blue-400"
                            />
                            <label htmlFor="paypal" className="ml-3 text-gray-700 text-sm">
                                Pay with your PayPal balance or connected bank account
                            </label>
                        </div>
                        <p className="text-gray-500 text-xs mt-1 ml-7">it's quick and really secure.</p>
                    </div>

                    <div className="mb-6 flex items-center p-4 border border-gray-200 rounded-lg">
                        <input
                            type="radio"
                            id="cardOption"
                            name="paymentMethod"
                            value="card"
                            checked={formik.values.paymentMethod === 'card'}
                            onChange={formik.handleChange}
                            className="h-4 w-4 text-blue-500 focus:ring-blue-400"
                        />
                        <label htmlFor="cardOption" className="ml-3 text-gray-700 text-sm">
                            Credit or Debit card
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#23D2E2] hover:bg-[#1cb8c6] text-white font-medium py-3 px-4 rounded-md transition-colors"
                        disabled={!formik.isValid || formik.isSubmitting}
                    >
                        {formik.isSubmitting ? 'Processing...' : 'Complete order !'}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CheckoutFormBilling;