import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar({activePage}) {
    const [openMenu, setOpenMenu]=useState(false);
    return (
    <>
    <div className={`sticky top-0 border-b-2 border-b-gray-200`}>
        <div className="flex items-center justify-between px-4 md:px-20 lg:px-30 p-6 opacity-100 bg-white text-gray-950 ">
            <div>
                <Link to="/" ><h3 className="text-2xl font-semibold">Irtisam Sajin</h3></Link>
            </div>
            <div className="hidden sm:flex justify-center gap-1 sm:gap-5 md:gap-6 lg:gap-10 text-lg text-gray-400">
                <Link to="/" className={`hover:text-gray-950 transition duration-300 ${activePage=='/'?'text-gray-950 ':''}`}>Home</Link>
                <Link to="/profile" className={`hover:text-gray-950 transition duration-300 ${activePage=='/profile'?'text-gray-950':''}`}>Profile</Link>
                <Link to="/projects" className={`hover:text-gray-950 transition duration-300 ${activePage=='/projects'?'text-gray-950':''}`}>Projects</Link>
                <Link to="/blog" className={`hover:text-gray-950 transition duration-300 ${activePage=='/blog'?'text-gray-950':''}`}>Blog</Link>
                <Link to="/contact" className={`hover:text-gray-950 transition duration-300 ${activePage=='/contact'?'text-gray-950':''}`}>Contact</Link>
            </div>

            <div className="sm:hidden flex items-center text-lg/6 text-gray-500">
                <button className="text-gray-600 cursor-pointer px-2 text-center transition duration-300" onClick={() => setOpenMenu(!openMenu)} >
                    <span className="relative block w-5 h-6">
                        <span
                            className={`absolute inset-0 transition-all duration-300 ${
                                openMenu
                                    ? 'opacity-0 rotate-90 scale-75'
                                    : 'opacity-100 rotate-0 scale-100'
                            }`}
                        >
                            ☰
                        </span>

                        <span
                            className={`absolute inset-0 transition-all duration-300 ${
                                openMenu
                                    ? 'opacity-100 rotate-0 scale-100'
                                    : 'opacity-0 -rotate-90 scale-75'
                            }`}
                        >
                            ✕
                        </span>
                    </span>
                </button>
            </div>
        </div>
        <div className="sm:hidden">
            
            <div className={`w-full grid gap-2 px-12 bg-white text-gray-500 text-lg border-b-2 border-b-gray-200 transition-all duration-500 ease-in-out overflow-hidden
              ${
                    openMenu
                        ? 'max-h-80 opacity-100 pt-3 pb-4 '
                        : 'max-h-0 opacity-0 py-0 pointer-events-none'
                }`}
            >
                <Link to="/" className={`hover:text-gray-950 transition duration-300 ${activePage=='/'?'text-gray-950 font-medium':''}` } >Home</Link>
                <Link to="/profile" className={`hover:text-gray-950 transition duration-300 ${activePage=='/profile'?'text-gray-950 font-medium':''}`} >Profile</Link>
                <Link to="/projects" className={`hover:text-gray-950 transition duration-300 ${activePage=='/projects'?'text-gray-950 font-medium':''}`} >Projects</Link>
                <Link to="/blog" className={`hover:text-gray-950 transition duration-300 ${activePage=='/blog'?'text-gray-950 font-medium':''}`} >Blog</Link>
                <Link to="/contact" className={`hover:text-gray-950 transition duration-300 ${activePage=='/contact'?'text-gray-950 font-medium':''}`} >Contact</Link>
            </div>
        
        </div>
        
    </div>
    
    </>
    )
}

export default Navbar