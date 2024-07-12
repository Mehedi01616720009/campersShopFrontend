const Counter = () => {
    return (
        <div className="flex mt-3">
            <button className=" bg-gray-200 text-gray-900 hover:bg-gray-300 h-full rounded-l cursor-pointer px-3 py-1">
                <span className="m-auto">−</span>
            </button>
            <input
                type="number"
                className="focus:outline-none text-center w-[25px] bg-gray-200 flex items-center text-gray-900 outline-none"
                name="custom-input-number"
                value="0"
                readOnly
            ></input>
            <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 h-full rounded-r cursor-pointer px-3 py-1">
                <span className="m-auto">+</span>
            </button>
        </div>
    );
};

export default Counter;
