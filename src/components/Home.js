import React, { Component } from 'react'
import ParkModel from '../models/park'
import Park from "./Park"

export default class Home extends Component {
  state = {
    parks: {},
  }

  componentDidMount() {
    // runs after render function runs
    this.fetchData()
  }

  fetchData = () => {
    ParkModel.showAllParks().then(data => {
      this.setState({ parks: data })
    })
  }
  
  
  render() {
    let parks = this.state.parks.parks !== undefined ? this.state.parks.parks.map((park, key) => {
      return <Park park = {park} key={key}/>
    }):<></>
    console.log(this.state.parks)
    return (
      <div className="container">
        <h1>Homepage</h1>
        <div className="row">
          { parks }
        </div>
      </div>
    )
  }
}
