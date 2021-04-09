import React, { Component } from 'react';
import ParkModel from '../models/park'

class NewTag extends Component {

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // append new tag to ParkModel
  //   ParkModel.createTag(this.props.parkId, this.state.tag)
  //   .then(() => {
  //     this.setState({ tag: "" })
  //   })
    
    // this.props.history.push(`/parks/${this.props.parkId}`)
    // GameModel.create(this.state)
    //   .then(data => {
    //   })
  // }

  // handleChange = (event) => {
  //   if (event.target.type !== "text") {
  //     this.setState({ completed: !this.state.completed })
  //   }
  //   console.log(event.target.value)
  //   this.setState({
  //     tag: event.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <h6>New Tag</h6>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-input">
            {/* <label htmlFor="tag">Title</label> */}
            <input 
              type="text" 
              name="tag" 
              onChange={event => this.props.handleChange(event)}
              value={this.props.tag} />
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTag;
