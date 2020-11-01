import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from './logo.jpg'
/*
  <div className="btn btn-outline-success">
                 <Link to={"/"} className="navbar-logo text-decoration-none"> COVID-19 SURVEY FORM <i className="fab fa-react"></i></Link>
             </div>
*/

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <div className="logo">
                    <a href="/">
                       <img src={logo} alt="logo"/>

                    </a>
                </div>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (

                            <li key={index}>
                                <Link
                                    style={{
                                        textDecoration:"none",

                                    }}
                                    className={item.cName} to={item.path}>
                                    {item.title}
                                </Link>
                            </li>

                        )
                    })}
                </ul>

            </nav>
        )
    }
}

export default Navbar