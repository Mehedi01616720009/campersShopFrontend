import { useState } from "react";
import { IoCartOutline, IoHeartOutline, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import FloatingBadge from "../FloatingBadge/FloatingBadge";
import ProductSearchForm from "../ProductSearchForm/ProductSearchForm";
import NavMenu from "../NavMenu/NavMenu";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    return (
        <div className="custom__container relative flex justify-between items-center gap-2 md:gap-5 mb-10">
            {/* toggle bar */}
            <div
                onClick={() => setMenuToggle(!menuToggle)}
                className="w-max lg:hidden border-2 border-[#141414] p-1 rounded-lg"
            >
                <IoMenu className="size-5 text-[#141414]" />
            </div>

            {/* menu items */}
            <NavMenu menuToggle={menuToggle} setMenuToggle={setMenuToggle} />

            {/* search form */}
            <ProductSearchForm />

            {/* cart, wishlist icon */}
            <div className="flex justify-center items-center gap-5">
                <Link to={"/cart"}>
                    <div className="relative">
                        <IoCartOutline className="size-7 text-[#141414]" />
                        <FloatingBadge count={0} />
                    </div>
                </Link>

                <Link to={"/wishlist"}>
                    <div className="relative">
                        <IoHeartOutline className="size-7 text-[#141414]" />
                        <FloatingBadge count={0} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
