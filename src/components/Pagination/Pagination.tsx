const Pagination = () => {
    return (
        <div className="flex justify-end items-center gap-3">
            <label htmlFor="paginate" className="lg:text-lg">
                Pages:
            </label>
            <select
                name="page"
                id="paginate"
                className="w-max block rounded-md border py-1.5 px-3 text-[#141414] lg:text-lg outline-none"
            >
                {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                    <option key={page} value={page}>
                        Page {page}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Pagination;
