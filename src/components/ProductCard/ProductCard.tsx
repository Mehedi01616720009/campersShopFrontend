import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link to={"/"}>
                <img
                    src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product"
                    className="w-full h-40 xl:h-80 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                        Category
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                        Product Name
                    </p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                            $149
                        </p>
                        <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">
                                $199
                            </p>
                        </del>
                        <div className="ml-auto">
                            <IoBagAddOutline className="size-7" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
