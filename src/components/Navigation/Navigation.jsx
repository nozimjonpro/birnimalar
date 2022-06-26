import React from "react";
import manIcon from "../../Assets/Img/man.png";
import homeIcon from "../../Assets/Img/home.png";
import listIcon from '../../Assets/Img/list.svg';
import messageIcon from '../../Assets/Img/message.svg'
import historyIcon from '../../Assets/Img/history.svg';
import helpIcon from '../../Assets/Img/help.svg';
import settingsIcon from '../../Assets/Img/settings.svg'
import logoutIcon from '../../Assets/Img/logout.svg'
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

function Navigation() {

  return (
    <nav className="nav">
      <a className="nav__image-link" href="#">
        <img
          className="nav__image"
          src={manIcon}
          alt="user image"
          width={150}
          height={150}
        />
      </a>
      <div className="nav__user-info">
        <p className="nav__username">
          <strong>Your Name</strong>
        </p>
        <span className="nav__user-rank">Gold member, 1.750 Point</span>
      </div>
      <ul className="nav__list">
        
        <li className="nav__item">
          <img src={homeIcon} alt="" width={25} height={25} />
          <NavLink className="nav__links" to="dashboard">
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <img src={listIcon} alt="" width={25} height={25} />
          <NavLink className="nav__links" to="list">
            <span>Top list</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <img src={messageIcon} alt="" width={25} height={25} />
          <NavLink className="nav__links" to="message">
            <span>Message</span>
          </NavLink>
        </li>
        <li className="nav__item">
          <img src={historyIcon} alt="" width={25} height={25} />
          <NavLink className="nav__links" to="history">
            <span>History</span>
          </NavLink>
        </li>
        <li className="nav__item">
        <img src={helpIcon} alt="" width={25} height={25} />
          <NavLink className="nav__links" to="help">
            <span>Help</span>
          </NavLink>
        </li>
        <li className="nav__item">
        <img src={settingsIcon} alt="" width={25} height={25} />
          <NavLink className="nav__links" to="setting">
            <span>Setting</span>
          </NavLink>
        </li>
      </ul>

      <button className="nav__logout"  onClick={()=>{
        window.localStorage.removeItem('token');
      }}>Go Out <img src={logoutIcon} alt="" /></button>
    </nav>
  );
}

export default Navigation;
