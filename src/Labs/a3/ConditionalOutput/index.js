import React from "react";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
const ConditionalOutput = () => {
	// Merge both components into a single component ConditionalOutputIfElse as shown below and then import the new component into the Labs/index.js. Confirm all components render as expected.
	return (
		<>
			{" "}
			{/* empty tags: just here to logically group the html content into singular elements, nameless elements, then can be added to the DOM */}
			{/* <> </> is a React.Fragment, a special React element that allows us to group a list of children without adding extra nodes to the DOM. */}
			{/* what is DOM: Document Object Model
      What is the DOM? The DOM (Document Object Model) represents the web page as a tree structure. Any piece of HTML that we write is added as a node, to this tree */}
			<ConditionalOutputIfElse />
			<ConditionalOutputInline />
		</>
	);
};
export default ConditionalOutput;
