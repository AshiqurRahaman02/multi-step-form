import React from "react";

function Information({ data, setActive }) {
	console.log(data);
	return (
		<div className="text-center">
			<div className="flex flex-wrap m-4 items-center">
				<div className="w-full md:w-1/2">
					<img src={data.image} alt="" />
				</div>
				<div className="w-full md:w-1/2 px-4">
					<h2 className="text-2xl font-bold mb-4">{data.header}</h2>
					{data.reviewBy && (
						<>
							<img src={data.reviewImage} alt="" className="m-auto"/>
						</>
					)}
					{data.reviewBy ? <p>{`" `}{data.text}{` "`}</p>:<p>{data.text}</p>}
					{data.reviewBy && <p>{"- "}{data.reviewBy}</p>}
				</div>
			</div>
					<div>
						<button
							className={`py-2 px-4 mt-4 text-white rounded border hover:bg-black-600 w-max bg-black`}
							onClick={() => {
								setActive((pre) => pre + 1);
							}}
						>
							Continue
						</button>
					</div>
		</div>
	);
}

export default Information;
