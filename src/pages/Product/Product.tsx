import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sorting from "../../components/Sorting/Sorting";

const Product = () => {
    return (
        <div>
            <div className="custom__container grid lg:grid-cols-3 xl:grid-cols-7 pt-12 pb-8">
                {/* sidebar filters */}
                <div className="xl:col-span-2"></div>

                {/* main */}
                <div className="lg:col-span-2 xl:col-span-5">
                    {/* meta */}
                    <div className="bg-gray-100 rounded-lg p-4 lg:px-6 mb-4">
                        <h5 className="lg:text-xl mb-0.5">All Products</h5>
                        <p className="text-gray-500 text-sm lg:text-base">
                            Total 339 products found & 26 - 50 Result Showing
                        </p>
                    </div>

                    {/* sorting */}
                    <Sorting />

                    {/* products */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 mb-8">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>

                    {/* pagination */}
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Product;
