import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const TaskContainer = ({ body, id }) => (
	<div className="task" id={id}>
		<p>{body}</p>
	</div>
);

TaskContainer.propTypes = {
	body: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
};

export default TaskContainer;