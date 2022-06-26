import React from "react";
import Header from "../../components/Header/Header.jsx";
import "./Main.scss";

function Main() {
  return (
    <main className="main">
      <Header></Header>
      <div className="main__main">
      <div className="main__prime">
      <div className="main__inner">
          <div className="main__top-info">
            <div>
              <h4 className="main__top-heading">Total Balance</h4>
              <select className="main__select">
                <option value="">This Month</option>
                <option value="">This Month</option>
                <option value="">This Month</option>
              </select>
            </div>
            <span className="main__top-date">Sunday 10/12/2020</span>
          </div>
          <div className="main__middle">
          <div>
            <p className="total__sum">500.25</p>
            <span className="total__usd">in USD</span>
          </div>
          <ul className="profits__list">
            <item className="profits__item">
              <span className="store__profit">$210.50</span>
              <span className="store">from A Store</span>
            </item>
            <item className="profits__item">
              <span className="store__profit">$199.50</span>
              <span className="store">from B Store</span>
            </item>
            <item className="profits__item">
              <span className="store__profit">$189.50</span>
              <span className="store">from C Store</span>
            </item>
          </ul>
          <p className="profit__overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi
            veritatis vel iusto, commodi 
          </p>
        </div>
      <div className="main__bottom">
        <p>
        Last Month
          <span>$700.50</span> 
        </p>
        <a className="main__bottom-link" href="">
          More
        </a>
      </div>
      </div>
      <ul className="main__bottom-list">
      <li className="main__bottom-item">
            <h4 className="main__bottom-heading">Comparison</h4>
            <ul className="main__bottom-profit-list">
              <li className="main__bottom-profit-item">
               <div>
               <img  className="main__bottom-vector" src="" alt="" />
                <h5 className="main-bottom__profit-sum">210</h5>
               </div>
               <p className="main-bottom__text">Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="main__bottom-profit-item">
               <div>
               <img  className="main__bottom-vector" src="" alt="" />
                <h5 className="main-bottom__profit-sum">210</h5>
               </div>
               <p className="main-bottom__text">Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="main__bottom-profit-item">
               <div>
               <img  className="main__bottom-vector" src="" alt="" />
                <h5 className="main-bottom__profit-sum">210</h5>
               </div>
               <p className="main-bottom__text">Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
        </li>
        <li className="main__bottom-item"></li>
        <li className="main__bottom-item">
            <h4 className="main__bottom-heading">Top List</h4>
            <ul className="main__bottom-profit-list">
              <li className="main__bottom-profit-item">
               <div>
               <img  className="main__bottom-vector" src="" alt="" />
                <h5 className="main-bottom__profit-sum">210</h5>
               </div>
               <p className="main-bottom__text">Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="main__bottom-profit-item">
               <div>
               <img  className="main__bottom-vector" src="" alt="" />
                <h5 className="main-bottom__profit-sum">210</h5>
               </div>
               <p className="main-bottom__text">Lorem ipsum dolor sit amet.</p>
              </li>
              <li className="main__bottom-profit-item">
               <div>
               <img  className="main__bottom-vector" src="" alt="" />
                <h5 className="main-bottom__profit-sum">210</h5>
               </div>
               <p className="main-bottom__text">Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
        </li>
      </ul>
      </div>
      <div className="main__right-side">
        <h3 className="main__right-heading">NEXT TRENDING</h3>
       <ul className="main__right-top-list">
        <li className="main__right-item">
          <img src="https://via.placeholder.com/100" alt="" />
          <p className="main__right-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </li>
        <li className="main__right-item">
          <p className="main__right-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <img src="https://via.placeholder.com/100" alt="" />
        </li>
        <li className="main__right-item">
          <img src="https://via.placeholder.com/100" alt="" />
          <p className="main__right-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </li>
        <li className="main__right-item">
          <p className="main__right-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <img src="https://via.placeholder.com/100" alt="" />
        </li>
       </ul>
      </div>
      </div>
    </main>
  );
}

export default Main;
