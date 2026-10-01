function Keywords({words}){
    return (
        <div className="flex flex-wrap py-4 text-sm md:text-md">
            {words.map((word) => (
                <div className="bg-slate-300 p-2 rounded-xl text-sky-950 m-1">{word}</div>
            ))}
        </div>
    )
}

export default Keywords