import React from 'react';

class DisplayMessages extends React.Component {
  render() {
    let displayMessages = this.props.searched ? this.props.searched : [];
    displayMessages = displayMessages.map((data, index) =>
        (<article className='message-display' key={index}>
          <p>{data.user}</p>
          <p>{data.value}</p>
          <p>{data.timeStamp}</p>
          <button className='delete-message' onClick={ () => this.props.destroy(data.id)}>Delete</button>
        </article>
        ));
    return (
      <section>
        {displayMessages}
      </section>
    );
  }
}

module.exports = DisplayMessages;
