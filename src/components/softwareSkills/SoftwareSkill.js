import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
	return (
		<div>
			<div className="software-skills-main-div">
				<ul className="dev-icons">
					{skillsSection.softwareSkills.map((skills, i) => {
						return (
							<li
								key={i}
								className="software-skill-inline"
								name={skills.skillName}
							>
								<a
									style={{ display: "table-cell" }}
									href={skills?.skillUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className={skills.fontAwesomeClassname}></i>
									<p>{skills.skillName}</p>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
