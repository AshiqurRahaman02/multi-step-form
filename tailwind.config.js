/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			spacing: {
				128: "32rem",
        256: "64rem"
			},
		},
	},
	plugins: [],
};
