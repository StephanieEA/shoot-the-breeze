import React from 'react';

export default class Sort extends React.Component {
  render(){
    return(
      <section>
        <button onClick={() =>this.props.sortUp()}>Up</button>
        <button onClick={() =>this.props.sortDown()}>Down</button>
      </section>
    )
  }
}
