import { NavLink } from "react-router-dom";
function Header() {
    const clickStyle = {color:"red"}

    return (
        <header>
            <ul className="gnb">
                <li><NavLink exact activeStyle={clickStyle} to="/AboutMe">AboutMe</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/SoftwareUsed">SoftwareUsed</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/Project">Project</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/Education">Education</NavLink></li>
                <li><NavLink exact activeStyle={clickStyle} to="/ForwardPlans">ForwardPlans</NavLink></li>

            </ul>
        </header>
    )
}
export default Header;