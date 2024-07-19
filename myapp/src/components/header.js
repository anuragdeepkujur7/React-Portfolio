import React from "react";
import "./styles/Header.scss" ;
import {Close} from "@material-ui/icons"
import { Link } from "react-router-dom";
const Header = ( )=> {
    return (
        <div className="header">
            <div className="header_logo" >
        </div>
        <nav>
            <ul>
                <div className="closed" >
                <Close className='close'/>
                </div>
                <li>
                    <Link to='/'>Home</Link>
                </li> 
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/'>Blog</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>

              </ul>  
        </nav>
        </div>
    );
}   
export default Header