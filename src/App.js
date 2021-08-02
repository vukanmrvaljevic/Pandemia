import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./Pages/Home.jsx"
import staySafe from "./Pages/StaySafe.jsx"
import trackCovid from "./Pages/TrackCovid.jsx"
import volunteer from "./Pages/Volunteer.jsx"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stay safe" component={staySafe} />
        <Route exact path="/track-covid" component={trackCovid} />
        <Route exact path="/volunteer" component={volunteer} />
      </Switch>
    </div>
  )
}

export default App
