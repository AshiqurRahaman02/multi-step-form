import React, { useState } from "react";

function Question2({ data, setActive }) {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleOptionSelect = (index) => {
		setSelectedOption(index);
	};

	const isButtonDisabled = selectedOption === null;
	return (
		<div
			className=" mx-auto bg-white rounded-lg  p-6 text-center"
			style={{ maxWidth: "600px" }}
		>
			<h2 className="text-2xl font-bold mb-4">{data.header}</h2>
			<p className="mb-4">{data.text}</p>
			<div className="flex  gap-1">
				{data.options.map((option, i) => (
					<div
						key={i}
						className={` ${
							selectedOption === i ? "shadow-lg " : "border"
						} p-4 w-96`}
						onClick={() => handleOptionSelect(i)}
						style={{
							cursor: "pointer",
							border: selectedOption === i ? "2px solid #E6DEC0" : "",
						}}
					>
						<img src={option.image} alt=""  />
						<p>
							<span
								className={`font-bold 
								
								`}
							>
								{option.text1}{" "}
							</span>
							<span className="opacity-70">{option.text2}</span>
						</p>
					</div>
				))}
			</div>
			<button
				className={`py-2 px-4 mt-4 text-white rounded border hover:bg-black-600 w-max ${
					isButtonDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-black"
				}`}
				disabled={isButtonDisabled}
				onClick={() => {
					if (!isButtonDisabled) {
						setSelectedOption(null);
						setActive((pre) => pre + 1);
					}
				}}
			>
				Continue
			</button>
		</div>
	);
}

export default Question2;
