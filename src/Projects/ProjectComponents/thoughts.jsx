import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Thoughts - A quick and simple tool to save your thoughts";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-lg sm:leading-8 sm:pl-2  flex flex-col gap-2">
                
                <figure className="mx-4 md:mx-8 mt-9 text-base text-center text-gray-600">
                    <img 
                        src="figures/thoughts.png"
                        alt=""
                        className="w-100 mx-auto my-3"
                    />
                </figure>
                
                <h4 className="text-xl font-semibold mt-5">Features</h4>

                <ul className="list-disc pl-5 sm:pl-8 my-2">
                    <li>A web application to quickly save your thoughts.</li>
                    <li>Supports authentication with live database.</li>
                    <li>Deployed on Vercel (frontend) and Render (backend).</li>
                    <li>Tools & Frameworks: React, Nodejs, Express, MongoDB.</li>
                </ul>

            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://github.com/irtisamsajin/Thoughts"> Code - Github <HiOutlineExternalLink className="inline-block align-top mt-1.25 sm:mt-2" /></a></li>
                    <li><a href="https://thoughts-five-khaki.vercel.app/"> Live Project <HiOutlineExternalLink className="inline-block align-top mt-1.25 sm:mt-2" /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content