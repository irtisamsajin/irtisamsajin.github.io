
function Content(){
    const title="PATHOK: A Bangla Handwritten and Scene Text Recognition Model using Grapheme Tokenization";
    const date="June 2026"; //January 5, 2026

    return (
        <div className="sm:px-2">
            <h2 className="text-xl sm:text-2xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 sm:pl-2">{date}</p>

            <div className="text-base leading-7 sm:text-xl sm:leading-8 sm:pl-2">
                <p></p>

            </div>
            <div className="text-lg leading-7 sm:text-xl sm:leading-8 m-8">
                Resources:
                <ul className="list-disc pl-8 my-1">
                    <li>Paper</li>
                </ul>
            </div>
        </div>
    )
}

export default Content