import React, { Component } from 'react';
import Counter from './Statistic';
import { FeedbackOptions } from './FeedbackOptions';

import { Notification } from './message';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAmount = event => {
    this.setState(prevAmount => {
      const name = event.target.name;
      return {
        [name]: prevAmount[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let posTotal = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );

    return posTotal;
  };

  render() {
    const total = this.countTotalFeedback();

    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleAmount}
        />

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Counter
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </>
    );
  }
}
