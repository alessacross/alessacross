import React from "react";

const Subtask = ({ sub }) => (
	<div className="subtask">
		<p>{sub}</p>
		<input type="checkbox" onClick={(e) => e.stopPropagation()}/>
	</div>
)

export default Subtask;