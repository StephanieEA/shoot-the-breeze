import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='filter' onChange={e => this.props.handleFilter(e)}/>
        <button onClick={ () => this.props.filterMessages()}>Search</button>
    </div>
    );
  }
}

module.exports = Filter;
