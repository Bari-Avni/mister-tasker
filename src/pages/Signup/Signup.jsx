import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../../store/actions/userActions";
// import { userService } from "../../services/userService";
import "./Signup.scss";

class _signup extends Component {

  state = {
    name: '',
    // errMsg: "",
  };

  async componentDidMount() {
    console.log("this", this);
  }

  handleChange = ({ target }) => {
    console.log("target", target);
    const field = target.name;
    const value = target.value;
    this.setState({ [field]: value });
    // this.setState(() => ({
    //   user: { [field]: value },
    //   // user: { ...prevState.contact, [field]: value },
    // }));
    console.log("this-handle", this);
  };
  onAddUser = async (ev) => {
    ev.preventDefault();
    this.props.signup(this.state.name);
    this.props.history.push("/");
  };
  render() {
    // if (!this.state.user)
    //   return <div>{this.state.errMsg || "Loading..."}</div>;
    const { name } = this.state || "";
    return (
      <form className="signup" onSubmit={this.onAddUser}>
        <p>Please enter your name:</p>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  signup,
};

export const Signup = connect(null, mapDispatchToProps)(_signup);
