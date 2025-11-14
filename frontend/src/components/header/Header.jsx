import logo from "../../assets/image/univera.jpg"
import { NavLink } from 'react-router-dom';
import { PiUser } from "react-icons/pi";

const nav = [
    {
        link: "/auth",
        text: "Login"
    },
    {
        link: "/todo",
        text: "Todo"
    },
    {
        link: "/",
        text: "Home"
    },
]

const Header = () => {
    return (
        <div className="flex items-center justify-between rounded-full px-5 p-2 w-2/3 bg-primary-500">
            <img
                className="rounded-full shadow-lg"
                src={logo}
                width={40}
                height={40}
                alt="logo"
            />
            <div className="flex items-center gap-10">
                {nav.map((nav, index) => (
                    <NavLink
                        to={nav?.link}
                        key={index}
                        className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-100 "}
                    >
                        {nav?.text}
                    </NavLink>
                ))}
            </div>
            <div className="flex items-center gap-3">
                <span className="text-sm text-white">Univera</span>
                <div className="flex items-center justify-center shadow-lg rounded-full w-10 h-10 bg-back-950">
                    <PiUser className="text-2xl text-primary-500" />
                </div>
            </div>
        </div>
    )
}

export default Header