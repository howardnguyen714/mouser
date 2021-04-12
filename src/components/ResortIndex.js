import React, { Component } from 'react'
import ResortModel from '../models/resort'
import Resort from "./Resort"

export default class ResortIndex extends Component {
  state = {
    resorts: {}
  }

  componentDidMount() {
    // runs after render function runs
    this.fetchData()
  }

  fetchData = () => {
    ResortModel.showAllResorts().then(data => {
      this.setState({ resorts: data })
    })
  }
  
  
  render() {
    let resorts = this.state.resorts.resorts !== undefined ? this.state.resorts.resorts.map((resort, key) => {
      return <Resort resort = {resort} key={key}/>
    }):<></>
    return (
      <div className="container">
        <h1>Resorts</h1>
        <div className="row">
          { resorts }
        </div>
      </div>
    )
  }
}
