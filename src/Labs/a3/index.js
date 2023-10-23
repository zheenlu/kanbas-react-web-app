import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
// import Add from "./Add";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todos/TodoList";
import React from 'react';



function Assignment3() {
    return (
      <div>
          <h2>Assignment 3</h2>
          <TodoList />
          <ConditionalOutput/>
          <Styles/>
          <Classes />
          <PathParameters />
          {/* <Add /> */}
          <JavaScript />
      </div>
    );
}

export default Assignment3;