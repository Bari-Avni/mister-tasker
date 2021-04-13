import { Route } from 'react-router'
import { NavLink } from 'react-router-dom'
import './About.scss'

export const About = (props) => {
    console.log('about-props', props);
    const Vision = () => (
        <div>
            <ul>
                <li>Build the best robots</li>
                <li>Eat good lunch</li>
            </ul>
        </div>
    )
    const Team = () => (
        <ol>
            <li>Muki Ben David</li>
            <li>Shraga</li>
            <li>Puki Shlomo</li>
        </ol>
    )
    return (
        <div className="about">
            <h1>About</h1>
            <nav>
                <NavLink to="/about/vision">Our Vision</NavLink>
                <NavLink to="/about/team">Our Team</NavLink>
            </nav>
            {/* You DO NOT need another <Router> */}
            {/* You can use <Switch> here if needed */}
            <Route path="/about/vision" component={Vision} />
            <Route path="/about/team" component={Team} />
        </div>
    )
}

