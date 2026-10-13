import { Link, useParams } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useEffect } from "react";

function BlogPost(){

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    }, []);
    const {slug}=useParams();

    return (
    <>
      <Navbar activePage='' />
      <div className="flex flex-col min-h-screen items-stretch gap-15 py-8 px-4.75 sm:px-20 lg:px-40 xl:px-60">
        <Link to="/blogs">
          {/* <h1 className="text-2xl sm:text-3xl font-semibold ">
            <div className="flex items-end">
              <div className="text-3xl sm:text-4xl">B</div>
              <div>log</div>
            </div> 
          </h1> */}
          <span className="text-sm sm:text-base text-lg text-gray-400 hover:text-gray-700 transition duration-300 "> {"く Back to blog"}</span>
        </Link>
        {slug}
      </div>
      <Footer />
    </>
  )
}

export default BlogPost