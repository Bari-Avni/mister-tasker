import { Component } from "react";
import { connect } from "react-redux";
import { userService } from "../../services/userService";
import { addMove } from "../../store/actions/userActions";

import "./TransferFund.scss";

export class _TransferFund extends Component {
  state = {
    user: null,
    amount: 0,
  };

  componentDidMount(){
    console.log('this', this);
    this.loadUser();
  }

  async loadUser() {
    const user = await userService.getUser();
    this.setState({ user });
  }

  handleChange = ({ target }) => {
    console.log("target", target);
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState({ [field]: value });
  };

  onTransferCoins = async (ev) => {
    ev.preventDefault();
    this.state.user.coins -= this.state.amount
    console.log('onTransferCoins', this);
    this.props.addMove(this.props.contact, this.state.amount)
    this.setState({amount:0})
    // this.props.props.history.push(`/contact/${this.props.contact._id}`);
  };

  render() {
    const { amount } = this.state;
    const { contact } = this.props;
    return (
      <form className="transfer-fund" onSubmit={this.onTransferCoins}>
        <p>Transfer coins to {contact.name}</p>
        <label htmlFor="amount">Amount: </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={this.handleChange}
        />
        <button onClick={this.props.action}>Transfer</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addMove,
};

export const TransferFund = connect(null, mapDispatchToProps)(_TransferFund);
