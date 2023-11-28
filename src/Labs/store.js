import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./a4/ReduxExamples/HelloRedux/helloReducer";
import counter1Reducer from "./a4/ReduxExamples/Counter/counter1Reducer";
import counter2Reducer from "./a4/ReduxExamples/Counter/counter2Reducer";
import addReducer from "./a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "./a4/ReduxExamples/todos/todosReducer";

const store = configureStore({ // responsible for collecting all the reducers into one single place
  reducer: {
    counter1Reducer,
    counter2Reducer,
    addReducer,
    todosReducer,
    helloReducer,
  },
});

export default store;