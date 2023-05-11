import React from 'react';
import PropTypes from 'prop-types'

import css from './FeedbackOptions.module.css';

export const FeedbackOptions =({options})=>{
    const {handleGood, handleNeutral, handleBad} = options;
    return (
        <>
        <h1 className={css.sectionTitle}>Please leave feedback</h1>
        <ul className={css.list}>
            <li><button className={css.listBtn}type="button" onClick={handleGood}>Good</button></li>
            <li><button className={css.listBtn}type="button" onClick={handleNeutral}>Neutral</button></li>
            <li><button className={css.listBtn}type="button" onClick={handleBad}>Bad</button></li>
        </ul>
        </>
    )
}

FeedbackOptions.propTypes ={
options: PropTypes.shape({
    handleGood: PropTypes.func,
    handleNeutral: PropTypes.func,
    handleBad: PropTypes.func,
})
} 
