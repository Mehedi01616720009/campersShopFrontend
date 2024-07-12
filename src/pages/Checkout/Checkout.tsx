import Input from "../../components/Input/Input";

const Checkout = () => {
    return (
        <div>
            <div className="custom__container pt-12 pb-8">
                <form className="grid md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold mb-6">
                            Checkout Form
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-5">
                            <Input label={"Customer Name:"} type={"text"} />

                            <Input label={"Customer Email:"} type={"email"} />

                            <Input label={"Customer Phone:"} type={"text"} />

                            <Input label={"Customer Address:"} type={"text"} />
                        </div>
                    </div>

                    <div className="w-full lg:col-span-1 flex flex-col p-6 space-y-4 divide-y sm:p-10 divide-gray-700 bg-gray-100 text-gray-900 rounded-xl">
                        <h2 className="text-2xl font-semibold">Order items</h2>
                        <ul className="flex flex-col pt-4 space-y-2">
                            <li className="flex items-start justify-between">
                                <h3>
                                    Hard taco, chicken
                                    <span className="text-sm text-indigo-400">
                                        x3
                                    </span>
                                </h3>
                                <div className="text-right">
                                    <span className="block">$7.50</span>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-4 space-y-2">
                            <div className="space-y-6">
                                <div className="flex justify-between">
                                    <span>Total</span>
                                    <span className="font-semibold">
                                        $22.70
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    className="w-full py-2 font-semibold border rounded bg-indigo-400 text-gray-900 border-indigo-400"
                                >
                                    Place Order
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
