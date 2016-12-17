import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import update from 'immutability-helper';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      draftMessage: '',
    };
  }

  componentDidMount() {
    firebase.database().ref('messages').on('value', (snapshot) => {
      const messagesFromFirebase = this.createArray(snapshot.val());
      this.setState({ messages: messagesFromFirebase });
    });
  }

    createArray(mobject) {
      const fireBaseKeys = mobject ? Object.keys(mobject) : [];
      const messageList = [];
      fireBaseKeys.map((mobjectKey) => {
        const soloMobject = mobject[mobjectKey];
        soloMobject['firebaseId'] = mobjectKey;
        messageList.push(soloMobject);
      });
    //  console.log(fireBaseKeys)
      return messageList;
    }

  handleChange(e) {
    this.setState({ draftMessage: e.target.value });
    this.setState({ count: e.target.value.length });
  }

  addMessage(mess) {
    console.log(this.state.messages)
    firebase.database().ref('messages').push(Object.assign(mess, { id: Date.now(), value: this.state.draftMessage }));
    this.state.messages.push(Object.assign(mess, { id: Date.now(), value: this.state.draftMessage }));
    this.setState({
      messages: this.state.messages,
    });
  //  console.log(this.state.messages)
  }

  removeMessage(id) {
    const messageItem = this.state.messageList.find(message => message.id === id);
    firebase.database().ref('messages/' + messageItem.firebaseId ).remove();
  }

  // displayMessages() {
  //   let messageDispay = this.state.messages;
  //   if (messageDispay.length > 0) {
  //     messageDispay = messageDispay.map((data, index) =>
  //     (<article key={index}>
  //       <p>{data.username}</p>
  //       <p>{data.date}</p>
  //       <p>{data.time}</p>
  //       <p>{data.value}</p>
  //     </article>
  //     ));
  //   }
  // }

  render() {
    if (!this.state.user) {
      return (
        <div>
        Please Login
        <Login authorize={signIn} setUser= { (userFromFireBase)=> { this.setState({user: userFromFireBase.user})}} text="login" />
        </div>
      )
    }
    return (
      <div className='Application'>
        <h1> Welcome {this.state.user.email} </h1>
        <Login authorize={signOut} setUser= { () => this.setState({ user: null })} text="logout"/>
        <div className='MessageInput'>
          <input type='text'
                 value={this.state.value}
                 onChange={e => this.handleChange(e)}/>
          <p className='Count'>{this.state.count}</p>
          <button className='submitBtn' onClick={e => this.addMessage(this.state.messages)}>Submit</button>
          <button className='clearBtn'>Clear</button>
        </div>
        <div className='MessageDisplay'>
        </div>
      </div>
    );
  }
}

const Login = ({ authorize, setUser, text }) => {
  return (
    <div>
    <button onClick={() => authorize().then(fromFirebase => setUser(fromFirebase)) }>{text}</button>
    </div>
  );
};
