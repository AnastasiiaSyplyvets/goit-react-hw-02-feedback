import React from 'react';
import {FeedbackOptions} from './FeedbackOptions';
import Counter from './Statistic';

console.log(Counter.handleGoodAmount)

export const Section =()=> {
    return (
        <>
          <section title="">

<FeedbackOptions  options= {{handleGood: Counter.handleGoodAmount, handleNeutral: Counter.handleNeutralAmount,  
    handleBad: Counter.handleBadAmount}}/>
  
{Counter.handelTotalFeedback >0 && (<Counter 
good={Counter.handleGoodAmount} neutral={Counter.handleNeutralAmount} bad={Counter.handleBadAmount} total={Counter.countTotalFeedback} positivePercentage={Counter.countPositiveFeedbackPercentage}
/>)}

          </section>
          </>
    )
      
        
    
}

<section></section>