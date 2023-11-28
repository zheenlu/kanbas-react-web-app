import BooleanVariables from "./BooleanVariables";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringify from "./JsonStringify";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import React from 'react';

function JavaScript() {
	console.log("Hello World"); // helps us debug our code
	return (
		<div className="JavaScript">
			<h3>JavaScript</h3>
			<FunctionDestructing />
			<Destructing />
			<Spread />
			<House />
			<TemplateLiterals />
			<FilterFunction />
			<FindFunction />
			<JsonStringify />
			<MapFunction />
			<ForLoops />
			<AddingAndRemovingDataToFromArrays />
			<ArrayIndexAndLength />
			<WorkingWithArrays />
			<FunctionParenthesisAndParameters />
			<ImpliedReturn />
			<ArrowFunctions />
			<ES5Functions />
			<TernaryOperator />
			<IfElse />
			<BooleanVariables />
			<VariableTypes />
			<VariablesAndConstants />
		</div>
	);
}

export default JavaScript;
