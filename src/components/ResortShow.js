import React, { Component } from 'react'
import ResortModel from '../models/resort'
import Tag from './Tag'
import Tip from './Tip'
import NewTag from './NewTag'
import NewTip from './NewTip'



export default class ResortShow extends Component {
  state = {
    resort: {},
    currentResort: this.props.match.params.id,
    tag: "",
    tip: ""
  }

  componentDidMount() {
    // runs after render function runs
    this.fetchData()
  }

  fetchData = () => {
    ResortModel.show(this.state.currentResort).then(data => {
      this.setState({ resort: data.resort, tag: "", tip: "" })
    })
  }

  handleTagSubmit = (event) => {
    event.preventDefault();
    // append new tag to ResortModel
    ResortModel.createTag(this.state.currentResort, this.state.tag)
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
    // append new tip to ResortModel
    ResortModel.createTip(this.state.currentResort, this.state.tip)
    .then(() => {
      this.fetchData()      
      // this.setState({ tip: "" })
    })
  }

  handleTipChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      tip: event.target.value
    })
  }

  render() {    
    let tags = this.state.resort.tags !== undefined ? this.state.resort.tags.map((tag, key) => {
      // console.log(tag)
      return <Tag text = {tag.text} key={key}/>
    }):<></>
    
    let tips = this.state.resort.tips !== undefined ? this.state.resort.tips.map((tip, key) => {
      // console.log(tip)
      return <Tip text = {tip.text} key={key}/>
    }):<></>
    
    return (
      <div className="container pageContainer">
        <h1>{ this.state.resort.name }</h1>
        <div className="row">
          <div className="col-md-9">
            <img src={this.state.resort.imageUrl} alt=""/>
          </div>
          <div className="col-md-3">
            <h5>Tags</h5>
            { tags }
            <NewTag tag={this.state.tag} handleChange={this.handleTagChange} handleSubmit={this.handleTagSubmit} />
          </div>
          
        </div>
        <div className="row">
          <div className="col-md-9"> 
            <p className="description">{ this.state.resort.description }</p>
            <h4>Tips</h4>
            { tips }
            <NewTip tip={this.state.tip} handleChange={this.handleTipChange} handleSubmit={this.handleTipSubmit} />
          </div>
        </div>
      </div>

    )
  }
}
