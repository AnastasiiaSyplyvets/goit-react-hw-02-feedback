import React, { Component } from "react";
import Counter from './Statistic'
import {Section} from './Section';
import {FeedbackOptions} from './FeedbackOptions';




export class App extends Component {  
  state = { 
    good: 0,
    neutral: 0,
    bad: 0 }

    
handleGoodAmount = (event) =>{
  this.setState((prevAmount)=>{
      console.log("click")
return{
 good: prevAmount.good +1
}
  })
  
}

handleNeutralAmount =(event)=>{
  this.setState((prevAmount)=>{
return {
  neutral: prevAmount.neutral +1
}
  })
}

handleBadAmount=()=>{
  this.setState((prevAmount)=>{
      return{
          bad: prevAmount.bad +1
      }
  })
}

countTotalFeedback =()=>{
  let total =  this.state.good + this.state.neutral + this.state.bad;
  return total;
 
}

countPositiveFeedbackPercentage = ()=>{
  let posTotal = Math.round((this.state.good * 100) / this.countTotalFeedback());

if(posTotal <0) {
  return 100;
}

  return posTotal;

}



    render(){
      

      const total =this.countTotalFeedback();
      console.log(total)
     
     return (
      
    <section>
     <FeedbackOptions  options= {{handleGood: this.handleGoodAmount, handleNeutral: this.handleNeutralAmount,  
    handleBad: this.handleBadAmount}}/>

     {total === 0 ? (<p>No feedback given</p>) : (
     <Counter 
good={this.state.good} 
neutral={this.state.neutral} 
bad={this.state.bad} 
total={this.countTotalFeedback()} 
positivePercentage={this.countPositiveFeedbackPercentage()}/>
)}
     
     
    </section>
      
     )
      
    }
}

