import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

class TaskList extends Component  {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<ul>
				{ this.props.tasks.map((task) => 
					<li>
						<Task 
							task={task} 
							handleDelete={this.props.handleDelete}
							handleMove={this.props.handleMove}
							handleAddSub={this.props.handleAddSub}
							feeds={this.props.feeds}
						/>
					</li>) }
			</ul> 
		)
	}
}

export default TaskList;