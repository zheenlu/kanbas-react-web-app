import React from 'react';
import ClickEvent from "./ClickEvent";
import FunctionsAsParameters from "./FunctionsAsParameters";
import EventObejct from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import Add from "./Add";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import sayHello from "./sayHello";
import DateStateVariable from "./DateStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";


function Assignment4() {
	// const sayHello = () => {
	//   alert("Passing Function as Parameter Done!");
	// }
	return (
		<div>
			<h1>Assignment 4</h1>
			<ReduxExamples/>

			<ParentStateComponent />
			<ArrayStateVariable />
			<ObjectStateVariable />
			<DateStateVariable />
			<StringStateVariables />
			<BooleanStateVariables />
			<Counter />
			<EventObejct />
			<FunctionsAsParameters />
			<PassingFunctions theFunction={sayHello} />
			<PassingFunctions
				theFunction={() => {
					alert("or just write the function here");
          sayHello(); 
				}}
			/>
			<PassingDataOnEvent />
			<ClickEvent />
			<Add
				a={1}
				b={2}
			/>
		</div>
	);
}

export default Assignment4;