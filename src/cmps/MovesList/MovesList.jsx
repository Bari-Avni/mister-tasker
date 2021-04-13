import { Component } from "react";
// import { connect } from "react-redux";
import { userService } from "../../services/userService";
// import { addMove } from "../../store/actions/userActions";

import "./MovesList.scss";

export class MovesList extends Component {
  state = {
    user: null,
    // contact: null,
  };

  componentDidMount() {
    console.log("this", this);
    this.loadUser();
  }

  async loadUser() {
    const user = await userService.getUser();
    this.setState({ user });
  }

  render() {
    if (!this.state.user) return <div>Loading...</div>;
    const { user } = this.state;
    if (this.props.contact) {
      const { contact } = this.props;
      const filteredMoves = user.moves.filter(
        (move) => move.toId === contact._id
      );
      return (
        <div className="moves-list">
          <h3>Your Moves:</h3>
          <ul>
            {filteredMoves.length > 0 ? (
              filteredMoves &&
              filteredMoves.map((move, idx) => (
                <li key={idx}>
                  <p>At: {move.at}</p>
                  <p>Amount: {move.amount} coins</p>
                </li>
              ))
            ) : (
              <div>No moves yet</div>
            )}
          </ul>
        </div>
      );
    } else {
      const filteredMoves = user.moves.slice(0, 3);
      return (
        <div className="moves-list">
          <h3>Your last 3 moves:</h3>
          <ul>
            {filteredMoves.length > 0 ? (
              filteredMoves &&
              filteredMoves.map((move, idx) => (
                <li key={idx}>
                  <p>To: {move.to}</p>
                  <p>At: {move.at}</p>
                  <p>Amount: {move.amount} coins</p>
                </li>
              ))
            ) : (
              <div>No moves yet</div>
            )}
          </ul>
        </div>
      );
    }
  }
}
