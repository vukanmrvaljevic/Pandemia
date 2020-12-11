import React, { Component } from "react"
import covidLogo from "../Images/covid-logo.png"
import helpingHands from "../Images/helping-hands-large.png"
import { Link } from "react-router-dom"
import PopUp from "../Components/PopUp"

class Volunteer extends Component {
  state = {
    seen: false,
  }

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    })
  }
  render() {
    return (
      <div className="entire-page">
        <header className="banner-heading">
          <section className="nav-bar-logo">
            <div id="volunteer-pg-logo" className="logo-image">
              <img src={covidLogo} alt="covid logo" width="200" height="100" />
            </div>
          </section>
          <section className="navigation-button">
            <button className="menu">MENU</button>
            <div className="menu-items">
              <Link to="/">HOME</Link>
              <Link to="./track-covid">TRACK COVID-19</Link>
              <Link to="./stay-safe">STAY SAFE</Link>
            </div>
          </section>
        </header>
        <h1 className="volunteer-heading">VOLUNTEER</h1>
        <main className="volunteer-pg-container">
          <div className="volunteer-box">
            <div className="helping-hands">
              <img id="help-hands-img" src={helpingHands} alt="helping-hands" />
            </div>
          </div>
          <div className="locations-button" onClick={this.togglePop}>
            <button>Locations</button>
          </div>
          {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        </main>
      </div>
    )
  }
}
export default Volunteer
