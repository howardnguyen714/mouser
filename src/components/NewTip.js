import React, { Component } from 'react';
class NewTip extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="form-input">
            <div class="input-group mb-3">
              <input 
                type="text" 
                class="form-control zero-radius" 
                placeholder="New Tip"
                name="tag" 
                onChange={event => this.props.handleChange(event)}
                value={this.props.tip}
                required/>
              <div class="input-group-append">
                <input class="btn btn-outline-secondary zero-radius" type="submit" value="Add"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTip;
