
function Content(){
    const title="";
    const date=""; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2  flex flex-col gap-2">
                <p></p>

                <ul className="list-disc pl-5 sm:pl-8 my-2"></ul>

                <h4 className="text-xl font-semibold mt-7 mb-3"></h4>

                <figure className="m-9 text-base text-center text-gray-600">
                    <img 
                        src=""
                        alt=""
                        className="w-110 mx-auto my-3 rounded-sm border border-neutral-200 bg-white"
                    />
                    Caption
                </figure>

                <a href="" className="underline">Caption</a>

            </div>
            <div className="text-base sm:text-lg leading-6 sm:leading-8 mt-5 ml-2 sm:ml-4 text-gray-600">
                References:
                <ul className="list-disc pl-8 sm:pl-10">
                    <li></li>
                    <li><a href="" className="flex items-center gap-2 inline-flex">Raised Issue {/* <HiOutlineExternalLink /> */}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Content