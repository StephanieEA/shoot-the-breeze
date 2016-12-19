import React from 'react';
import {  filter } from 'lodash';


class UserDisplay extends React.Component {
  render() {
    let userList = [];
    const mobjects = this.props.display;
    mobjects.map((mobject) => {
      // find all values for user key
      const users = mobject['user'];
      // push those values into an array
      userList.push(users);
    });
    userList = userList.filter(function(userName, index, nameArray) {
      return nameArray.indexOf(userName) == index;
    });
    return (
      <aside>
        {userList}
      </aside>
    );
  }
}

module.exports = UserDisplay;
