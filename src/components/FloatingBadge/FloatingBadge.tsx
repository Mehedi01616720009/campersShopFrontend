type PropsType = {
    count: number;
};

const FloatingBadge = ({ count }: PropsType) => {
    return (
        <div className="size-5 bg-[#3a3cd7] text-white text-[10px] flex justify-center items-center rounded-full absolute -top-2 -right-2">
            {count}
        </div>
    );
};

export default FloatingBadge;
