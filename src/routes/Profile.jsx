import Navbar from "../Components/Navbar"

function Profile() {

  return (
    <>
      <Navbar activePage='/profile' />
      <div className="flex flex-col min-h-screen items-stretch gap-3 py-16 px-10 md:px-10 lg:px-50">

        {/* Education */}
        <div>
          <h1 className="text-2xl font-semibold ">
            Education
          </h1>
          
          {/* BUET */}
          <div className="py-4 px-2 sm:px-5 font-sans">
            <div className="flex justify-between mb-2 sm:mb-0">
              <a href="https://www.buet.ac.bd/web/" className="text-md sm:text-lg lg:text-xl font-medium">
                Bangladesh University of Engineering and Technology (BUET)
              </a>
              <p className="hidden md:block text-gray-500 text-sm lg:text-md ">
                Jan 2022 - Jun 2026
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm sm:text-base md:text-md text-lg">Bachelor of Science (B.Sc) in Electrical and Electronic Engineering (EEE)</p>
              <p className="text-sm sm:text-base md:text-md text-lg">CGPA: 3.65 / 4.00</p>
              <p className="md:hidden text-gray-500 text-sm sm:text-base">
                  Jan 2022 - Jun 2026
              </p>
              <div className="flex flex-wrap py-4 text-sm md:text-md">
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Artificial Intelligence and Machine Learning</div>
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Microprocessors and Embedded Systems</div>
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Robotics and Automation</div>
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Digital Electronics</div>
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Digital Signal Processing</div>
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Random Signals and Processes</div>
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Continuous Signals and Linear Systems</div>
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">Control Systems</div>
              </div>
            </div>
          </div>

          {/*NDC */}
          <div className="py-4 px-2 sm:px-5 font-sans">
            <div className="flex justify-between mb-2 sm:mb-0">
              <a href="https://ndc.edu.bd/" className="text-md sm:text-lg lg:text-xl font-medium">
                Notre Dame College, Dhaka
              </a>
              <p className="hidden md:block text-gray-500 text-sm lg:text-md ">
                Jul 2018 - Jan 2021
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm sm:text-base md:text-md text-lg">Higer Secondary Certificate (HSC) in Science</p>
              <p className="text-sm sm:text-base md:text-md text-lg">GPA: 5.00 / 5.00</p>
              <p className="md:hidden text-gray-500 text-sm sm:text-base">
                  Jul 2018 - Jan 2021
              </p>
            </div>
          </div>

          {/*Rajuk */}
          <div className="py-4 px-2 sm:px-5 font-sans">
            <div className="flex justify-between mb-2 sm:mb-0">
              <a href="https://rajukcollege.edu.bd/" className="text-md sm:text-lg lg:text-xl font-medium">
                Rajuk Uttara Model College
              </a>
              <p className="hidden md:block text-gray-500 text-sm lg:text-md ">
                Jan 2016 - Jun 2018
              </p>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm sm:text-base md:text-md text-lg">Secondary School Certificate (SSC) in Science</p>
              <p className="text-sm sm:text-base md:text-md text-lg">GPA: 5.00 / 5.00</p>
              <p className="md:hidden text-gray-500 text-sm sm:text-base">
                  Jan 2016 - Jun 2018
              </p>
            </div>
          </div>

        </div>
        
       
      </div>
    </>
  )
}

export default Profile