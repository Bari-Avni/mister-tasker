import { Component } from "react";
import { userService } from "../../services/userService";
import { bitcoinService } from "../../services/bitcoinService";
import { Chart } from "../../cmps/Chart/Chart";
import "./StatisticPage.scss";

export class StatisticPage extends Component {
  state = {
    marketPrice: null,
    tradeVolume: null,
  };

  componentDidMount() {
    this.loadMarketPrice();
    this.loadTradeVolume();
  }

  async loadMarketPrice() {
    const marketPriceData = await bitcoinService.getMarketPrice();
    const marketPrice = marketPriceData.values.map((price) => price.y);
    this.setState({ marketPrice });
  }

  async loadTradeVolume() {
    const tradeVolumeData = await bitcoinService.getTradeVolume();
    const tradeVolume = tradeVolumeData.values.map((volume) => volume.y);
    this.setState({ tradeVolume });
  }

  render() {
    const { marketPrice, tradeVolume } = this.state;
    if (!marketPrice || !tradeVolume) return <div>Loading charts.....</div>;
    return (
      <section className="statistic-page">
        <h1>Statistics</h1>
        <div className="chart-view">
          <Chart marketPrice={marketPrice} tradeVolume={tradeVolume} />
        </div>
      </section>
    );
  }
}
