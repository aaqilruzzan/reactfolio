import React from "react";

function article_1() {
	return {
		date: "23 Feb 2024",
		title: "How to implement JWT authentication with the MERN stack",
		description:
			"An in-depth and beginner-friendly guide into implementing JWT Authentication with the MERN stack to help any developer to get started in the realm of Web Security.",
		keywords: ["JWT authentication", "Aaqil Ruzzan"],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "15 Jan 2024",
		title: "Cyber Security for Websites",
		description:
			"This article outlines essential strategies for businesses to protect their websites against evolving cyber threats. Integration of technical and non-technical measures for a robust security posture is being discussed.",
		style: ``,
		keywords: ["cyber security", "Aaqil", "Aaqil Ruzzan"],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "12 Feb 2024",
		title: "What is JWT and what does it do?",
		description:
			"A theoretical understanding of JSON Web Tokens and the process of how it's used in Web Applications. Pros and Cons of JSON Web tokens, Best practices are also included for further understanding.",
		style: ``,
		keywords: ["cyber security", "Aaqil", "Aaqil Ruzzan"],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
