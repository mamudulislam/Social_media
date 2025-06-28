const PromoCode = () => {
    return (
        <div className="mt-10 w-[1000px] bg-white rounded-[15px]">
            <div className="flex flex-col sm:flex-row items-center gap-3 bg-white p-5 rounded-2xl shadow">
                <p className="text-[#AFB0C0] text-[14px] flex-1">
                    If you have promotional or a discount code, please enter it right here to redeem it.
                </p>
                <div className="flex gap-2 w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Promo code"
                        className="px-4 py-2 rounded-xl border border-[#E2E4EC] focus:outline-none text-sm w-full sm:w-[200px]"
                    />
                    <button className="bg-[#615DFA] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#5048e0] transition-colors">
                        Redeem code
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PromoCode
