import { HiOutlineExternalLink } from "react-icons/hi";

function Content(){
    const title="Currency Converter Chrome Extension";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2  flex flex-col gap-2">
                
                <p>A chrome extension that allows users to quickly convert between different currencies.
                It has over 200 active users on the chrome web store.</p>
                <h4 className="text-xl font-semibold mt-7 mb-3">Features:</h4>
                <figure className="m-2 text-base text-center text-gray-600">
                    <img 
                        src="/figures/currency_converter.png"
                        alt=""
                        className="w-90 mx-auto"
                    />
                    
                </figure>
                <ul className="list-disc pl-5 sm:pl-8 my-2">
                    <li>Real-time conversion with updated exchange rates fetched using Openexchangerates.org API.</li>
                    <li>Supports upto 170 different currencies.</li>
                </ul>
            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li><a href="https://chromewebstore.google.com/detail/currency-converter/kfajmjadkkhkihidkbffmomhjmcilpei" className="flex items-center gap-2 inline-flex">Chrome Web store <HiOutlineExternalLink /></a></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Content