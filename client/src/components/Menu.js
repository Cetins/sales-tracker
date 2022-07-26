import React from "react";
import { Link } from "react-router-dom"
import "../styles/Menu.css"

const Menu = () => {
    return (
        <div className="menu-div">
            <ul>
                <li className='nav-links'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-links'>
                    <Link to="/sales">Sales</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu;