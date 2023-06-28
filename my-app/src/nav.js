import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <ul className="nav-list">
                <li className="link-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/GropedTeamMembers">Teams</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav 