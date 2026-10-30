import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Three-Body Dynamics: Modeling the Interactions of Point Particles";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-lg sm:leading-8 sm:pl-2  flex flex-col gap-2">

                <figure className="m-9 text-base text-center text-gray-600">
                    <img 
                        src="/figures/three_body_problem/interface.png"
                        alt=""
                        className="w-130 mx-auto my-3"
                    />
                    Fig 1: Input interface
                </figure>

                <h4 className="text-xl font-semibold mt-5">Features</h4>
                <ul className="list-disc pl-5 sm:pl-8 my-2">
                    <li>MATLAB simulation of the three body problem.</li>
                    <li>The user can provide the initial positions and velocities of the three bodies through the input interface as shown in Fig-1.</li>
                    <li>A real-time simulation of their motions for a certain duration of time is displayed. </li>
                    <li>Supports both 3D and 2D motions (taken along any of 2 defined axes).</li>
                </ul>

                <div className="flex flex-wrap justify-center m-9 gap-3">
                    <figure className="text-base text-center text-gray-600">
                        <img 
                            src="/figures/three_body_problem/simulation.png"
                            alt=""
                            className="w-110 my-3 bg-white"
                        />
                        Fig 2(a): 3D Simulation
                    </figure>
                    <figure className="text-base text-center text-gray-600">
                        <img 
                            src="/figures/three_body_problem/simulation_2D.png"
                            alt=""
                            className="w-110 my-3 bg-white"
                        />
                        Fig 2(b): 2D (X-Y) Simulation
                    </figure>
                </div>

            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://drive.google.com/file/d/1KIjVEcJX0IBi7ZzfH83vZ3FPtFvCNyvs/view?usp=sharing"> Detailed report with source code <HiOutlineExternalLink className="inline-block align-top mt-1.25 sm:mt-2" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content