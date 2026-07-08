import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";
import menu from "../Assets/menu.png";
import closeMenu from "../Assets/close.png";
import { useState } from "react";


const Header = () => {
    
    const [isMenuOpen,setIsMenuOpen] = useState(true);

    return (
        <header >
            <div className="flex justify-between bg-yellow-400 h-[70px] md:pr-[110px] md:pl-[50px]">
                <div className="flex items-center">
                    <img src={logo} className="object-contain w-auto h-[70px]" alt="FashionFlow Logo"/>
                    <h1 className="text-2xl font-bold -ml-5 cursor-pointer">FashionFlow</h1>
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
                    <button className="px-6 py-2 bg-red-300 rounded-full hover:bg-red-400 font-medium">Login</button>
                    <Link to={"/"} className="font-semibold">Cart</Link>
                </div>

                <div className="md:hidden flex items-center pr-[30px]" >
                    <img src={isMenuOpen ? menu : closeMenu} onClick={()=>{setIsMenuOpen(!isMenuOpen)}} alt="Open Menu, Close Menu"/>
                </div>
            </div>

            <div className={`${isMenuOpen ? "hidden" : "block"}`}>

                <div className="flex flex-col items-center gap-4 border py-6 bg-yellow-300 md:hidden">
                    <Link to={"/"} className="font-semibold text-lg">Home</Link>
                    <Link to={"/"} className="font-semibold text-lg">Men</Link>
                    <Link to={"/"} className="font-semibold text-lg">Women</Link>
                    <Link to={"/"} className="font-semibold text-lg">Kids</Link>       
                </div>
            
            

                <div className="flex flex-col items-center gap-4 border py-6 bg-yellow-300 md:hidden">
                    <button className="px-8 py-2 bg-red-300 rounded-full max-w-[200px] w-4/5 font-medium hover:bg-red-400">Login</button>
                    <Link to={"/"} className="font-semibold text-lg">Cart</Link>
                </div>

            </div>
        </header>
       
    );
}

export default Header;