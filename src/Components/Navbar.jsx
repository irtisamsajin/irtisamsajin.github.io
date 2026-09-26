import { Link } from "react-router-dom"

function Navbar({activePage}) {
    return (
    <>
    <div className="sticky top-0 flex justify-between px-12 md:px-20 lg:px-30 p-6 opacity-100 border-b-1 border-b-gray-300 bg-white text-gray-950 ">
        <div>
            <Link to="/" ><h3 className="text-2xl font-semibold">Irtisam Sajin</h3></Link>
            
        </div>
        <div className="flex justify-center gap-1 sm:gap-5 md:gap-6 lg:gap-10 text-lg text-gray-500">
            <Link to="/" className={`hover:text-gray-950 transition duration-300 ${activePage=='/'?'text-gray-950 font-medium':''}`}>Home</Link>
            <Link to="/profile" className={`hover:text-gray-950 transition duration-300 ${activePage=='/profile'?'text-gray-950 font-medium':''}`}>Profile</Link>
            <Link to="/projects" className={`hover:text-gray-950 transition duration-300 ${activePage=='/projects'?'text-gray-950 font-medium':''}`}>Projects</Link>
            <Link to="/blog" className={`hover:text-gray-950 transition duration-300 ${activePage=='/blog'?'text-gray-950 font-medium':''}`}>Blog</Link>
            <Link to="/contact" className={`hover:text-gray-950 transition duration-300 ${activePage=='/contact'?'text-gray-950 font-medium':''}`}>Contact</Link>
        </div>
    </div>
    </>
    )
}

export default Navbar