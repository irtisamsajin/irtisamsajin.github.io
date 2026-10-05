import { useParams } from "react-router-dom"
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
      <div className="flex flex-col min-h-screen items-stretch gap-15 py-8 px-4.75 sm:px-10 xl:px-50">
        {slug}
      </div>
      <Footer />
    </>
  )
}

export default BlogPost