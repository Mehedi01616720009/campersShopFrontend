import { menuItems } from "../../constant/menuItems";
import ActiveLink from "../ActiveLink/ActiveLink";

type PropsType = {
    menuToggle: boolean;
    setMenuToggle: (value: boolean) => void;
};

const NavMenu = ({ menuToggle, setMenuToggle }: PropsType) => {
    return (
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
                    <ActiveLink to={menuItem.path}>{menuItem.name}</ActiveLink>
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;
