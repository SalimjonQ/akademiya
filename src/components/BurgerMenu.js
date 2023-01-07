import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Exam from "../pages/Exam";
import Logo from "./Logo"
import '../burger.css'

export default function Navbar() {
    const [burgerClass, setburgerClass] = useState("burger-bar unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    function OpenBurger() {
        if(!isOpen) {
            setburgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        else{
            setburgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
    }
 
    const updateMenu = () => {
        if(!isMenuClicked) {
            setburgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setburgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="nav-menu">
            <nav className="nav-item">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                    <div className={burgerClass}></div>
                </div>
                <Logo />
                <div className={menuClass}>
                    <ul>
                        <li><Link to="/" components={Home} onClick={OpenBurger}>Bosh Sahifa</Link></li>
                        <li><Link to="/News" components={News} onClick={OpenBurger}>Yangiliklar</Link></li>
                        <li><Link to="/Exam" components={Exam} onClick={OpenBurger}>Qabul - {new Date().getFullYear()}</Link></li>
                    </ul>
                </div>
            </nav>
        </div>      
    )
}