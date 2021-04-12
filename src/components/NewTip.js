import React, { Component } from 'react';
class NewTip extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-input">
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control zero-radius" 
                placeholder="New Tip"
                name="tag" 
                onChange={event => this.props.handleChange(event)}
                value={this.props.tip}
                required/>
              <div className="input-group-append">
                <input className="btn btn-outline-secondary zero-radius" type="submit" value="Add"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTip;
