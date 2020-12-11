import React, { Component } from "react"
import covidLogo from "../Images/covid-logo.png"
import "../CSS/style.css"
import { Link } from "react-router-dom"
import wash from "../Images/wash-hands-filled.png"
import distancing from "../Images/social-distancing.png"
import wear from "../Images/wear-mask.png"
import dont from "../Images/dont-touch-face.png"
import sanitize from "../Images/sanitize-hands-filled.png"
import symptoms from "../Images/Symptoms.png"

class StaySafe extends Component {
  render() {
    return (
      <div>
        <header className="banner">
          <section className="nav-bar-logo">
            <div id="stay-safe-pg-logo" className="logo-image">
              <img src={covidLogo} alt="covid logo" width="200" height="100" />
            </div>
          </section>
          <section className="navigation-button">
            <button className="menu">MENU</button>
            <div className="menu-items">
              <Link to="/">HOME</Link>
              <Link to="./track-covid">TRACK COVID-19</Link>
              <Link to="./volunteer">VOLUNTEER</Link>
            </div>
          </section>
        </header>
        <h1>STAY SAFE</h1>
        <div className="stay-safe-container" contenteditable="true">
          <section className="prevent-covid">
            <img className="wash-hands" src={wash} alt="washing hands" />
            <h3 className="safety-heading">Wash Your Hands Often</h3>
            <ul>
              <li>
                Wash your hands often with soap and water for at least 20
                seconds especially after you have been in a public place, or
                after blowing your nose, coughing, or sneezing.
              </li>
              <li>
                If soap and water are not readily available,
                <b>use a hand sanitizer that contains at least 60% alcohol.</b>
                Cover all surfaces of your hands and rub them together until
                they feel dry.
              </li>
              <li>
                <b>Avoid touching your eyes, nose, and mouth</b> with unwashed
                hands.
              </li>
            </ul>
          </section>
          <section className="prevent-covid">
            <img
              className="close-contact"
              src={distancing}
              alt="social-distancing"
            />
            <h3 className="safety-heading">Avoid Close Contact</h3>
            <ul>
              <li>
                <b>Inside your home: </b>Avoid close contact with people who are
                sick. If possible, maintain 6 feet between the person who is
                sick and other household members.
              </li>
              <li>
                <b>Outside your home: </b> Put 6 feet of distance between
                yourself and people who don’t live in your household.
              </li>
            </ul>
          </section>
          <section className="prevent-covid">
            <img className="cover-mouth" src={wear} alt="wear mask" />
            <h3 className="safety-heading">Cover Your Mouth & Nose</h3>
            <ul>
              <li>
                You could spread COVID-19 to others even if you do not feel
                sick.
              </li>
              <li>
                The cloth face cover is meant to protect other people in case
                you are infected.
              </li>
              <li>
                Everyone should wear a cloth face cover in public settings and
                when around people who don’t live in your household, especially
                when other social distancing measures are difficult to maintain.
              </li>
            </ul>
          </section>
          <section className="prevent-covid">
            <img
              className="cover-cough"
              src={dont}
              alt="don't touch your face"
            />
            <h3 className="safety-heading">Cover Coughs & Sneezes</h3>
            <ul>
              <li>
                <b>Always cover your mouth and nose </b>with a tissue when you
                cough or sneeze or use the inside of your elbow and do not spit.
              </li>
              <li>
                Immediately <b> wash your hands</b> with soap and water for at
                least 20 seconds. If soap and water are not readily available,
                clean your hands with a hand sanitizer that contains at least
                60% alcohol.
              </li>
            </ul>
          </section>
          <section className="prevent-covid">
            <img
              className="sanitize"
              src={sanitize}
              alt="sanitize your hands"
            />
            <h3 className="safety-heading">Clean & Disinfect</h3>
            <ul>
              <li>
                <b>Clean AND disinfect frequently touched surfaces daily.</b>
                This includes tables, doorknobs, light switches, countertops,
                handles, desks, phones, keyboards, toilets, faucets, and sinks.
              </li>
              <li>
                <b>If surfaces are dirty, clean them.</b> Use detergent or soap
                and water prior to disinfection.
              </li>
              <li>
                <b>Then, use a household disinfectant. </b>Most common
                EPA-registered household disinfect will work.
              </li>
            </ul>
          </section>
          <section className="prevent-covid">
            <img
              className="monitor-health"
              src={symptoms}
              alt="know your symptoms"
            />
            <h3 className="safety-heading">Monitor Your Health Daily</h3>
            <ul>
              <li>
                <b>Be alert for symptoms.</b> Watch for fever, cough, shortness
                of breath, or other symptoms of COVID-19.
              </li>
              <li>
                <b>Take your temperature</b> if symptoms develop. Don’t take
                your temperature within 30 minutes of exercising or after taking
                medications that could lower your temperature, like
                acetaminophen.
              </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}
export default StaySafe
