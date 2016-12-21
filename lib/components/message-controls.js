import React from 'react';

export default class MessageControls extends React.Component {
  render() {
    return(
      <div>
        <button className='submitBtn'
                onClick={e => this.props.addMessage(this.props.messages)} disabled={!this.props.draftMessage}>
                Submit
        </button>
        <button className='clearBtn'
              disabled={!this.props.draftMessage}>
              Clear
        </button>
      </div>
    )
  }
}
