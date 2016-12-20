import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import moment from 'moment';
import DisplayMessages from './display-messages'
import UserDisplay from './user-display'
import Filter from './filter'

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
      const messages = []
      fireBaseKeys.map((mobjectKey) => {
        const soloMobject = mobject[mobjectKey];
        soloMobject['firebaseId'] = mobjectKey;
        messages.push(soloMobject)
      });
      return messages;
    }

  userLogin () {
    
  }

  handleChange(e) {
    this.setState({ draftMessage: e.target.value });
    this.setState({ count: e.target.value.length });
  }

  handleFilter(e) {
    this.setState({ draftFilter: e.target.value });
  }

  addMessage(mess) {
    firebase.database().ref('messages').push(Object.assign(mess, { id: Date.now(), value: this.state.draftMessage, timeStamp: moment().format('MMMM D, h:mm a'), user: this.state.user.displayName }));
  }

  removeMessage(id) {
    const messageItem = this.state.messages.find( messageItem => messageItem.id === id);
    firebase.database().ref('messages/' + messageItem.firebaseId ).remove();
  }

  filterMessages() {
    let searchText = this.state.draftFilter.toLowerCase();
    let searchedMessages = this.state.messages.filter(message => {
      return message.value.toLowerCase().includes(searchText)  ||
      message.user.toLowerCase().includes(searchText)
    })
    this.setState({ searched: searchedMessages }, () => console.log(this.state.searched))
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
        Please Login
        <Login authorize={signIn} setUser= { (userFromFireBase) => { this.setState({ user: userFromFireBase.user })}} text="login" />
        </div>
      )
    }
    return (
      <div className='Application'>
        <h1> Welcome {this.state.user.email} </h1>
        <Login authorize={signOut} setUser= { () => this.setState({ user: null })} text="logout"/>
        <Filter data={this.state.searchedMessages}
                handleFilter={this.handleFilter.bind(this)}
                filterMessages={this.filterMessages.bind(this)}
          />
        <div className='MessageInput'>
          <input type='text'
                 value={this.state.value}
                 onChange={e => this.handleChange(e)}/>
          <p className='Count'>{this.state.count}</p>
          <button className='submitBtn' onClick={e => this.addMessage(this.state.messages)} disabled={!this.state.draftMessage} >Submit</button>
          <button className='clearBtn' disabled={!this.state.draftMessage}>Clear</button>
        </div>
        <DisplayMessages searched={this.state.searched}
                          display={this.state.messages} destroy={this.removeMessage.bind(this)}/>
        <UserDisplay display={this.state.messages} user={this.state.user} />
      </div>
    );
  }
}
