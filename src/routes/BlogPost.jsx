import { Link, useParams } from "react-router-dom"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { useEffect } from "react";
import ComponentMap from "../Blogs/ComponentMap";
import NotFound from "../Components/NotFound";

function BlogPost(){

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    }, []);
    const {slug}=useParams();
    const Content=Object.hasOwn(ComponentMap,slug)?ComponentMap[slug]:NotFound;

    return (
    <>
      <Navbar activePage='' />
      <div className="flex flex-col min-h-screen items-stretch gap-5 py-8 px-4.75 sm:px-10 lg:px-30 xl:px-40">
        <Link to="/blogs">
          <span className="text-sm sm:text-base text-lg text-gray-500 hover:text-gray-900 transition duration-200 "> {"く Back to blog"}</span>
        </Link>
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default BlogPost