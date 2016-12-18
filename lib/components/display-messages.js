import React from 'react';

class DisplayMessages extends React.Component {
  render() {
    let displayMessages = this.props.display;
    displayMessages = displayMessages.map((data, index) =>
        (<article key={index}>
          <p>{data.id}</p>
          <p>{data.value}</p>
        </article>
        ));
    console.log(displayMessages)
    return (
      <section>
        {displayMessages} yoooo
      </section>
    );
  }
}

module.exports = DisplayMessages;
