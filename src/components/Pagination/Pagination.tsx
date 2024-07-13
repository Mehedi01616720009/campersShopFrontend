type PropsType = {
    totalPage: number;
    page: string;
    setPage: (value: string) => void;
};

const Pagination = ({ totalPage, page, setPage }: PropsType) => {
    const pages = [...Array(totalPage).keys()];
    return (
        <div className="flex justify-end items-center gap-3">
            <label htmlFor="paginate" className="lg:text-lg">
                Pages:
            </label>
            <select
                defaultValue={page}
                onChange={(e) => setPage(e.target.value)}
                name="page"
                id="paginate"
                className="w-max block rounded-md border py-1.5 px-3 text-[#141414] lg:text-lg outline-none"
            >
                {pages.map((page) => (
                    <option key={page} value={page + 1}>
                        Page {page + 1}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Pagination;
