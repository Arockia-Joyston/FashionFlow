import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";


const Header = () => {
    

    return (
        <header >
            <div className="flex justify-between bg-yellow-400 h-[70px] md:pr-[110px] md:pl-[50px]">
                <div className="flex items-center">
                    <img src={logo} className="object-contain w-auto h-[70px]"/>
                    <h1 className="text-2xl -ml-5">FashionFlow</h1>
                </div>

                <div>
                    <nav className="hidden md:flex gap-12 items-center h-full">
                        <Link to={"/"} className="font-semibold">Home</Link>
                        <Link to={"/"} className="font-semibold">Men</Link>
                        <Link to={"/"} className="font-semibold">Women</Link>
                        <Link to={"/"} className="font-semibold">Kids</Link>
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <button className="px-6 py-2 bg-blue-300 rounded-full">Login</button>
                    <Link to={"/"} className="font-semibold">Cart</Link>
                </div>
            </div>
        </header>
       
    );
}

export default Header;