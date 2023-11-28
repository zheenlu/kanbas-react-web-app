import React from 'react';
import EncodingParametersInURLs from './EncodingParametersInURLs';
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
import ExtraCredit from "./3.2.4ExtraCredit";
import ExtraCredit2 from "./3.3.7ExtraCredit";      

function Assignment5() {
    return (
			<div>
				<h2>Assignment 5</h2>
				<div className="list-group">
					<a
						href="http://localhost:4000/a5/welcome"
						className="list-group-item">
						Welcome
					</a>
				</div>
					<ExtraCredit2 />
					<WorkingWithArrays />
					<ExtraCredit />
					<WorkingWithObjects />
					<EncodingParametersInURLs />
			</div>
		);
}

export default Assignment5;