import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import mathFormData from "../constant/math-form-data";
import Question1 from "./Question1";
import Information from "./Information";
import Question2 from "./Question2";
import Finding from "./Finding";
import Final from "./Final";

function Form() {
	const data = mathFormData;

	const [active, setActive] = useState(6);

	return (
		<div style={{ maxWidth: "1000px" }} className="m-auto mt-16 p-8">
			{data[active].type !== "finding" && data[active].type !== "final" && (
				<div className="relative">
					{ active > 0 && <span className="absolute -top-2 cursor-pointer" onClick={()=>setActive((pre)=>pre-1)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 19.5 8.25 12l7.5-7.5"
							/>
						</svg>
					</span>}

					<LinearProgress
						className="ml-8"
						variant="determinate"
						color="success"
						value={(active + 1) * (100 / (data.length - 2))}
					/>
				</div>
			)}

			<div>
				{data[active].type === "question1" && (
					<Question1 data={data[active]} setActive={setActive} />
				)}
				{data[active].type === "question2" && (
					<Question2 data={data[active]} setActive={setActive}  />
				)}

				{data[active].type === "information" && (
					<Information data={data[active]}  setActive={setActive} />
				)}

				{data[active].type === "finding" && <Finding data={data[active]} setActive={setActive} />}

				{data[active].type === "final" && <Final data={data[active]} setActive={setActive} />}
			</div>
		</div>
	);
}

export default Form;
