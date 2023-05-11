import React from 'react';



export const FeedbackOptions =({options})=>{
    const {handleGood, handleNeutral, handleBad} = options;
    return (
        <>
        <h1>Please leave feedback</h1>
        <ul>
            <li><button type="button" onClick={handleGood}>Good</button></li>
            <li><button type="button" onClick={handleNeutral}>Neutral</button></li>
            <li><button type="button" onClick={handleBad}>Bad</button></li>
        </ul>
        </>
    )
}