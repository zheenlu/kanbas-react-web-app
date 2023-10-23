import React from 'react';

const ConditionalOutputIfElse = () => {
  const loggedIn = true;
  if(loggedIn) {
    return (<h4>Welcome If Else</h4>);
  } else {
    return (<h4>Please login If Else</h4>);
  }
 };
 export default ConditionalOutputIfElse;