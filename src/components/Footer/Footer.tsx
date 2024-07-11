import { Link } from "react-router-dom";
import logoWhite from "/tent-white.png";
import { menuItems } from "../../constant/menuItems";

const Footer = () => {
    return (
        <div className="bg-[#1d1f7d] py-6">
            <div className="custom__container md:pt-6">
                <div className="grid md:grid-cols-4 gap-6 mb-6">
                    {/* logo and contact information */}
                    <div className="md:col-span-2">
                        <Link to={"/"}>
                            <h1 className="flex items-center gap-2 text-white text-2xl xl:text-3xl font-semibold mb-3">
                                <img
                                    src={logoWhite}
                                    alt=""
                                    className="w-[70px]"
                                />
                                Shopy Campers
                            </h1>
                        </Link>

                        <p className="text-gray-100 mb-2">
                            Mohammadpur, Dhaka, Bangladesh
                        </p>
                        <p className="text-gray-100 mb-2">
                            mehedi01616720009@gmail.com
                        </p>
                        <p className="text-gray-100 mb-2">+880 1616720009</p>
                    </div>

                    {/* social links */}
                    <div>
                        <h5 className="text-white font-medium text-lg xl:text-xl mb-6">
                            Socials
                        </h5>

                        <ul className="xl:text-lg">
                            <li className="text-gray-100 mb-2">
                                <Link
                                    to={
                                        "https://www.facebook.com/profile.php?id=61554158363669"
                                    }
                                >
                                    Facebook
                                </Link>
                            </li>
                            <li className="text-gray-100 mb-2">
                                <Link
                                    to={"https://github.com/Mehedi01616720009"}
                                >
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* relevant links */}
                    <div>
                        <h5 className="text-white font-medium text-lg xl:text-xl mb-6">
                            Important Links
                        </h5>

                        <ul className="xl:text-lg">
                            {menuItems.map((menuItem, index) => (
                                <li key={index} className="text-gray-100 mb-2">
                                    <Link to={menuItem.path}>
                                        {menuItem.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* copyrights */}
                <div className="border-t border-gray-300 py-5 text-gray-300">
                    &copy; {new Date().getFullYear()} Shopy Campers, Inc. All
                    rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
