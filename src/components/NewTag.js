import React, { Component } from 'react';
import ParkModel from '../models/park'

class NewTag extends Component {

  render() {
    return (
      <div>
        <h6>New Tag</h6>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-input">
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
