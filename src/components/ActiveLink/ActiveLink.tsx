import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type PropsType = {
    children: ReactNode;
    to: string;
};

const ActiveLink = ({ children, to }: PropsType) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "lg:text-lg font-medium text-[#3a3cd7] border-b border-[#3a3cd7] py-1"
                    : "lg:text-lg text-[#141414] hover:text-[#3a3cd7] border-b border-[#141414] py-1"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
