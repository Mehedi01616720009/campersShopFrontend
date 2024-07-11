import { Outlet } from "react-router";
import logo from "/tent.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            {/* header */}
            <div className="xl:container px-6 xl:mx-auto">
                <Link to={"/"}>
                    <h1 className="flex justify-center items-center gap-2 text-center text-2xl xl:text-3xl font-semibold py-3">
                        <img src={logo} alt="" className="w-[70px]" />
                        Shopy Campers
                    </h1>
                </Link>
            </div>

            {/* navbar */}
            <Navbar />

            {/* content */}
            <Outlet />
        </div>
    );
};

export default MainLayout;
