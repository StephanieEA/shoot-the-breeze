import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import update from 'immutability-helper';

// Very few things in this component are a good idea.
// Feel free to blow it all away.

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
    };
  }

  componentDidMount() {
  }

  handleChange(e) {
    this.setState({ draftMessage: e.target.value });
  }

  addNewMessage() {
    const messageArray = this.state.messages;
    const submitMessage = this.state.draftMessage;
    const updatedArray = update(messageArray, { $push: [submitMessage] });
    this.setState({ messages: updatedArray });
    console.log(this.state.messages)

  }

  displayMessages() {
    let messageDispay = this.state.messages;
    if (messageDispay.length > 0) {
      messageDispay = messageDispay.map((data, index) =>
      (<article key={index}>
        <p>{data.username}</p>
        <p>{data.date}</p>
        <p>{data.time}</p>
        <p>{data.value}</p>
      </article>
      ));
    }
  }

  render() {
    return (
      <div className="Application">
        <div className='MessageInput'>
          <input type='text'
                 value={this.state.value}
                 onChange={e => this.handleChange(e)}/>
          <button className='submitBtn' onClick={e => this.addNewMessage(e)}>Submit</button>
          <button className='clearBtn'>Clear</button>
        </div>
        <div className='MessageDisplay'>
        </div>
      </div>
    );
  }
}
