import React from 'react';

export default class MessageInput extends React.Component {
  render() {
    return (
      <div className='MessageInput'>
        <input type='text'
               onChange={e => this.props.handleChange(e)}/>
      </div>
    );
  }
}
