import React, { Component } from "react";
import ReactDOM from "react-dom";
import CategoryContainer from "./CategoryContainer";
import NewFeed from "../presentational/NewFeed";

class Board extends Component {
	constructor() {
		super();

		this.state = {
			// array of objects, one per feed
			feeds: [{cat: "To Do", arr: []}, 
					{cat: "In Progress", arr: []}, 
					{cat: "Completed", arr: []}],
			num_tasks: 0,
			newFeed: ""
		};

		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleMove = this.handleMove.bind(this);
		this.addFeed = this.addFeed.bind(this);
		this.onFeedChange = this.onFeedChange.bind(this);
		this.addSubtask = this.addSubtask.bind(this);
	}

	// called onClick from InputContainer.js
	// data: input string for new task || new task itself (from handleMove)
	handleAdd(data, src) {
		let newTask;

		typeof data == "string" ? (
			newTask = {
				body: data,
				user: "none",
				number: this.state.num_tasks,
				cat: src,
				subTasks: []
			}
		) : (
				newTask = {
					body: data.body,
					user: "none",
					number: data.number,
					cat: src,
					subTasks: data.subTasks
				}
		)

		let updatedFeed = {cat: src, arr: []};
		let fds = this.state.feeds;
		for (var i = 0; i < fds.length; i++) {
			if (src == fds[i].cat) {
				updatedFeed.arr = fds[i].arr;
			
				// add new task to temp array
				updatedFeed.arr.push(newTask);

				fds[i] = updatedFeed;

				this.setState(() => ({
					feeds: fds,
					num_tasks: ++this.state.num_tasks
				}));
				
				break;
			}
		}
	}

	handleDelete(task) {
		let updatedFeed = {cat: task.cat, arr: []};
		let fds = this.state.feeds;
		for (var i = 0; i < fds.length; i++) {
			if (task.cat == fds[i].cat) {
				updatedFeed.arr = fds[i].arr.filter(t => (
					task.number != t.number
				));

				fds[i] = updatedFeed;

				this.setState(() => ({
					feeds: fds
				}));

				break;
			}
		}
	}

	handleMove(src, dest, task) {
		this.handleDelete(task);
		this.handleAdd(task, dest);
	}

	onFeedChange(e) {
		this.setState({ newFeed: e.currentTarget.value });
	}

	addFeed(e) {
		let addedFeed = {cat: this.state.newFeed, arr: []};
		this.setState((prevState) => ({
			feeds: [...prevState.feeds, addedFeed],
			newFeed: ""
		}));

		// clear textarea
		document.getElementById("new-feed-textarea").value="";
	}

	// add subtask to given task 
	// called from Task.js
	// NOTE: there has to be a cleaner way to do this ugly nest
	addSubtask(task, sub) {
		if (sub == "")
			return;

		let updatedFeed = {cat: task.cat, arr: []};
		let fds = this.state.feeds;
		for (var i = 0; i < fds.length; i++) {
			if (task.cat == fds[i].cat) {
				updatedFeed.arr = fds[i].arr;

				for (var j = 0; j < updatedFeed.arr.length; j++) {
					if (updatedFeed.arr[j].number == task.number) {
						updatedFeed.arr[j].subTasks.push(sub);
						break;
					}
				}

				fds[i] = updatedFeed;

				this.setState(() => ({
					feeds: fds 
				}));
			}
		}
	}

	// NOTE: make handler object instead of pasing each individually
	render() {
		return (
			<div className="categories">
				<div className="header">
					<h3 className="board-name">
						Landslide
					</h3>
					<NewFeed 
						handleChange={this.onFeedChange} 
						handleClick={this.addFeed}
						defaultValue={this.state.newFeed}
					/>
				</div>
			{
				this.state.feeds.map((feed) => 
					<div className="category" id={feed.cat}>
						<CategoryContainer
							name={feed.cat}
							handler={this.handleAdd} //instead: import into InputContainer.js
							handleDelete={this.handleDelete}
							handleMove={this.handleMove}
							handleAddSub={this.addSubtask}
							tasks={feed.arr}
							feeds={this.state.feeds}
						/>
					</div>
				)
			}
			</div>
		)
	}		
}


export default Board;
ReactDOM.render(<Board />, document.getElementById("board"));