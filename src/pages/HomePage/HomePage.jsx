import { Component } from "react";
import { userService } from "../../services/userService";
// import { bitcoinService } from "../../services/bitcoinService";
// import { MovesList } from "../../cmps/MovesList/MovesList";
import coinsLogo from "../../assets/img/coins.png";
import bitcoinLogo from "../../assets/img/bitcoin.png";
import "./HomePage.scss";

export class HomePage extends Component {
  state = {
    user: null,
    // btc: null,
  };

  componentDidMount() {
    this.loadUser();
  }

  async loadUser() {
    const user = await userService.getUser();
    this.setState({ user });
    // this.loadBtc();
  }

  // async loadBtc() {
  //   const btc = await bitcoinService.getRate(this.state.user.coins);
  //   this.setState({ btc });
  // }

  render() {
    const { user, btc } = this.state;
    if (!user) return <div>Loading User.....</div>;
    return (
      <section>
        <div className="home-page">
          <h2>Hello {user.name}!</h2>
          {/* <p><img src={coinsLogo} alt="" />Coins: {user.coins}</p> */}
          {/* <p><img src={bitcoinLogo} alt="" />BTC: {btc}</p> */}
        </div>
        {/* <MovesList /> */}
      </section>
    );
  }
}
