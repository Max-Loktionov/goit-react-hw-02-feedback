import React, { Component } from 'react';
import { Container } from './App.styled';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleBtnNeutr = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBtnBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedPerc = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.handleBtnGood}
            onNeutral={this.handleBtnNeutr}
            onBad={this.handleBtnBad}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              goodStat={this.state.good}
              neutralStat={this.state.neutral}
              badStat={this.state.bad}
              totalFeedback={totalFeedback}
              positivePercentage={positiveFeedPerc}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
