import React, { Component } from 'react'
import ParkModel from '../models/park'
import Tag from './Tag'
import Tip from './Tip'
import NewTag from './NewTag'
import NewTip from './NewTip'



export default class ParkShow extends Component {
  state = {
    park: {},
    currentPark: this.props.match.params.id,
    tag: "",
    tip: ""
  }

  componentDidMount() {
    // runs after render function runs
    this.fetchData()
  }

  fetchData = () => {
    ParkModel.show(this.state.currentPark).then(data => {
      // console.log(data.park)
      this.setState({ park: data.park, }) // tag: "", tip: "" })
    })
  }

  handleTagSubmit = (event) => {
    event.preventDefault();
    // append new tag to ParkModel
    ParkModel.createTag(this.state.currentPark, this.state.tag)
    .then(() => {
      this.setState({ tag: "" })
      this.fetchData()      
    })
  }

  handleTagChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      tag: event.target.value
    })
  }

  handleTipSubmit = (event) => {
    event.preventDefault();
    // append new tip to ParkModel
    ParkModel.createTip(this.state.currentPark, this.state.tip)
    .then(() => {
      this.fetchData()      
      // this.setState({ tip: "" })
    })
  }

  handleTipChange = (event) => {
    console.log(event.target.value)
    this.setState({
      tip: event.target.value
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
          <NewTag handleChange={this.handleTagChange} handleSubmit={this.handleTagSubmit} />
          <h3>Tips</h3>
          <ul>
            { tips }
          </ul>
          <NewTip handleChange={this.handleTipChange} handleSubmit={this.handleTipSubmit} />
      </div>

    )
  }
}
