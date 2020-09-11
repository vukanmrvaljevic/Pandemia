import React, { Component } from "react"
import covidLogo from "../Images/covid-logo.png"
import "../CSS/style.css"
import { Link } from "react-router-dom"
import worldMap from "../Images/world-map-large.png"

class TrackCovid extends Component {
  render() {
    return (
      <div>
        <header className="banner">
          <section className="nav-bar-logo">
            <div id="track-pg-logo" className="logo-image">
              <img src={covidLogo} alt="covid logo" width="200" height="100" />
            </div>
          </section>
          <section className="navigation-button">
            <button className="menu">Menu</button>
            <div className="menu-items">
              <Link to="/">Home</Link>
              <Link to="./volunteer">VOLUNTEER</Link>
              <Link to="./stay-safe">STAY SAFE</Link>
            </div>
          </section>
        </header>
        <h1>TRACK COVID-19</h1>
        <section className="track-pg-container">
          <div className="track-container">
            <div className="track-img">
              <img className="world-img" src={worldMap} alt="World-Map" />
            </div>
            <div className="covid-tracker">
              <button
                id="covid-cases-drop-down"
                className="covid-cases-drop-down"
              >
                Covid Cases by Region
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default TrackCovid
