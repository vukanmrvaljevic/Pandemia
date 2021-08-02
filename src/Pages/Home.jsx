import React, { Component } from "react"
import "../CSS/style.css"
import { Link } from "react-router-dom"
import covidLogo from "../Images/covid-logo.png"
import map from "../Images/map-earth.png"
import wearMask from "../Images/wear-mask.png"
import helpingHands from "../Images/helping-hands.png"

class Home extends Component {
    render() {
    return (
      <div>
       <header className="banner">
          <section className="logo-image">
            <div id="stay-safe-pg-logo" className="logo-image">
            <img src={covidLogo} alt="covid logo" width="200" height="100"/>
            </div>
          </section>
          <section className="navigation-button">
            <button className="menu">MENU</button>
            <div className="menu-items">
              <Link to="./track-covid">TRACK COVID-19</Link>
              <Link to="/stay safe">STAY SAFE</Link>
              <Link to="./volunteer">VOLUNTEER</Link>
            </div>
          </section>
        </header>
        <h1 className="resource-center"> PANDEMIC RESOURCE CENTER</h1>
        <div className="home-page-container">
          <section className="home-box-container">
            <img className="tracker-img" src={map} alt="map" />
            <div className="home-box">
              <h2>
                <Link to="./track-covid">TRACK COVID-19</Link>
              </h2>
            </div>
          </section>
          <section className="home-box-container">
            <img className="stay-safe-img" src={wearMask} alt="covid mask" />
            <div className="home-box">
              <h2>
                <Link to="./stay safe">STAY SAFE</Link>
              </h2>
            </div>
          </section>
          <section className="home-box-container">
            <img
              className="volunteer-img"
              src={helpingHands}
              alt="helping hands"
            />
            <div className="home-box">
              <h2>
                <Link to="./volunteer">VOLUNTEER</Link>
              </h2>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Home
