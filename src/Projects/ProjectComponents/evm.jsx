import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Electronic Voting Machine with Fingerprint Authentication";
    const date=""; //January 5, 2026

   return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2  flex flex-col gap-2">

                <figure className="mx-4 md:mx-8 mt-9 text-base text-center text-gray-600">
                    <img 
                        src="/figures/evm/block_diagram.png"
                        alt=""
                        className="w-150 mx-auto my-3"
                    />
                    
                </figure>

                <h4 className="text-xl font-semibold mt-7 mb-3">Features</h4>
                <ul className="list-disc pl-5 sm:pl-8 my-2">
                    <li>Two devices were developed: A slave device for casting votes and a master device maintaing and displaying live vote counts.</li>
                    <li>Fingerprint authentication to verify voter and prevention of multiple voting attempts by the same user.</li>
                    <li>The display on the slave device would show the candidates and their symbols.</li>
                    <li>A rotary encoder is used to navigate and select desired candidate.</li>
                    <li>The slave device sends casted vote to the master device through UART communication</li>

                </ul>

                <figure className="m-9 text-base text-center text-gray-600">
                    <img 
                        src="/figures/evm/prototype.png"
                        alt=""
                        className="w-80 mx-auto my-3"
                    />
                    Prototype testing
                </figure>


            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://drive.google.com/file/d/1SZxG6T_Jlmpa7JEl7HjKF1htyXoESLOK/view?usp=sharing">Detailed report with source code <HiOutlineExternalLink className="inline-block align-top mt-1.25 sm:mt-2" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content