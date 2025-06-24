import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <nav className="px-5 flex justify-between items-center">
            <div className="px-10 py-5 font-bold text-3xl">
                <Link to="/">
                    <span className="text-green-800">FarMart</span>
                </Link>
            </div>
            
            <div>
                <ul className="hidden lg:flex items-center font-bold justify-center space-x-6"> 
                    <li>
                        <Link to="/" className="text-green-800 :bg-hover-text ease-in duration-200 px-4 py-2 rounded-md cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link to="/produce" className="text-green-800 :bg-hover-text ease-in duration-200 px-4 py-2 rounded-md cursor-pointer">Produce</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-green-800 :bg-hover-text ease-in duration-200 px-4 py-2 rounded-md cursor-pointer">Contact</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-green-800 :bg-hover-text ease-in duration-200 px-4 py-2 rounded-md cursor-pointer">About</Link>
                    </li>
                </ul>
            </div>
            <div className="px-10 py-5">
                <div className="hidden lg:flex items-center justify-center space-x-6">
                    <Link to="/login">
                        <button className="text-white bg-green-800 px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                        Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="text-white bg-green-800 px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                        Signup
                        </button>
                    </Link>
                    <Link to="/cart"
                        className="text-green-800 px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200 flex items-center">
                        <i className="fas fa-shopping-cart mr-2"></i>Cart 
                    </Link>
                        
                </div>
            </div>
        </nav>
    </header>
)
}

export default Nav