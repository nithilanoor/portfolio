import { Link } from "react-router-dom";


const Navbar = () => {

    const NavLinks = <>
        <Link to={"/"}><li>Home</li></Link>
        <a href="#aboutMe"><li>About</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#contacts"><li>Contact</li></a>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 w-full z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 *:hover:bg-[#d9dbcc] *:hover:text-white *:rounded *:p-1">
                        {NavLinks}
                    </ul>
                </div>
                <img src="/assets/SignatureLogo.png" className="w-24" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 *:hover:bg-[#d9dbcc] *:hover:text-white *:rounded *:p-1 gap-4">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#d9dbcc] hover:bg-[#e0e0da]">Resume</a>
            </div>
        </div>
    );
};

export default Navbar;