import React from 'react';

class DisplayMessages extends React.Component {
  render() {
    let displayMessages = this.props.display;
    displayMessages = displayMessages.map((data, index) =>
        (<article key={index}>
          <p>{data.user}</p>
          <p>{data.value}</p>
          <p>{data.timeStamp}</p>
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
