import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	count2: 0,
};

const counter2Slice = createSlice({
	name: "counter2",
	initialState,
	reducers: {
		increment2: (state) => {
			// state.count2 += 1;
			state.count2++;
		},
		decrement2: (state) => {
			// state.count2 -= 1;
			state.count2--;
		},
		setcount2: (state, action) => {
			state.count2 = action.payload;
		},
	},
});

export const { increment2, decrement2, setcount2 } = counter2Slice.actions;
export default counter2Slice.reducer;