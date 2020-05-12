import React from "react";
import AddMessage from './AddMessage';
import MessageHistory from './MessageHistory';

export default class ChatWindow extends React.Component {
  render() {
      return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>
            <MessageHistory messages={this.props.messages} username={this.props.username}/>
            <AddMessage onMessage={this.props.onMessage} username={this.props.username}/>      
          </div>
      );
  }  
}


