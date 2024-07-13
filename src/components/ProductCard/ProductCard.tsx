import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

type TCategory = {
    _id: string;
    name: string;
    image?: string;
};

type TProduct = {
    _id: string;
    name: string;
    price: number;
    stock: "inStock" | "outStock";
    quantity: number;
    description: string;
    category: TCategory;
    images?: string[];
};

type PropsType = {
    item: TProduct;
};

const ProductCard = ({ item }: PropsType) => {
    return (
        <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <Link to={"/"}>
                <img
                    src={item?.images && item?.images[0]}
                    className="w-full h-40 xl:h-80 object-cover rounded-t-xl"
                />
                <div className="px-4 py-3">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                        {item.category.name}
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                        {item.name}
                    </p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">
                            ${item.price}
                        </p>
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
