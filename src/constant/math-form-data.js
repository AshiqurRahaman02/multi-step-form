const mathFormData = [
	{
		type: "question1",
		header: "Which describes you best?",
		text: "This will help us personalize your experience",
		options: [
			{ text1: "Student", text2: "or soon to be enrolled" },
			{ text1: "Professional", text2: "or soon to be enrolled" },
			{ text1: "Parent", text2: "or soon to be enrolled" },
			{ text1: "Lifelong learner" },
			{ text1: "Teacher" },
			{ text1: "Other" },
		],
	},
	{
		type: "question1",
		header: "Which are you most interested in?",
		text: "Choose just one. This will help us get you started (but won't limit your experience).",
		options: [
			{ text1: "Learning specific skills to advance my career" },
			{ text1: "Exploring new topics I'm interested in" },
			{ text1: "Refreshing my math foundations" },
			{ text1: "Exercising my brain to stay sharp" },
			{ text1: "Something else" },
		],
	},
	{
		type: "information",
		header: "You're in the right place",
		text: "Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.",
		image: "/assets/images/liver.png",
	},
	{
		type: "question2",
		header: "What is your math comfort level?",
		text: "Choose the highest level you feel confident in — you can always adjust later.",
		options: [
			{
				text1: "Arithmetic",
				text2: "Introductory",
				image: "/assets/images/basic-math.png",
			},
			{
				text1: "Basic Algebra",
				text2: "Foundational",
				image: "/assets/images/basic-math.png",
			},
			{
				text1: "Intermediate Algebra",
				text2: "Intermediate",
				image: "/assets/images/advanced-math.png",
			},
			{
				text1: "Calculus",
				text2: "Advanced",
				image: "/assets/images/advanced-math.png",
			},
		],
	},
	{
		type: "information",
		header: "You're on your way!",
		text: "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations.",
		reviewImage: "/assets/images/review.png",
		reviewBy: "Jacob S",
		image: "/assets/images/review2.png",
	},
	{
		type: "finding",
		text: "Finding learning path recommendations for you based on your responses",
	},
	{
		type: "final",
		header: "What is your math comfort level?",
		text: "Choose the highest level you feel confident in — you can always adjust later.",
		options: [
			{
				text1: "Foundational Math",
				text2: "Build your foundational skills in algebra, geometry, and probability.",
				image: "/assets/images/mathcourse.png",
			},
			{
				text1: "Mathematical Thinking",
				text2: "Build your foundational skills in algebra, geometry, and probability.",
				image: "/assets/images/mathcourse.png",
			},
		],
	},
];

export default mathFormData;
