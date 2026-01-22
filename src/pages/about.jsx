import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
//deploy trigger
const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									In Echonlabs Pvt. Ltd., <br />
									• Actively engineered and developed large-scale ERP systems and enterprise-level InsureTech products using Angular.js, Nest.js, and MongoDB.
									<br /><br />
									• Spearheaded modular developments and executed critical architectural changes to enhance system scalability and maintainability.
									<br /><br />
									• Integrated complex new features and addressed technical bugs based on direct client requirements to ensure high-performance product delivery.
									<br /><br />
									• Utilized GitLab CI/CD pipelines to automate testing and deployment processes, ensuring stable and reliable release cycles.
									<br /><br />
									• Collaborated within an agile environment to deliver secure, enterprise-grade software solutions adhering to industry best practices.
									<br /><br />
									In Win Authority LLC., <br />
									• Engineered a specialized web application within the legal domain and a robust Content Management System (CMS).
									<br /><br />
									• Developed dynamic, responsive front-end interfaces using React.js and Next.js, prioritizing seamless user experiences and high-performance rendering.
									<br /><br />
									• Leveraged MongoDB for efficient data modeling and management, ensuring high availability and reliability for diverse web projects.
									<br /><br />
									• Contributed to the full feature development lifecycle, spanning from initial conceptualization and coding to rigorous testing and production integration.
									<br /><br />
									• Applied clean code principles to build modular, scalable, and maintainable software components.
									<br /><br />
									• Maintained active version control and collaborative development through GitHub, documenting project progress and code enhancements.
								</div>

								<h2 class="mb-2 mt-4 text-lg font-semibold  dark:text-gray-500">
									Skills:
								</h2>
								<ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-500">
									<li>.NET Core</li>
									<li>React.js</li>
									<li>Next.js</li>
									<li>Angular.js</li>
									<li>TypeScript</li>
									<li>Node.js</li>
									<li>Express</li>
									<li>MongoDB</li>
									<li>SQL</li>
									<li>RESTful APIs</li>
									<li>Git Version Control</li>
								</ul>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="../challenges.jpg"
											alt="challenges"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
