import React from "react";
import "./Button.css";

export default function Button({
	text,
	className,
	href,
	newTab,
	downloadClass = false,
}) {
	return (
		<div className={className}>
			<a className="main-button" href={href} target={newTab && "_blank"}>
				{text}
				{downloadClass ? (
					<>
						<span>{"  "}</span>
						<i className="fas fa-download"></i>
					</>
				) : (
					""
				)}
			</a>
		</div>
	);
}
