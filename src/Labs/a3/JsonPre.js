import React from 'react';
function JsonPre( {json} ) {
  return (
    <pre>
      <code>{JSON.stringify(json, null, 2)}</code> 
      {/* 2 means 2 spaces for indentation, null means no filter*/}
    </pre>
  );
}

export default JsonPre;