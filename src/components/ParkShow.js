import React, { Component } from 'react'
import ParkModel from '../models/park'
import Tag from './Tag'
import Tip from './Tip'
import NewTag from './NewTag'


export default class ParkShow extends Component {
  state = {
    park: {},
    currentPark: this.props.match.params.id,
    tag: ""
  }

  componentDidMount() {
    // runs after render function runs
    this.fetchData()
  }

  fetchData = () => {
    ParkModel.show(this.state.currentPark).then(data => {
      console.log(data.park)
      this.setState({ park: data.park, tag: "" })
  
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // append new tag to ParkModel
    ParkModel.createTag(this.state.currentPark, this.state.tag)
    .then(() => {
      this.fetchData()      
      // this.setState({ tag: "" })
    })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      tag: event.target.value
    })
  }

  render() {    
    let tags = this.state.park.tags !== undefined ? this.state.park.tags.map((tag, key) => {
      console.log(tag)
      return <Tag text = {tag.text} key={key}/>
    }):<></>
    let tips = this.state.park.tips !== undefined ? this.state.park.tips.map((tip, key) => {
      console.log(tip)
      return <Tip text = {tip.text} key={key}/>
    }):<></>
    return (
      <div className="container">
          <h2>{ this.state.park.name }</h2>
          <p>{ this.state.park.description }</p>
          <h3>Tags</h3>
            <ul>
              { tags }
            </ul>
          <NewTag handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          <h3>Tips</h3>
          { tips }
      </div>

    )
  }
}
