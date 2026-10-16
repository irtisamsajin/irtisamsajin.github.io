import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Analog Signal Encoding using Delta Modulation and Demodulation";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2  flex flex-col gap-2">

                <figure className="mt-9 m-2 md:m-9 text-base text-center text-gray-600">
                    <img 
                        src="/figures/delta_mod/simulation.png"
                        alt=""
                        className="w-full mx-auto my-3"
                    />
                    
                </figure>

                <h4 className="text-xl font-semibold mt-7 mb-3">Features</h4>

                <ul className="list-disc pl-5 sm:pl-8 my-2">
                    <li>Design and verification of a Delta Modulation system along with a Demodulator. </li>
                    <li>Simulation of the system was done using PSpice and the signal at all the nodes were observed.</li>
                    <li>The model was then physically implemented on Breadboards using 555 Timer, D Flip-Flop, Operational Amplifiers and other electronic components.</li>
                </ul>

            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://drive.google.com/file/d/1gzljaoHB2sSa-dT5VxT6CULrSwRb60PK/view?usp=sharing">Detailed Report <HiOutlineExternalLink className="inline-block align-top mt-1.25 sm:mt-2" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content