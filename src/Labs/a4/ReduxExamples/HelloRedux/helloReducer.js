import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    message: "Hello World From Reducer!"
    // "message" here we call it the Redux state variable, "Hello World!" is its initial value
}

const helloSlice = createSlice({
    name: "hello", // name your Reducer
    initialState: initialState, // provide the initial state
    reducers: { // provide the functions that manipulate the state. reducers are functions that convert one data to another data (e.g. convert "Hello World!" to "Hello Redux!"). Reducers will take a lot of information from objects and arrays and whatnot, and it will reduce it down to a single value.
        setMessage(state, action) { // read and write the state
            state.message = action.payload; // "payload" contains the data passed to the function when it is called, here is "Hello Redux!"
        }
    }
});

export const {setMessage} = helloSlice.actions; 
export default helloSlice.reducer; // export the reducer function