import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

{/* 
  Need to complete:
    1. Show lists of blogs with titles, short description, keywords and the link to open the detailed blog.
    2. Detailed Blog display. 
    3. Page Numbers.
    4. Filterrs based on keywords.
*/}

function Blogs() {

  return (
    <>
      <Navbar activePage='/blogs' />
      <div className="flex flex-col min-h-screen items-stretch gap-15 py-8 px-4.75 sm:px-10 xl:px-50">
        
      </div>
      <Footer />
    </>
  )
}

export default Blogs