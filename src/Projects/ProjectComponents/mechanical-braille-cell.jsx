import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Mechanical Braille Cell using FPGA Board";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2  flex flex-col gap-2">
                
                <figure className="my-9 mx-8 text-base text-center text-gray-600">
                    <img 
                        src="/figures/braille/prototype.jpg"
                        alt=""
                        className="w-90 md:w-130 mx-auto my-3  rounded-sm"
                    />
                    
                </figure>

                <h4 className="text-xl font-semibold mt-7 mb-3">Features</h4>
                <ul className="list-disc pl-5 sm:pl-8 my-2">
                    <li>A mechanical Braille cell that can dynamically change its output based on the input character.</li>
                    <li>The cell contains 6 pins that are each connected to a seperate servo motor.</li>
                    <li>An FPGA board provides the PWM signals.</li>
                    <li>Each character is represented by a specific pattern having some pins be lowered and the rest be elevated.</li>
                    <li>By feeling the pattern, a visually impaired person can know which character is currently being shown.</li>
                    <li>A pin can be lowered or elevated by changing the duty cycle of the PWM signal provided to the corresponding servo.</li>
                    

                </ul>
                <figure className="my-9 mx-8 text-base text-center text-gray-600">
                    <img 
                        src="/figures/braille/final_setup.png"
                        alt=""
                        className="w-100 md:w-130 mx-auto my-3"
                    />
                    Final Setup
                </figure>

            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://drive.google.com/file/d/1j9XDCl0m9Ev8cXF9ME-EfVhXZsfKRDLn/view?usp=sharing"> Detailed report with source code <HiOutlineExternalLink className="inline-block align-top mt-1.25 sm:mt-2" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content