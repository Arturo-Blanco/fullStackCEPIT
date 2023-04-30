import React from "react";
import {Link} from "react-router-dom"
import "./navBar.css"

const NavBar = () => {
    return(
    <nav className="navBar">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/content">Content</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
    )
}
export default NavBar