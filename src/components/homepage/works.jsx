import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="../Win-Authority-Logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Win Authority</div>
							<div className="work-subtitle">
								Software Engineering Intern <br /> (Part-Time)
							</div>
							<div className="work-duration">
								2023 November - Present
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
