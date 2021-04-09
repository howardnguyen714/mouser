import React, { Component } from 'react';
import ParkModel from '../models/park'

class NewTip extends Component {

  render() {
    return (
      <div>
        <h6>New Tip</h6>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-input">
            <input 
              type="text" 
              name="tip" 
              onChange={event => this.props.handleChange(event)}
              value={this.props.tip} />
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTip;
