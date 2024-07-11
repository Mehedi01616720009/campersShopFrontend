import { menuItems } from "../../constant/menuItems";
import { useState } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import {
    IoCartOutline,
    IoHeartOutline,
    IoMenu,
    IoSearch,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    console.log(menuToggle);

    return (
        <div className="xl:container relative flex justify-between items-center gap-2 px-6 xl:mx-auto mb-10">
            {/* toggle bar */}
            <div
                onClick={() => setMenuToggle(!menuToggle)}
                className="w-max lg:hidden border-2 border-[#141414] p-1 rounded-lg"
            >
                <IoMenu className="size-5 text-[#141414]" />
            </div>

            {/* menu items */}
            <ul
                className={`${
                    menuToggle ? "h-max" : "h-0"
                } absolute top-10 left-0 w-full text-center bg-white overflow-hidden lg:w-max lg:h-max lg:top-0 lg:flex lg:justify-center lg:items-center lg:gap-3 lg:relative`}
            >
                {menuItems.map((menuItem, index) => (
                    <li
                        onClick={() => setMenuToggle(!menuToggle)}
                        key={index}
                        className="grid mb-2"
                    >
                        <ActiveLink to={menuItem.path}>
                            {menuItem.name}
                        </ActiveLink>
                    </li>
                ))}
            </ul>

            {/* search form */}
            <form>
                <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                        <span className="text-gray-500">
                            <IoSearch className="size-5" />
                        </span>
                    </div>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="w-full rounded-md border py-1.5 pl-8 pr-20 text-[#141414] outline-none"
                        placeholder="Search your product"
                    />
                </div>
            </form>

            {/* cart, wishlist icon */}
            <div className="flex justify-center items-center gap-5">
                <Link to={"/cart"}>
                    <div className="relative">
                        <IoCartOutline className="size-7 text-[#141414]" />
                        <div className="size-5 bg-[#3a3cd7] text-white text-[10px] flex justify-center items-center rounded-full absolute -top-2 -right-2">
                            0
                        </div>
                    </div>
                </Link>

                <Link to={"/wishlist"}>
                    <div className="relative">
                        <IoHeartOutline className="size-7 text-[#141414]" />
                        <div className="size-5 bg-[#3a3cd7] text-white text-[10px] flex justify-center items-center rounded-full absolute -top-2 -right-2">
                            0
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
