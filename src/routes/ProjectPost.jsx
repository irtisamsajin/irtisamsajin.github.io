import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ComponentMap from "../Projects/ComponentMap";
import NotFound from "../Components/NotFound";


function Project(){

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
      <div className="flex flex-col min-h-screen items-stretch gap-5 py-8 px-4.75 sm:px-20 lg:px-40 xl:px-60">
        <Link to="/projects">
          <span className="text-sm sm:text-base text-lg text-gray-400 hover:text-gray-700 transition duration-300 "> {"く Back to projects"}</span>
        </Link>
        <Content />
      </div>
      <Footer />
    </>
    )
}

export default Project