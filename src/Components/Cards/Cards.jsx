import React from "react"
import CardComponent from "./Card/Card"
import "./cards.css"

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading..."
  }
  return (
    <div className="container">
      <CardComponent
        cardTitle="Infected"
        value={confirmed.value}
        lastUpdate={lastUpdate}
        cardSubtitle="Number of active cases from COVID-19."
      />
      <CardComponent
        cardTitle="Recovered"
        value={recovered.value}
        lastUpdate={lastUpdate}
        cardSubtitle="Number of recoveries from COVID-19."
      />
      <CardComponent
        cardTitle="Deaths"
        value={deaths.value}
        lastUpdate={lastUpdate}
        cardSubtitle="Number of deaths caused by COVID-19."
      />
    </div>
  )
}
export default Info
