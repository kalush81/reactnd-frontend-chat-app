import React, { Component } from "react";

export default class AddMessage extends Component {
  state = {
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onMessage(this.props.username, this.state.message);

    this.resetMessage()
  };

  resetMessage = () => {
      this.setState(currState => ({
          message: ''
      }))
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  isDisabled = () => {
    return this.state.message === "";
  };

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            onChange={this.handleChange}
            value={this.state.message}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}
