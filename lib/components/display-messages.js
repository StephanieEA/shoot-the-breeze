import React from 'react';

class DisplayMessages extends React.Component {
  render() {
    let displayMessages = [];
    if (this.props.sorter && !this.props.searched) {
      displayMessages = this.props.sorter;
    }
    else if (this.props.searched && !this.props.sorter) {
      displayMessages = this.props.searched;
    }
    else if (this.props.searched && this.props.sorter) {
      displayMessages = this.props.display      
    } else {
      displayMessages = this.props.display;
    }
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
