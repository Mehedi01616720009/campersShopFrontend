import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import ProductCard from "../../components/ProductCard/ProductCard";
import Sorting from "../../components/Sorting/Sorting";
import productApi from "../../redux/features/product/productApi";
import { setProducts } from "../../redux/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Helmet } from "react-helmet-async";
import { IoClose } from "react-icons/io5";
import categoryApi from "../../redux/features/category/categoryApi";
import { setCategories } from "../../redux/features/category/categorySlice";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

const useLoadProducts = (sort: string, page: string) => {
    const dispatch = useAppDispatch();

    // fetch products
    const { data: productsData, error: productsError } =
        productApi.useGetAllProductsQuery({ sort, page });

    useEffect(() => {
        if (productsData && productsData.data) {
            dispatch(
                setProducts({
                    meta: productsData.data.meta,
                    products: productsData.data.result,
                })
            );
        } else if (productsError) {
            console.log(productsError);
        }
    }, [productsData, productsError, dispatch]);
};

const useLoadCategories = () => {
    const dispatch = useAppDispatch();

    // fetch categories
    const { data: categoriesData, error: categoriesError } =
        categoryApi.useGetAllCategoriesQuery(undefined);

    useEffect(() => {
        if (categoriesData && categoriesData.data) {
            dispatch(
                setCategories({
                    meta: categoriesData.data.meta,
                    categories: categoriesData.data.result,
                })
            );
        } else if (categoriesError) {
            console.log(categoriesError);
        }
    }, [categoriesData, categoriesError, dispatch]);
};

const Product = () => {
    const [sort, setSort] = useState("");
    const [page, setPage] = useState("1");

    // fetch products
    useLoadProducts(sort, page);

    // fetch categories
    useLoadCategories();

    const products = useAppSelector((state) => state.products.products);
    const productsMeta = useAppSelector((state) => state.products.meta);

    return (
        <div>
            {/* page title */}
            <Helmet>
                <title>Shopy Campers | All Products</title>
            </Helmet>

            {/* page contents */}
            <div className="custom__container grid lg:grid-cols-3 xl:grid-cols-7 gap-5 pt-12 pb-8">
                {/* sidebar filters */}
                <div className="xl:col-span-2">
                    <div className="bg-gray-100 rounded-lg p-4 lg:p-7 mb-4">
                        <h5 className="lg:text-xl mb-5">Categories</h5>
                        <ul>
                            <li>
                                <CategoryFilter />
                                <CategoryFilter />
                                <CategoryFilter />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* main */}
                <div className="lg:col-span-2 xl:col-span-5">
                    {/* meta */}
                    <div className="bg-gray-100 rounded-lg p-4 lg:px-6 mb-4">
                        <h5 className="lg:text-xl mb-0.5">All Products</h5>
                        <p className="text-gray-500 text-sm lg:text-base">
                            Total {productsMeta.totalDoc} products found &{" "}
                            {(productsMeta.page - 1) * productsMeta.limit + 1} -{" "}
                            {(productsMeta.page - 1) * productsMeta.limit +
                                products.length}{" "}
                            Result Showing
                        </p>
                    </div>

                    <div className="flex justify-between items-center gap-3 mb-5">
                        {/* clear filer */}
                        <div className="flex items-center gap-1">
                            {sort && (
                                <button
                                    className="w-max rounded-md border py-0.5 px-2 text-[#141414] bg-gray-100 hover:bg-gray-200 outline-none flex justify-center items-center gap-1 text-center"
                                    onClick={() => {
                                        setSort("");
                                        setPage("1");
                                    }}
                                >
                                    <IoClose className="size-4" />
                                    {sort === "price"
                                        ? "Low to High"
                                        : "High to Low"}
                                </button>
                            )}

                            <button
                                className="w-max rounded-md border py-0.5 px-2 text-[#141414] bg-gray-100 hover:bg-gray-200 outline-none flex justify-center items-center gap-1 text-center"
                                onClick={() => {
                                    setSort("");
                                    setPage("1");
                                }}
                            >
                                <IoClose className="size-4" />
                                Clear All
                            </button>
                        </div>

                        {/* sorting */}
                        <Sorting
                            sort={sort}
                            setSort={setSort}
                            setPage={setPage}
                        />
                    </div>

                    {/* products */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 mb-8">
                        {products.map((item) => (
                            <ProductCard key={item._id} item={item} />
                        ))}
                    </div>

                    {/* pagination */}
                    <Pagination
                        totalPage={productsMeta.totalPage}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Product;
