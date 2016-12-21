import React from 'react'


const Login = (props) => {
  if (!props){
    props = [];
  }
  return (
    <div>
      <button onClick={ () => props.authorize().then(fromFirebase => props.setUser(fromFirebase))}>{props.text}</button>
    </div>
  );
};

module.exports = Login;


//<button onClick={ this.props.userLogin }>{text}</button>
