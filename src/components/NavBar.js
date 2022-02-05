import React from 'react';
import {MenuItems} from "./MenuItems"
import './NavBar.css'
import logo from './navbar-logo.png';

console.log(logo);

class NavBar extends React.Component{
    state = {clicked: false }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavBarItems">
                <div className="navbar-logo">
                    
                </div>
                <div className="menu-icon" id="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                    <i className={this.state.clicked ? 'nav-links': 'nav-links close'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index} id="nav-links">
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })} 
                </ul>
        
            </nav>
            

        
        )
    }
}

export default NavBar;

