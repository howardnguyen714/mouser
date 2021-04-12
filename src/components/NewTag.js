import React, { Component } from 'react';

class NewTag extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-input">
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="New Tag"
                name="tag" 
                onChange={event => this.props.handleChange(event)}
                value={this.props.tag}
                required/>
              <div className="input-group-append">
                <input className="btn btn-outline-secondary" type="submit" value="Add"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTag;
