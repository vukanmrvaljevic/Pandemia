import React from "react"
import CountryPicker from "../Components/CountryPicker/CountryPicker"
import Cards from "../Components/Cards/Cards"
import { fetchData } from "../api"
import { Link } from "react-router-dom"
import covidLogo from "../Images/covid-logo.png"
import "../CSS/style.css"
import worldMap from "../Images/world-map-large.png"

class TrackCovid extends React.Component {
  state = {
    data: {},
    country: "",
  }

  async componentDidMount() {
    const data = await fetchData()

    this.setState({ data })
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country)

    this.setState({ data, country: country })
  }

  render() {
    const { data } = this.state

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
              <Link to="./stay-safe">STAY-SAFE</Link>
            </div>
          </section>
        </header>
        <section className="track-pg-container">
          <div className="track-container">
            <div className="track-img">
              <img className="world-img" src={worldMap} alt="World-Map" />
            </div>
            <div className="covid-tracker">
              <h3>TRACK COVID-19</h3>
              <Cards data={data} />
              <CountryPicker handleCountryChange={this.handleCountryChange} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default TrackCovid
