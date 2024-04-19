import React, { useEffect } from "react";

function Finding({ data,setActive }) {
    useEffect(()=>{
        setTimeout(()=>{
            setActive((pre)=>pre+1)
        },5000)
    },[])
	return (
		<div
			className=" mx-auto bg-white rounded-lg  p-6 text-center flex flex-col items-center gap-8"
			style={{ maxWidth: "600px" }}
		>
			<div class="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
				<div class="rounded-full h-full w-full bg-white"></div>
			</div>
			<h2 className="text-2xl font-bold mb-4">{data.text}</h2>
		</div>
	);
}

export default Finding;
