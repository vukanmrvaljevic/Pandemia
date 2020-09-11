import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Home from "./Screens/Home.jsx"
import staySafe from "./Screens/StaySafe.jsx"
import trackCovid from "./Screens/TrackCovid.jsx"
import volunteer from "./Screens/Volunteer.jsx"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stay-safe" component={staySafe} />
        <Route exact path="/track-covid" component={trackCovid} />
        <Route exact path="/volunteer" component={volunteer} />
      </Switch>
    </div>
  )
}

export default App
