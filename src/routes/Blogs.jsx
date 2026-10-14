import { Link } from "react-router-dom"
import {blogLists} from "../Blogs/blogLists"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Keywords from "../Components/Keywords"
import { HiOutlineExternalLink } from "react-icons/hi"

{/* 
  Need to complete:
    [done] 1. Show lists of blogs with titles, short description, keywords and the link to open the detailed blog.
    2. Detailed Blog display. 
    3. Page Numbers.
    4. Filterrs based on keywords.
*/}

const blogsListComponent=((post) => {
  return (
    <div className="border-1 sm:border-2 border-gray-300 hover:border-gray-600 rounded-xl pointer-cursor px-4 py-5 transition duration-300">
      <p className="flex gap-1 items-center text-xl sm:text-2xl font-semibold">
        {post.title} {Object.hasOwn(post,'link') && (<HiOutlineExternalLink className="text-xl" />)}
      </p>
      <p className="text-gray-500 text-sm sm:text-base my-1 pt-1 px-2">
          {post.date}
      </p>
      <div className="text-base sm:text-lg p-2">{post.description}</div>
      <Keywords words={post.topics} />
    </div>
  )
})

function Blogs() {

  return (
    <>
      <Navbar activePage='/blogs' />
      <div className="flex flex-col min-h-screen items-stretch py-8 px-4.75 sm:px-20 lg:px-40 xl:px-60">
        <div>
          <Link to="/blogs">
          <h1 className="text-2xl sm:text-3xl font-semibold ">
            <div className="flex items-end">
              <div className="text-3xl sm:text-4xl">B</div>
              <div>log</div>
            </div>
          </h1>
          </Link>
          <div className="flex flex-col gap-10 my-10 mx-2 sm:mx-5">
            {blogLists.map((post) => {
              return(
              <>
              {Object.hasOwn(post,'slug') && (  
              <Link to={`/blog/${post.slug}`}>
                {blogsListComponent(post)}
              </Link>
              )}
              {Object.hasOwn(post,'link') && (  
              <a href={`${post.link}`}>
                {blogsListComponent(post)}
              </a>
              )}
              </>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs