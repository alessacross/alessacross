import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Board from "./Board";

class InputContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    // bind this
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.input != "") {
      this.props.handler(this.state.input, this.props.name);
    }
    
    this.setState({ input: "" });
    document.getElementById(this.props.name+"-new-task-form").value = "";
  }

  render() {
    return (
      <div id="task-form">
        <Input
          label="new-task-form"
          text="New Task: "
          type="text"
          id={this.props.name+"-new-task-form"}
          defaultValue={this.state.input}
          handleChange={this.handleChange}
        />
        <button
          label="new-task-button"
          type="submit"
          id={this.props.name+"-new-task-button"}
          defaultValue={this.input}
          onClick={this.handleClick}>
          Create
        </button>
      </div>
    );
  }
}

export default InputContainer;