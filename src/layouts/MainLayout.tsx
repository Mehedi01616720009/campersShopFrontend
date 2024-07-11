import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* header */}
            <Header />

            {/* navbar */}
            <Navbar />

            {/* content */}
            <Outlet />

            {/* footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
