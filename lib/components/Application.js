import React, { Component } from 'react';
import firebase, { reference, signIn, signOut } from '../firebase';
import { pick, map, extend } from 'lodash';
import moment from 'moment';
import DisplayMessages from './display-messages';
import UserDisplay from './user-display';
import Filter from './filter';
import Sort from './sort';
import Login from './login';
import MessageInput from './message-input';
import MessageControls from './message-controls';
import Count from './count';
import Header from './header';

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
    const messages = [];
    fireBaseKeys.map((mobjectKey) => {
      const soloMobject = mobject[mobjectKey];
      soloMobject['firebaseId'] = mobjectKey;
      messages.push(soloMobject);
    });
    return messages;
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
    const messageItem = this.state.messages.find(messageItem => messageItem.id === id);
    firebase.database().ref('messages/' + messageItem.firebaseId).remove();
  }

  filterMessages() {
    const searchText = this.state.draftFilter.toLowerCase();
    const searchedMessages = this.state.messages.filter((message) => {
      return message.value.toLowerCase().includes(searchText) ||
      message.user.toLowerCase().includes(searchText);
    });
    this.setState({ searched: searchedMessages });
  }

  sortUp() {
    const mess = this.state.messages.slice();
    mess.reverse();
    this.setState({ sorter: mess });
  }

  sortDown() {
    const mess = this.state.messages;
    this.setState({ sorter: '' });
  }

  render() {
    if (!this.state.user) {
      return (
        <div>
        Please Login
        <Login authorize={signIn}
              setUser= { (userFromFireBase) => { this.setState({ user: userFromFireBase.user }); } }
              text="login" />
        </div>
      );
    }
    return (
      <div className='Application'>
        <Header email={this.state.user.email}/>
        <Login authorize={signOut}
               setUser= { () => this.setState({ user: null })}
               text="logout" />
        <Filter data={this.state.searchedMessages}
                handleFilter={this.handleFilter.bind(this)}
                filterMessages={this.filterMessages.bind(this)}
          />
        <Sort display={this.state.messages}
              sortUp={ this.sortUp.bind(this) }
              sortDown={this.sortDown.bind(this)}
            />
        <MessageInput handleChange={ this.handleChange.bind(this)}
                      value={this.state.value}/>
        <Count count={this.state.count}/>
        <MessageControls messages={this.state.messages}
                         addMessage={this.addMessage.bind(this)}
                         draftMessage={this.state.draftMessage}
                       />
        <DisplayMessages sorter={this.state.sorter}
                          searched={this.state.searched}
                          display={this.state.messages}
                          destroy={this.removeMessage.bind(this)} />
        <UserDisplay display={this.state.messages}
                     user={this.state.user} />
      </div>
    );
  }
}
