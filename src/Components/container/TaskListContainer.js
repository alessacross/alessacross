import React, { Component } from "react";
import ReactDOM from "react-dom";
import TaskContainer from "./TaskContainer";
import TaskList from "../presentational/TaskList"

class TaskListContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id={this.props.name+"-all-tasks"}>
				<TaskList arr={[]} handleDelete={this.props.handleDelete} />
			</div>
		)
	}
}

export default TaskListContainer;