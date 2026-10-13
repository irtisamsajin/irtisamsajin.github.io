import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import Keywords from "../Components/Keywords"
import Navbar from "../Components/Navbar"
import { projectList } from "../Projects/projectLists"

const projectsListComponent=((post) => {
  return (
    <div className="border-1 sm:border-2 border-gray-300 hover:border-gray-600 rounded-xl pointer-cursor px-4 py-5 transition duration-300">
      <p className="text-xl sm:text-2xl font-semibold">{post.title}</p>
      {Object.hasOwn(post,'date') && (<p className="text-gray-500 text-sm sm:text-base my-1 pt-1 px-2">
          {post.date}
      </p>)}
      <div className="text-base sm:text-lg p-2">{post.description}</div>
      <Keywords words={post.topics} />
    </div>
  )
})


function Projects() {

  return (
    <>
      <Navbar activePage='/projects' />
      <div className="flex flex-col min-h-screen items-stretch py-8 px-4.75 sm:px-20 lg:px-40 xl:px-60">
        <div>
        <Link to="/projects">
        <h1 className="text-2xl sm:text-3xl font-semibold ">
          <div className="flex items-end">
            <div className="text-3xl sm:text-4xl">P</div>
            <div>rojects</div>
          </div>
        </h1>
        </Link>
        <div className="flex flex-col gap-10 my-10 mx-2 sm:mx-5">
          {projectList.map((post) => {
            return (
              <Link to={`/project/${post.slug}`}>
                {projectsListComponent(post)}
              </Link>
            )
          })}
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects