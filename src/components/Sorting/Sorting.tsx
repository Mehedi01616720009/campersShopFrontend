const Sorting = () => {
    return (
        <div className="flex justify-between items-center gap-3 mb-5">
            <div>
                <button
                    name="page"
                    id="paginate"
                    className="w-max rounded-md border py-1.5 px-3 text-[#141414] lg:text-lg bg-gray-100 hover:bg-gray-200 outline-none"
                >
                    Clear All
                </button>
            </div>
            <div className="flex items-center gap-3">
                <label htmlFor="paginate" className="lg:text-lg">
                    Sort by:
                </label>
                <select
                    name="page"
                    id="paginate"
                    className="w-max block rounded-md border py-1.5 px-3 text-[#141414] lg:text-lg outline-none"
                >
                    <option value="default">Default</option>
                    <option value="lowToHigh">Price Low to High</option>
                    <option value="highToLow">Price High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default Sorting;
