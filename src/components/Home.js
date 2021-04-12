import React, { Component } from 'react'
import ParkModel from '../models/park'
import Park from "./Park"
import ResortModel from '../models/resort'
import Resort from "./Resort"

export default class Home extends Component {
  state = {
    parks: {},
    resorts: {}
  }

  componentDidMount() {
    // runs after render function runs
    this.fetchData()
  }

  fetchData = () => {
    ParkModel.showAllParks().then(data => {
      this.setState({ parks: data })
    })
    ResortModel.showAllResorts().then(data => {
      this.setState({ resorts: data })
    })
  }
  
  
  render() {
    let parks = this.state.parks.parks !== undefined ? this.state.parks.parks.map((park, key) => {
      return <Park park = {park} key={key}/>
    }):<></>
    let resorts = this.state.resorts.resorts !== undefined ? this.state.resorts.resorts.map((resort, key) => {
      return <Resort resort = {resort} key={key}/>
    }):<></>
    return (
      <div className="container">
        <h1 id="homeHeader">Mouser</h1>
        <h2>Resorts</h2>
        <div className="row">
          { resorts }
        </div>
        <h2 id="homeParksHeader">Parks</h2>
        <div className="row">
          { parks }
        </div>
      </div>
    )
  }
}
