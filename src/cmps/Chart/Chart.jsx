import { Sparklines, SparklinesLine } from "react-sparklines";
import "./Chart.scss";

export function Chart ({marketPrice, tradeVolume}) {

  // getValues = () =>{
  //   console.log('marketPrice2');
  // }

  // render() {
    // const { name, phone } = this.state;
    return (
      <div className="chart">
        <h2>Charts:</h2>
        <h3>Market Price:</h3>
        {/* <Sparklines data={[5, 10, 5, 20, 7, 3]}> */}
        {/* <Sparklines data={this.getValues()}> */}
        <Sparklines data={marketPrice}>
          <SparklinesLine color="blue" />
        </Sparklines>
        <h3>Trade Volume:</h3>
        <Sparklines data={tradeVolume}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </div>
    );
  // }
}
