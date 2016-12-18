import React from 'react';

class UserDisplay extends React.Component {
  render() {
    const userList= []
    const mobjects = this.props.display
    mobjects.map((mobject) => {
      // find all values for user key
      const users = mobject['user'];
      // push those values into an array
      userList.push(users)
    });
    return (
      <aside>
        {userList}
      </aside>
    );
  }
}

module.exports = UserDisplay;
