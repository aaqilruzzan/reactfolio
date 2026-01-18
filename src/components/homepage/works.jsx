import React from "react";
import { faBriefcase, faBookOpen } from "@fortawesome/free-solid-svg-icons";

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
								alt="company logo"
								className="work-image"
							/>
							<div className="work-title">Win Authority</div>
							<div className="work-subtitle">
								Software Engineering Intern <br /> (Part-Time)
							</div>
							<div className="work-duration">
								2023 Nov - 2024 Apr
							</div>
						</div>
						<div className="work">
							<img
								src="../echonlabs logo.png"
								alt="company logo"
								className="work-image"
							/>
							<div className="work-title">Echonlabs</div>
							<div className="work-subtitle">
								Trainee Software Engineer <br /> (Full-Time)
							</div>
							<div className="work-duration">
								2024 Apr - 2025 Apr
							</div>
						</div>
					</div>
				}
			/>
			<div style={{ marginTop: "10px" }}></div>
			<Card
				icon={faBookOpen}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="dssc.png"
								alt="institution logo"
								className="work-image"
							/>
							<div className="work-title">
								D.S Senanayake College, Col-7
							</div>
							<div className="work-subtitle">
								Grade 1 - A/L <br />
							</div>
							<div className="work-duration">
								2008 Jan - 2022 Mar
							</div>
						</div>
						<div className="work">
							<img
								src="../esoftlogo.jpg"
								alt="institution logo"
								className="work-image"
							/>
							<div className="work-title">ESOFT Metro Campus</div>
							<div className="work-subtitle">
								Diploma in Software Engineering <br />
							</div>
							<div className="work-duration">
								2019 April - 2019 Sep
							</div>
						</div>
						<div className="work">
							<img
								src="../iit.png"
								alt="institution logo"
								className="work-image"
							/>
							<div className="work-title">IIT Sri Lanka</div>
							<div className="work-subtitle">
								BEng. Software Engineering (Reading) <br />
							</div>
							<div className="work-duration">
								2022 Sep - 2026 Apr
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
