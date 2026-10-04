function Keywords({words}){
    return (
        <div className="flex flex-wrap py-2 text-sm md:text-base">
            {words.map((word) => (
                <div className="bg-slate-200 p-2 rounded-xl text-sky-950 m-1">{word}</div>
            ))}
        </div>
    )
}

export default Keywords