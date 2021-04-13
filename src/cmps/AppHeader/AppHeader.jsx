import { NavLink, withRouter } from "react-router-dom";
import "./AppHeader.scss";
import bitcoinLogo from "../../assets/img/bitcoin.png";
import homeLogo from "../../assets/img/home.png";
import aboutLogo from "../../assets/img/about1.png";
import contactLogo from "../../assets/img/users.png";
import statisticLogo from "../../assets/img/increase.png";

const _AppHeader = (props) => {
  return (
    <section className="header-container">
      <div className="app-header">
        <NavLink exact to="/" activeClassName="active-nav">
          <div className="logo">
            <img src={bitcoinLogo} alt="" />
            <h3>Mister Tasker</h3>
          </div>
        </NavLink>
        <ul className="nav">
          <li>
            <NavLink exact to="/" activeClassName="active-nav">
              <img src={homeLogo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/task" activeClassName="active-nav">
              <img src={contactLogo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" activeClassName="active-nav">
              <img src={statisticLogo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-nav">
              <img src={aboutLogo} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export const AppHeader = withRouter(_AppHeader);
