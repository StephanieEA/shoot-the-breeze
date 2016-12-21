import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Shoot the Breeze!</h1>
        <h2>Welcome {this.props.email}</h2>
      </header>
    );
  }
}
