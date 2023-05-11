
import React, { Component } from "react";


export const Counter =({good, neutral, bad, total, positivePercentage})=> {
  

// handleGoodAmount = (event) =>{
//     this.setState((prevAmount)=>{
//         console.log("click")
// return{
//    good: prevAmount.good +1
// }
//     })
    
// }

// handleNeutralAmount =(event)=>{
//     this.setState((prevAmount)=>{
// return {
//     neutral: prevAmount.neutral +1
// }
//     })
// }

// handleBadAmount=()=>{
//     this.setState((prevAmount)=>{
//         return{
//             bad: prevAmount.bad +1
//         }
//     })
// }

// countTotalFeedback =()=>{
//     let total =  this.state.good + this.state.neutral + this.state.bad;
//     return total;
   
// }

// countPositiveFeedbackPercentage = ()=>{
//     let posTotal = Math.round((this.state.good * 100) / this.countTotalFeedback());

// if(posTotal <0) {
//     return 100;
// }

//     return posTotal;

// }

 
 return   (<div>


    <h2>Statistic</h2>
<p>Good: <span>{good}</span></p>
<p>Neutral: <span>{neutral}</span></p>
<p>Bad: <span>{bad}</span></p>
<p>Total: <span>{total}</span></p>
<p>Positive feedback: <span>{positivePercentage}%</span></p>
</div> )

}


export default Counter;