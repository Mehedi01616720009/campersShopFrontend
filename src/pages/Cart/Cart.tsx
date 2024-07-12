import { Link } from "react-router-dom";
import CartProductCard from "../../components/CartProductCard/CartProductCard";

const Cart = () => {
    return (
        <div>
            <div className="custom__container pt-12 pb-8">
                <div className="flex flex-col max-w-3xl md:mx-auto p-6 space-y-4 sm:p-10 bg-gray-100 text-gray-900 rounded-xl">
                    <h2 className="text-xl font-semibold">Your cart</h2>
                    <ul className="flex flex-col divide-y divide-gray-700">
                        <CartProductCard />
                    </ul>
                    <div className="space-y-1 text-right">
                        <p>
                            Total amount:
                            <span className="font-semibold">357 €</span>
                        </p>
                        <p className="text-sm text-gray-400">
                            Not including taxes and shipping costs
                        </p>
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Link to={"/all-products"}>
                            <button
                                type="button"
                                className="px-6 py-2 border rounded-md border-violet-400"
                            >
                                Back
                                <span className="sr-only sm:not-sr-only">
                                    to shop
                                </span>
                            </button>
                        </Link>

                        <Link to={"/checkout"}>
                            <button
                                type="button"
                                className="px-6 py-2 border rounded-md bg-indigo-400 text-gray-100 border-indigo-400"
                            >
                                <span className="sr-only sm:not-sr-only">
                                    Continue to
                                </span>
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
