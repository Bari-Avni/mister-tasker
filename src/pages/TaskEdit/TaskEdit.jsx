import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveTask } from "../../store/actions/taskActions";
import { taskService } from "../../services/taskService";
import "./TaskEdit.scss";

class _TaskEdit extends Component {
  inputRef = React.createRef();

  state = {
    task: null,
    errMsg: "",
  };
  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const task = id
        ? await taskService.getTaskById(id)
        : taskService.getEmptyTask();
      this.setState({ task });
    } catch (err) {
      this.setState({ errMsg: "Task Not Found" });
    }
    console.log(this.inputRef);
    // this.inputRef.current.focus()
    // this.inputRef.current.select()
  }

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState((prevState) => ({
      task: { ...prevState.task, [field]: value },
    }));
  };
  onSaveTask = async (ev) => {
    ev.preventDefault();
    console.log(this.state.task);
    await taskService.saveTask({ ...this.state.task });
    this.props.history.push("/task");
  };
  render() {
    if (!this.state.task)
      return <div>{this.state.errMsg || "Loading..."}</div>;
    const { title, description, importance, _id } = this.state.task;
    return (
      <form className="task-edit" onSubmit={this.onSaveTask}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            ref={this.inputRef}
            required
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
            name="title"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            required
            type="text"
            id="description"
            value={description}
            onChange={this.handleChange}
            name="description"
          />
        </div>
        <div>
          <label htmlFor="importance">Importance:</label>
          <select id="importance" name="importance" value={importance} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div>
          <p>{this.state.errMsg}</p>
          <button>Save Task</button>
          {_id && <Link to={"/task/" + _id}>Back</Link>}
          {!_id && <Link to={"/task"}>Back</Link>}
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  saveTask,
};

export const TaskEdit = connect(null, mapDispatchToProps)(_TaskEdit);
