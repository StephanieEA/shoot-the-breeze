import React from 'react'

const Login = ({ authorize, setUser, text }) => {
  return (
    <div>
    <button onClick={() => authorize().then(fromFirebase => setUser(fromFirebase)) }>{text}</button>
    </div>
  );
};
