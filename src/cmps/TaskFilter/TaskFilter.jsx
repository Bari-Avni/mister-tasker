import { Component } from "react";

import "./TaskFilter.scss";

export class TaskFilter extends Component {
  state = {
    term: '',
  };
  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter({ ...this.state });
    });
  };
  render() {
    const { name, phone } = this.state;
    return (
      <form className="task-filter" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="term">Search</label>
        <input
          type="text"
          id="term"
          name="term"
          value={name}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
