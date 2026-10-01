import { useState } from "react"
import Navbar from "../Components/Navbar"
import Keywords from "../Components/Keywords";
import Certificate from "../Components/Certificate";

function Profile() {
  const [viewBscCourses, setViewBscCourses]=useState(false);
  const buetCourses=['Artificial Intelligence & Machine Learning','Robotics & Automation','Microprocessors & Embedded Systems',
    'Digital Electronics','Digital Signal Processing','Random Signals & Processes','Continuous Signals & Linear Systems',
    'Control Systems'
  ];
  
  const programmingLanguages=['C/C++','Python','JavaScript','MATLAB', 'Assembly','Verilog'];
  const frameworks=['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'React', 'NodeJS', 'Django'];
  const dataAnalysis=['Pandas', 'NumPy', 'SQL', 'MongoDB'];
  const tools=['PSpice', 'Arduino', 'Kaggle', 'AutoCAD', 'Quartus', 'Simulink', 'Git & Github']
  const hardware=[ 'Microcontrollers', 'FPGA', 'Embedded Systems', 'Sensor Interfacing'];

  return (
    <>
      <Navbar activePage='/profile' />
      <div className="flex flex-col min-h-screen items-stretch gap-15 py-8 px-4.75 sm:px-10 xl:px-50">

        {/* Education */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold ">
            <div className="flex items-end">
              <div className="text-4xl sm:text-5xl">E</div>
              <div>ducation</div>
            </div>
          </h1>
          
          {/* BUET */}
          <div className="py-4 px-2 sm:px-5">
            <div className="flex justify-between gap-3 mb-2 sm:mb-1">
              <a href="https://www.buet.ac.bd/web/" className="text-md sm:text-lg lg:text-xl font-medium">
                Bangladesh University of Engineering and Technology (BUET)
              </a>
              <p className="hidden md:block text-gray-500 text-sm lg:text-md ">
                Jan 2022 - Jun 2026
              </p>
            </div>
            <div className="flex flex-col px-2 gap-1">
              <p className="hidden sm:block text-sm sm:text-base md:text-md text-lg text-gray-500">Bachelor of Science (B.Sc) in Electrical and Electronic Engineering (EEE)</p>
              <p className="sm:hidden text-sm sm:text-base md:text-md text-lg text-gray-500">B.Sc in Electrical and Electronic Engineering (EEE)</p>
              <p className="text-sm sm:text-base md:text-md text-lg text-gray-500">CGPA: 3.65 / 4.00</p>
              <p className="md:hidden text-gray-500 text-sm sm:text-base">
                  Jan 2022 - Jun 2026
              </p>
            </div>
            <div className="mt-2 px-2">              
              <button className="flex text-gray-500 text-sm sm:text-base md:text-md text-lg cursor-pointer transition duration-300 border-1 rounded-sm px-2 pt-0.25 pb-0.75 " onClick={() => setViewBscCourses(!viewBscCourses)} >
                  <div className="text-md">Courses</div>
                  <div className="flex relative w-7">
                      
                      <div
                          className={`absolute inset-0 pt-0.25 pl-1 transition-all duration-300 ${
                              viewBscCourses
                                  ? 'opacity-0 rotate-90 scale-75'
                                  : 'opacity-100 rotate-0 scale-100'
                          }`}
                      >
                         <div className="rotate-270 ">く</div>
                      </div>

                      <div
                          className={`absolute inset-0 pt-0.25 pl-1 transition-all duration-300 ${
                              viewBscCourses
                                  ? 'opacity-100 rotate-0 scale-100'
                                  : 'opacity-0 -rotate-90 scale-75'
                          }`}
                      >
                          <div className="rotate-90 ">く</div>
                      </div>
                      
                  </div>
                  
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    viewBscCourses
                        ? 'max-h-120 opacity-100 pt-2 pb-4 '
                        : 'max-h-0 opacity-0 py-0 pointer-events-none'
                }`}>
                <Keywords words={buetCourses} />
              </div>
            </div>
          </div>

          {/*NDC */}
          <div className="py-4 px-2 sm:px-5">
            <div className="flex justify-between mb-2 gap-3 sm:mb-1">
              <a href="https://ndc.edu.bd/" className="text-md sm:text-lg lg:text-xl font-medium">
                Notre Dame College, Dhaka
              </a>
              <p className="hidden md:block text-gray-500 text-sm lg:text-md ">
                Jul 2018 - Jan 2021
              </p>
            </div>
            <div className="flex flex-col px-2 gap-1">
              <p className="text-sm sm:text-base md:text-md text-lg text-gray-500">Higer Secondary Certificate (HSC) in Science</p>
              <p className="text-sm sm:text-base md:text-md text-lg text-gray-500">GPA: 5.00 / 5.00</p>
              <p className="md:hidden text-gray-500 text-sm sm:text-base">
                  Jul 2018 - Jan 2021
              </p>
            </div>
          </div>

          {/*Rajuk */}
          <div className="py-4 px-2 sm:px-5">
            <div className="flex justify-between mb-2 gap-3 sm:mb-1">
              <a href="https://rajukcollege.edu.bd/" className="text-md sm:text-lg lg:text-xl font-medium">
                Rajuk Uttara Model College
              </a>
              <p className="hidden md:block text-gray-500 text-sm lg:text-md ">
                Jan 2016 - Jun 2018
              </p>
            </div>
            <div className="flex flex-col px-2 gap-1">
              <p className="text-sm sm:text-base md:text-md text-lg text-gray-500">Secondary School Certificate (SSC) in Science</p>
              <p className="text-sm sm:text-base md:text-md text-lg text-gray-500">GPA: 5.00 / 5.00</p>
              <p className="md:hidden text-gray-500 text-sm sm:text-base">
                  Jan 2016 - Jun 2018
              </p>
            </div>
          </div>

        </div>
        
        {/* Skills */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold ">
            <div className="flex items-end">
              <div className="text-4xl sm:text-5xl">S</div>
              <div>kills</div>
            </div>
          </h1>
          <div className="flex flex-col gap-1 mt-4">     
            <div className="px-2 pt-2 sm:px-5">
                <p className="text-md sm:text-lg lg:text-xl font-medium">
                    Programming Languages
                </p>           
                <Keywords words={programmingLanguages} />
            </div>
            <div className="px-2 pt-2 sm:px-5">
                <p className="text-md sm:text-lg lg:text-xl font-medium">
                    Frameworks & Libraries
                </p>           
                <Keywords words={frameworks} />
            </div>
            <div className="px-2 pt-2 sm:px-5">
                <p className="text-md sm:text-lg lg:text-xl font-medium">
                    Data Analysis
                </p>           
                <Keywords words={dataAnalysis} />
            </div>
            <div className="px-2 pt-2 sm:px-5">
                <p className="text-md sm:text-lg lg:text-xl font-medium">
                    Tools
                </p>           
                <Keywords words={tools} />
            </div>
            <div className="px-2 pt-2 sm:px-5">
                <p className="text-md sm:text-lg lg:text-xl font-medium">
                    Hardware
                </p>           
                <Keywords words={hardware} />
            </div>
          </div>
        </div>

        {/* Certification */}
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-semibold ">
            <div className="flex items-end">
              <div className="text-4xl sm:text-5xl">C</div>
              <div>ertifications</div>
            </div>
          </h1>
          <div className="flex flex-col p">
            <Certificate 
              name='Machine Learning Specialization'
              organization='DeepLearning.AI'
              link='https://www.coursera.org/account/accomplishments/specialization/SCSQWX4W386B'
              issueDate='Nov 2023'
              skills={['Machine Learning','Deep Learning','Numpy','TensorFlow']}
            />
            <Certificate 
              name='CS50: Introduction to Programming with Python'
              organization='Harvard University'
              link='https://certificates.cs50.io/55ecec5c-b5ee-4b02-9b32-ae3f850f4577.pdf?size=letter'
              issueDate='May 2023'
            />
            <Certificate 
              name='Pandas Certification'
              organization='Kaggle'
              link='https://www.kaggle.com/learn/certification/mohammedirtisamsajin/pandas'
              issueDate='Jun 2024'
            />
          </div>
                
        </div>

      </div>
    </>
  )
}

export default Profile