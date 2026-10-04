import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function Home() {

  return (
    <>
      <Navbar activePage='/' />
      <div className="flex flex-col min-h-screen items-stretch gap-15 py-8 px-4.75 sm:px-10 xl:px-50">
        <h1 className="text-3xl font-bold underline">
          Hello world! I am Sajin
        </h1>
      </div>
      <Footer />
    </>
  )
}

export default Home