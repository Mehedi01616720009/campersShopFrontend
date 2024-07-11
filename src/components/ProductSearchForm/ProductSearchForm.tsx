import { IoSearch } from "react-icons/io5";

const ProductSearchForm = () => {
    return (
        <form className="grow max-w-[600px]">
            <div className="relative flex justify-center items-center rounded-md">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    <span className="text-gray-500">
                        <IoSearch className="size-5" />
                    </span>
                </div>
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="w-full block rounded-md border py-1.5 pl-8 pr-20 text-[#141414] outline-none"
                    placeholder="Search your product"
                />
                <button
                    className="absolute top-0 right-0 px-3 py-1.5 bg-slate-200 border border-slate-200 rounded-md rounded-tl-none rounded-bl-none"
                    type="submit"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default ProductSearchForm;
