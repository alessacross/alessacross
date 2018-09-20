import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputContainer from "./InputContainer";
import TaskList from "../presentational/TaskList";

class CategoryContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>{this.props.name}</h2>
				<div id={this.props.name+"-input"} className="new-task">
					<InputContainer name={this.props.name} handler={this.props.handler}/>
				</div>
				<div id={this.props.name+"-task-list"} className="tasks">
					<h4>Task List</h4>
					<TaskList 
						tasks={this.props.tasks} 
						handleDelete={this.props.handleDelete} 
						handleMove={this.props.handleMove}
						handleAddSub={this.props.handleAddSub}
						feeds={this.props.feeds}
					/>
				</div>
			</div>
		)
	}
}

export default CategoryContainer;