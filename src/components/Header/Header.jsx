import React from "react";
import burgerIcon from '../../Assets/Img/menu.png'
import './Header.scss'


function Header(){
    return (
        <header className="header">
            <h2 className="header__heading">Hello Your Name Welcome Back !</h2>
            <div className="header__right">
                <div className="input__group">
                <input className="header__search-input"  type="text"/>
                </div>
                <button className="header__burger"> <img src={burgerIcon} alt="icon" width={30} height ={30}/></button>
            </div>
        </header>
    )
}

export default Header;