type PropsType = {
    sort: string;
    setSort: (value: string) => void;
    setPage: (value: string) => void;
};

const Sorting = ({ sort, setSort, setPage }: PropsType) => {
    return (
        <div className="flex items-center gap-3">
            <label htmlFor="paginate" className="lg:text-lg">
                Sort by:
            </label>
            <select
                defaultValue={sort}
                onChange={(e) => {
                    setSort(e.target.value);
                    setPage("1");
                }}
                name="sort"
                id="sort"
                className="w-max block rounded-md border py-1.5 px-3 text-[#141414] lg:text-lg outline-none"
            >
                <option value="">Default</option>
                <option value="price">Price Low to High</option>
                <option value="-price">Price High to Low</option>
            </select>
        </div>
    );
};

export default Sorting;
