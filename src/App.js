import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./ChatWindow";

/*
This exercise will help you practice many of your newly acquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: "Amy" }, { username: "John" }];

// const messages = [
//   { username: "Amy", text: "Hi, Jon!" },
//   { username: "Amy", text: "How are you?" },
//   { username: "John", text: "Hi, Amy! Good, you?" },
// ];

class App extends Component {
  state = {
    messages: [],
  };

  onMessage = (username, message) => {
    const newMessage = {username, text: message}
    this.setState(currState => ({
      messages: currState.messages.concat(newMessage)
    }) )
  };

  render() {
    console.log(this.state.messages)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map((user) => (
            <ChatWindow
              key={user.username}
              username={user.username}
              messages={this.state.messages}
              onMessage={this.onMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
