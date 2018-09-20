import React, { Component } from "react";
import ReactDOM from "react-dom";
import CategoryContainer from "./CategoryContainer";
import TaskList from "../presentational/TaskList";

class BoardContainer extends Component {
	constructor(props) {
		super(props);
		// tasks: 3 arrays for tasks
		this.state = {
			todo_tasks: [],
			inProgress_tasks: [],
			completed_tasks: [],
			num_tasks: 0
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleMove = this.handleMove.bind(this);
	}

	// NOTE: I know these next two functions aren't very pretty
	// "Make it right, then make it tight" -Andrew McNutt

	// called onclick from InputContainer.js
	// data: string input for new task
	// src: string name of category (todo, inProgress, completed)
	onSubmit(data, src) {
		let newTask;

		typeof data == "string" ? (
			newTask = {
				body: data,
				user: "none",
				number: this.state.num_tasks,
				cat: src
			}
		) : (
				newTask = {
					body: data.body,
					user: "none",
					number: data.number,
					cat: src
				}
			)

		console.log(newTask);

		let arr = [];

		// determine array being used
		if (src == "todo") {
			arr = this.state.todo_tasks
			arr.push(newTask)
			this.setState({ todo_tasks: arr, num_tasks: ++this.state.num_tasks })
		} else if (src == "inProgress") {
			arr = this.state.inProgress_tasks
			arr.push(newTask)
			this.setState({ inProgress_tasks: arr, num_tasks: ++this.state.num_tasks })
		} else {
			arr = this.state.completed_tasks
			arr.push(newTask)
			this.setState({ completed_tasks: arr, num_tasks: ++this.state.num_tasks })
		}
	}

	// called from Task.js
	// given tasks to be deleted
	handleDelete(task) {
		let arr = [];

		// determine array being used
		if (task.cat == "todo") {
			arr = this.state.todo_tasks.filter((t) => task.number != t.number)
			this.setState({ todo_tasks: arr })
		} else if (task.cat == "inProgress") {
			arr = this.state.inProgress_tasks.filter((t) => task.number != t.number)
			this.setState({ inProgress_tasks: arr })
		} else {
			arr = this.state.completed_tasks.filter((t) => task.number != t.number)
			this.setState({ completed_tasks: arr })
		}
	}

	handleMove(src, dest, task) {
		let newDest;
		dest == "To Do" ? newDest = "todo" :
		dest == "In Progress" ? newDest = "inProgress" :
		newDest = "completed";

		this.handleDelete(task);
		this.onSubmit(task, newDest);
	}

	// NOTE: improve this with map over ["todo", "inProgress", "completed"] later
	render() {
		return (
		<div className="categories">
			<div id="todo" className="category">
				<CategoryContainer 
					name="todo" 
					handler={this.onSubmit}
					title="To Do"
					handleDelete={this.handleDelete}
					tasks={this.state.todo_tasks}
					handleMove={this.handleMove}
				/>
			</div>
			<div id="inProgress" className="category">
				<CategoryContainer 
					name="inProgress" 
					handler={this.onSubmit}
					title="In Progress"
					handleDelete={this.handleDelete}
					tasks={this.state.inProgress_tasks}
					handleMove={this.handleMove}
				/>
			</div>
			<div id="completed" className="category">
				<CategoryContainer 
					name="completed" 
					handler={this.onSubmit} 
					title="Completed"
					handleDelete={this.handleDelete}
					tasks={this.state.completed_tasks}
					handleMove={this.handleMove}
				/>
			</div>
		</div>
		)
	}
}

export default BoardContainer;
ReactDOM.render(<BoardContainer />, document.getElementById("board"));