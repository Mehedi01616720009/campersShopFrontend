type PropsType = {
    label: string;
    type: string;
};

const Input = ({ label, type }: PropsType) => {
    return (
        <div>
            <label htmlFor="paginate" className="lg:text-lg mb-2">
                {label}
            </label>
            <input
                type={type}
                id=""
                placeholder={label}
                className="w-full rounded-md border py-1.5 pl-3 pr-20 text-[#141414] lg:text-lg outline-none"
            />
        </div>
    );
};

export default Input;
