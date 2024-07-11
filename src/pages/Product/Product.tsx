import ProductCard from "../../components/ProductCard/ProductCard";

const Product = () => {
    return (
        <div>
            <div className="custom__container grid lg:grid-cols-3 xl:grid-cols-7 pt-12 pb-8">
                {/* sidebar filters */}
                <div className="xl:col-span-2"></div>

                {/* main */}
                <div className="lg:col-span-2 xl:col-span-5">
                    {/* meta */}
                    <div></div>

                    {/* products */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
