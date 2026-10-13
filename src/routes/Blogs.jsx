import { Link } from "react-router-dom"
import {blogLists} from "../blogLists"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Keywords from "../Components/Keywords"

{/* 
  Need to complete:
    [done] 1. Show lists of blogs with titles, short description, keywords and the link to open the detailed blog.
    2. Detailed Blog display. 
    3. Page Numbers.
    4. Filterrs based on keywords.
*/}

function Blogs() {

  return (
    <>
      <Navbar activePage='/blogs' />
      <div className="flex flex-col min-h-screen items-stretch gap-15 py-8 px-4.75 sm:px-20 lg:px-40 xl:px-60">
        <div>
          {/* <Link to="/blogs">
          <h1 className="text-2xl sm:text-3xl font-semibold ">
            <div className="flex items-end">
              <div className="text-3xl sm:text-4xl">B</div>
              <div>log</div>
            </div>
          </h1>
          </Link> */}
          <div className="flex flex-col gap-10 my-10 mx-2 sm:mx-5">
            {blogLists.map((post) => {
              return(
              <>
              {/* 
              
                Any update to one section should be carefully made in both sections
                (section with slug and section with link)

              */}
              {Object.hasOwn(post,'slug') && (  
              <Link to={`/blog/${post.slug}`}>
                <div className="sm:border-2 border-gray-300 hover:border-gray-600 rounded-xl pointer-cursor px-4 py-5 transition duration-300">
                
                  <p className="text-lg lg:text-xl font-medium">{post.title}</p>
                  <p className="text-gray-500 text-sm sm:text-base">
                      {post.date}
                  </p>
                  <div className="py-2 text-sm sm:text-base">{post.description}</div>
                  <Keywords words={post.topics} />
                
                </div>
              </Link>
              )}
              {Object.hasOwn(post,'link') && (  
              <a href={`${post.link}`}>
                <div className="sm:border-2 border-gray-300 hover:border-gray-600 rounded-xl pointer-cursor px-4 py-5 transition duration-300">
                
                  <p className="text-lg lg:text-xl font-medium">
                    {post.title} {/* &nbsp;<span className="text-gray-500 text-sm sm:text-base font-normal">{Object.hasOwn(post,'website') && post.website}</span> */}
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">
                      {post.date} 
                  </p>
                  
                  <div className="py-2 text-sm sm:text-base">{post.description}</div>
                  <Keywords words={post.topics} />
                
                </div>
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