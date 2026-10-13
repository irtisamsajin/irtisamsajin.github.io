
function Content(){
    const title="Getting Started with Embedded Systems";
    const date="January 5, 2026";

    return (
        <div className="px-2">
            <h2 className="text-3xl font-semibold ">{title}</h2>
            <p className="text-gray-500 text-sm sm:text-base my-2 pl-2">{date}</p>
            <div className="text-lg leading-7 sm:text-xl sm:leading-8 pl-2">
                <p>Pellentesque consequat mattis dui et tempor. Nunc rhoncus dolor id blandit dignissim. Nullam malesuada vel massa sit amet imperdiet. Ut dignissim ultrices pellentesque. Donec eu pulvinar dolor, placerat bibendum justo. Fusce risus ipsum, imperdiet at hendrerit ultrices, viverra sagittis turpis.</p>
                <ul className="list-disc pl-8 my-2">
                    <li>Morbi at tempus lorem, sed fermentum odio</li>
                    <li>Nunc convallis volutpat magna. Nulla egestas nulla vel diam volutpat feugiat. In cursus feugiat libero, sed dapibus quam. Mauris diam augue</li>
                    <li>Donec porttitor lacus at neque auctor, sed suscipit augue cursus. Nam consectetur commodo erat eget posuere. Etiam auctor semper viverra.</li>
                </ul>
                <h4 className="text-xl font-semibold mt-7 mb-3">Aenean vestibulum orci elit, vitae viverra est consectetur</h4>
                <p>Pellentesque lacinia ante pharetra varius viverra. Quisque tristique est eleifend lacus vestibulum, non tempor nulla aliquam. Nullam vitae congue augue. Curabitur tristique lorem non pharetra vulputate. Sed ac consectetur ipsum. Suspendisse sed malesuada enim. Nulla semper nulla metus, id dignissim est porta ac. Ut sed egestas ipsum. Quisque volutpat nulla nec elementum dapibus. Praesent laoreet felis sit amet risus varius laoreet.</p>
                <figure className="m-9 text-base text-center text-gray-600">
                    <img 
                        src="/public/figures/Generator Specification Plate.jpeg"
                        alt="Image"
                        className="w-110 mx-auto my-3 rounded-sm border border-neutral-200 bg-white"
                    />
                    Caption
                </figure>

                <p>Pellentesque consequat mattis dui et tempor. Nunc rhoncus dolor id blandit dignissim. Nullam malesuada vel massa sit amet imperdiet. Ut dignissim ultrices pellentesque. Donec eu pulvinar dolor, placerat bibendum justo. Fusce risus ipsum, imperdiet at hendrerit ultrices, viverra sagittis turpis.</p>
                
                <a href="" className="underline">Caption</a>

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