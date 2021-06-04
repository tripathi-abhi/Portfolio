/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
	animated: true, // set to false to use static SVG
};

const greeting = {
	username: "Abhishek Tripathi",
	title: "Hi all, I'm Abhishek",
	subTitle: emoji(
		"A passionate Full Stack Software Developer, Freelancer and Competitive Coder 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Typescript / Reactjs / Nodejs, working with codes of C++ and some other cool libraries and frameworks. I love to code be it Development or Competitve coding."
	),
	resumeLink:
		"https://drive.google.com/file/d/1lj04VMd1ZzDKK0GcMzoT-BIFDSAooWIG/view?usp=sharing",
	displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: "https://github.com/tripathi-abhi",
	linkedin: "https://www.linkedin.com/in/abhishek-tripathi-95b9451a9/",
	gmail: "abhitripathi2312@gmail.com",
	// gitlab: "https://gitlab.com/",
	// facebook: "https://www.facebook.com/",
	// medium: "https://medium.com/@davidrakosi",
	// stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
	instagram: "https://www.instagram.com/tripathi_42/",
	// twitter: "https://twitter.com/davidrakosi_",
	display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER ANC COMPETITIVE CODER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji("⚡ Develop interactive, intuitive and responsive UI/UX Design"),
		emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
		emoji("⚡ Create life in static webpages using Transitions and Animations"),
		emoji("⚡ Integration of third party services such as Firebase/ AWS"),
		emoji(
			"⚡ Competitive coding on platforms like HackerRank, Codechef, Leetcode"
		),
	],

	/* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

	softwareSkills: [
		{
			skillName: "html-5",
			skillUrl: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
			fontAwesomeClassname: "fab fa-html5",
		},
		{
			skillName: "css3",
			skillUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
			fontAwesomeClassname: "fab fa-css3-alt",
		},
		{
			skillName: "sass",
			skillUrl: "https://sass-lang.com/",
			fontAwesomeClassname: "fab fa-sass",
		},
		{
			skillName: "JavaScript",
			skillUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
			fontAwesomeClassname: "fab fa-js",
		},
		{
			skillName: "Bootstrap",
			skillUrl: "https://getbootstrap.com/",
			fontAwesomeClassname: "fab fa-bootstrap",
		},
		{
			skillName: "reactjs",
			skillUrl: "https://reactjs.org/",
			fontAwesomeClassname: "fab fa-react",
		},
		{
			skillName: "git",
			skillUrl: "https://git-scm.com/",
			fontAwesomeClassname: "fab fa-git",
		},
		{
			skillName: "nodejs",
			skillUrl: "https://nodejs.org/en/",
			fontAwesomeClassname: "fab fa-node",
		},
		{
			skillName: "npm",
			skillUrl: "https://www.npmjs.com/",
			fontAwesomeClassname: "fab fa-npm",
		},
		{
			skillName: "sql-database",
			skillUrl: "https://www.w3schools.com/sql/sql_intro.asp",
			fontAwesomeClassname: "fas fa-database",
		},
		{
			skillName: "yarn",
			skillUrl: "https://yarnpkg.com/",
			fontAwesomeClassname: "fab fa-yarn",
		},
		{
			skillName: "firebase",
			skillUrl: "https://firebase.google.com/",
			fontAwesomeClassname: "fas fa-fire",
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: "Birla Institue of Technology",
			logo: require("./assets/images/myCollege.jpg"),
			subHeader: "Bachelors in Chemical Engineering and CSE (minor)",
			duration: "August 2018 - Present",
		},
		{
			schoolName: "Bhavan's K.D.K Vidya Mandir",
			logo: require("./assets/images/mySchool.jpg"),
			subHeader: "Master of Science in Computer Science",
			duration: "April 2015 - April 2017",
		},
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: "Frontend ", //Insert stack or technology you have experience in
			progressPercentage: "85%", //Insert relative proficiency in percentage
		},
		{
			Stack: "Backend",
			progressPercentage: "80%",
		},
		{
			Stack: "Competitve Programming",
			progressPercentage: "85%",
		},
	],
	displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: "Software Developer / Engineer",
			company: "Freelancer",
			companylogo: require("./assets/images/profile.jpg"),
			date: "November 2020 – Present",
			desc:
				"Code clean and clear codes for Interactive and Resposive websites.",
			descBullets: ["Custom building applications", "Animated UX/UI Design"],
		},
		{
			role: "General Secretary",
			company: "NSS BIT Mesra",
			companylogo: require("./assets/images/NSS.jpg"),
			date: "November 2020 – Present",
			desc: "Handling and managing various NSS events at BIT Mesra",
		},
	],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
	githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
	githubUserName: "tripathi-abhi", // Change to your github username to view your profile in Contact Section.
	showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
	display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: "Big Projects",
	subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
	projects: [
		{
			image: require("./assets/images/brandLogo.png"),
			projectName: "Cake Sabha",
			projectDesc: "Designed and built a bakery website",
			footerLink: [
				{
					name: "Visit Repo",
					url: "https://github.com/vaibhav-0027/CakeSabha",
				},
				//  you can add extra buttons here.
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: emoji("Achievements And Certifications 🏆 "),
	subtitle:
		"Achievements, Certifications and Some Cool Stuff that I have done !",

	achievementsCards: [
		{
			title: "ACM Bug Hunt",
			subtitle:
				"Runner up at an event named Bug Hunt Organised by ACM student chapter",
			image: require("./assets/images/acm.jpg"),
			footerLink: [
				{
					name: "What is ACM ?",
					url: "https://www.acm.org/about-acm",
				},
			],
		},
		{
			title: "React - Redux Certification",
			subtitle: "Completed Certifcation from LCO",
			image: require("./assets/images/learnCodeOnline.png"),
			footerLink: [
				{
					name: "Certification",
					url:
						"https://drive.google.com/file/d/1nf14hXbQt4AyLy-Ic-Nm_1h-yHtasCzx/view?usp=sharing",
				},
				{
					name: "Visit Course",
					url:
						"https://courses.learncodeonline.in/learn/home/Complete-ReactJS-developer-Bootcamp/section/79629/lesson/435140",
				},
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: "Blogs",
	subtitle:
		"With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

	blogs: [
		{
			url:
				"https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
			title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
			description:
				"Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
		},
		{
			url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
			title: "Why REACT is The Best?",
			description:
				"React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: "TALKS",
	subtitle: emoji(""),

	talks: [
		{
			title: "",
			subtitle: "",
			slides_url: "",
			event_url: "",
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: emoji("Podcast 🎙️"),
	subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

	// Please Provide with Your Podcast embeded Link
	podcast: [""],
	display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: emoji("Let's Meet ☕"),
	subtitle:
		"Wanna be my project partner, Need a lively website or Wanna have a cup of coffee ?",
	invite: "My Inbox is open for all 📧.",
	number: "+91 8932965474",
	email_address: "abhitripathi2312@gmail.com",
};

// Twitter Section

const twitterDetails = {
	userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
	display: false, // Set true to display this section, defaults to false
};

export {
	illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
};
