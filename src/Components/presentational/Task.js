import React, { Component } from "react";
import Subtask from "./Subtask";
import Board, { addSubtask } from "../container/Board";

class Task extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			showMenu: false,
			showMove: false,
			showAddSub: false,
			newSub: ""
		};

		// bind show/hide functions
		this.toggleMenu = this.toggleMenu.bind(this);
		this.toggleMove = this.toggleMove.bind(this);
		this.handleAddSub = this.handleAddSub.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	toggleMenu(e) {
		e.preventDefault();
		this.setState({ showMenu: !this.state.showMenu });
	}

	toggleMove(e) {
		e.preventDefault();
		this.setState({ showMove: !this.state.showMove });
	}

	onChange(e) {
		this.setState({ newSub: e.currentTarget.value })
	}

	handleAddSub(e) {
		e.preventDefault();
		if (!this.state.showAddSub) {
			this.setState({ showAddSub: true });
		}
		else {
			// call imported function to modify state --> pass it current task
			this.props.handleAddSub(this.props.task, this.state.newSub);
			this.setState({ newSub: "" });
			document.getElementById("new-sub-box").value = "";
		}
	}

	render() {
		return (
			<div className="task">
				<div className="task-body" onClick={this.toggleMenu}>
					<h5>{this.props.task.body}</h5>
					<div className="subtask-list">
						<ul>
							{
								this.props.task.subTasks.map((sub) =>
									<li><Subtask sub={sub} /></li>
								)
							}
						</ul>
					</div>
				</div>

				{
					this.state.showMenu ?
					(
						<div className="dropdown">
							<div className="move-toggle">
								<button onClick={this.toggleMove}>Move</button>
								{
									this.state.showMove ? ( 
										<Move 
											src={this.props.task.cat} 
											handleMove={this.props.handleMove}
											task={this.props.task}
											feeds={this.props.feeds}
										/> ) : null
								}
							</div>
							<button>Rename</button>
							<button onClick={() => 
								this.props.handleDelete(this.props.task)
							}> 
								Delete
							</button>
							<div className="add-subtask">
								<button 
									type="submit" 
									onClick={this.handleAddSub}
									id="new-sub-button"
								>
									Add Subtask
								</button>
								{
									this.state.showAddSub ? (
										<input 
											type="text" 
											defaultValue={this.state.newSub}
											id="new-sub-box"
											onChange={this.onChange}
											cols="20"
										/>
									) : null
								}
							</div>
						</div>
					) : null
				}
			</div>
		);
	}
}

const Move = ({ src, handleMove, task, feeds }) => (
	<div className="move-dropdown">
		{
			feeds.filter( (d) => d != src ).map((dests) =>
				<button 
					className="move-buttons" 
					onClick={() => handleMove(src, dests.cat, task)}>
					{dests.cat}
				</button>
			)
		}
	</div>
);

export default Task;