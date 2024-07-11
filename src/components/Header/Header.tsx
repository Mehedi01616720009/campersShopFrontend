import { Link } from "react-router-dom";
import logo from "/tent.png";

const Header = () => {
    return (
        <div className="custom__container">
            <Link to={"/"}>
                <h1 className="flex justify-center items-center gap-2 text-center text-2xl xl:text-3xl font-semibold py-3">
                    <img src={logo} alt="" className="w-[70px]" />
                    Shopy Campers
                </h1>
            </Link>
        </div>
    );
};

export default Header;
