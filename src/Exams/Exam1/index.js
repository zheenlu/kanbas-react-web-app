import React from "react";
import Question1 from "./Question1"
import Question5 from "./Question5"
import Jkl from "./Jkl"
import Bnm from "./Bnm"
import Question7 from "./Question7"
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question12 from "./Question12";
import Jkl2 from "./Jkl2";
import Asd from "./Asd";
import Question14 from "./Question14";
import Xyz from "./Xyz";
import Question16 from "./Question16";
import Question18 from "./Question18";
import Delete from "./Delete";
import Asd2 from "./Asd2";
import Rew from "./Rew";
import Qntr from "./Qntr";
import Xtr from "./Xtr";

function Exam1() {
  return (
    <div className="container">
      <Xtr fds="gfd"/>
      <Qntr wer={20}/>
      <h1>Practice</h1>
      <Delete />
      <Question18/>
      <Question16/>
      <Xyz />
      <Question14/>
      <Jkl2 />
      <Question12 />
      <Asd />
      <Question10 />
      <Question9/>
      <Rew />
      <Asd2 />
      <Question7 />
      <h3>Question6</h3>   
      <Bnm/>
      <Jkl />
      <Question5 />
      <Question1 />
    </div>
  );

}

export default Exam1;