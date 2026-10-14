import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

function Home() {

  return (
    <>
      <Navbar activePage='/' />
      <div className="flex flex-col min-h-screen items-stretch gap-10 py-8 px-4.75 sm:px-10 xl:px-50">
        <div className="flex flex-col items-center">
          <img 
            src="/Profile Photo.jpg"
            alt="Photo"
            className="w-60 rounded-full  mt-3 mb-6"
          />
          <h2 className="text-xl sm:text-3xl font-sans text-gray-900 leading-10 font-semibold">Mohammed Irtisam Sajin</h2>
          <p className="text-base sm:text-lg text-gray-600">EEE Graduate</p>
        </div>
        
        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-wrap justify-center px-2 gap-3 sm:gap-5">            
            <div className="flex gap-2 justify-start items-center text-gray-950 hover:text-gray-950">
              <img 
                src="/email.png"
                alt="Email Logo"
                className="w-5.5"
              /> irtisam.sajin@gmail.com
            </div>
            <div className="flex gap-2 justify-start items-center text-gray-950 hover:text-gray-950">
              <img 
                src="/phone.png"
                alt="Phone Logo"
                className="w-4.75"
              /> +8801684944952
            </div>
            
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-base ">
            <a href="https://www.linkedin.com/in/irtisamsajin/" className="flex gap-2 justify-start items-center text-gray-600 hover:text-gray-950">
              <img 
                src="/linkedin.png"
                alt="LinkedIn Logo"
                className="w-5.5 sm:w-6.5"
              /> 
            </a>
            <a href="https://github.com/irtisamsajin" className="flex gap-2 justify-start items-center text-gray-600 hover:text-gray-950">
              <img 
                src="/github.png"
                alt="LinkedIn Logo"
                className="w-5.5 sm:w-6.5"
              />
            </a>
            <a href="https://www.facebook.com/irtisamsajin/" className="flex gap-2 justify-start items-center text-gray-600 hover:text-gray-950">
              <img 
                src="/facebook.png"
                alt="Facebook Logo"
                className="w-5.5 sm:w-6.5"
              /> 
            </a>
            <a href="https://www.instagram.com/irtisamsajin" className="flex gap-2 justify-start items-center text-gray-600 hover:text-gray-950">
              <img 
                src="/instagram.png"
                alt="Instagram Logo"
                className="w-5.5 sm:w-6.5"
              /> 
            </a>
            <a href="https://codeforces.com/profile/sajin10" className="flex gap-2 justify-start items-center text-gray-600 hover:text-gray-950">
              <img 
                src="/codeforces.png"
                alt="Codeforces Logo"
                className="w-5.5 sm:w-6.5"
              />
            </a>
            <a href="/Mohammed_Irtisam_Sajin.pdf" className="flex gap-1 justify-start items-center text-gray-600">
              <img 
                src="/cv.png"
                alt="CV Logo"
                className="w-5.5 sm:w-6.5"
              /> CV
            </a>
          </div>

          
        </div>

        <div className="text-base sm:text-lg leading-7 sm:leading-8 sm:px-2">
          <h3 className="text-lg sm:text-xl font-semibold ">
            About me
          </h3> 

          <p>
          I am a recent graduate based in Dhaka, Bangladesh. 
          My academic and practical experience spans a range of fields, including Machine Learning, Signal Processing, Embedded Systems, Microprocessors, and Robotics.
          Beyond academics, I have participated in programming contests, achieved Specialist rank on Codeforces, built full-stack applications, and contributed to open-source.
          </p>

          <p>
          Driven by my background in EEE and my curiosity about computing systems, I am particularly interested in designing hardware-software architectures and efficient systems that meet the demands of modern applications.
          </p>

        </div>
        <div className="text-base sm:text-lg leading-7 sm:leading-8 sm:px-2">
          <h3 className="text-lg sm:text-xl font-semibold ">
            Current Focus
          </h3>
          <ul className="list-disc pl-5 sm:pl-8 my-2">
            <li>Builiding a personal portfolio</li>
            <li>Hands-on Embedded Programming</li>
          </ul>
        </div>
        
        
      </div>

      <Footer />
    </>
  )
}

export default Home