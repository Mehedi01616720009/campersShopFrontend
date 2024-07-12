import { IoHeartOutline, IoTrashOutline } from "react-icons/io5";
import Counter from "../Counter/Counter";

const CartProductCard = () => {
    return (
        <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                    className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                    src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                    alt="Polaroid camera"
                />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                Polaroid camera
                            </h3>
                            <p className="text-sm text-gray-400">Classic</p>
                            <Counter />
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">59.99€</p>
                            <p className="text-sm line-through text-gray-600">
                                75.50€
                            </p>
                        </div>
                    </div>
                    <div className="flex text-sm divide-x">
                        <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                            <IoTrashOutline className="size-4" />
                            <span>Remove</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center px-2 py-1 space-x-1"
                        >
                            <IoHeartOutline className="size-4" />
                            <span>Add to favorites</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartProductCard;
