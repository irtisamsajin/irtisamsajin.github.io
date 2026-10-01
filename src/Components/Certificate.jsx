import Keywords from "./Keywords"

function Certificate(props){
    return (
        <>
        <div className="py-4 px-2 sm:px-5">
            <div className="flex justify-start items-center mb-2 gap-2 sm:mb-0">
            
              <p className="text-md sm:text-lg lg:text-xl font-medium">
                {Object.hasOwn(props,'link') &&  (<a href={props.link} className="text-gray-400 hover:text-gray-950 text-sm lg:text-md ">
                🔗
              </a>)} {props.name} 
              </p>

               
            </div>
            <div className="flex flex-col px-2 gap-0.5">
              <p className="text-sm sm:text-base md:text-md text-lg font-medium">{props.organization}</p>
              {Object.hasOwn(props,'issueDate') && (<p className="text-gray-500 text-sm sm:text-base">
                  {props.issueDate}
              </p>)}
              {(Object.hasOwn(props,'skills')) && <Keywords words={props.skills} />}
            </div>
        </div>
        </>
        
    )
}

export default Certificate
