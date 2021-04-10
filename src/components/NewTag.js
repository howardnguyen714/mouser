import React, { Component } from 'react';

class NewTag extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-input">
            <div class="input-group mb-3">
              <input 
                type="text" 
                class="form-control" 
                placeholder="New Tag"
                name="tag" 
                onChange={event => this.props.handleChange(event)}
                value={this.props.tag}
                required/>
              <div class="input-group-append">
                <input class="btn btn-outline-secondary" type="submit" value="Add"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTag;
