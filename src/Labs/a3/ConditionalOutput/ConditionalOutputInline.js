import React from 'react';

const ConditionalOutputInline = () => {
  const loggedIn = false;
  return (
    <>
      { loggedIn && <h4>Welcome Inline</h4>      }
      {!loggedIn && <h4>Please login Inline</h4> }
    </>
  );
 };
 export default ConditionalOutputInline;