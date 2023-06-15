import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = button => {
    setFeedback(prevState => ({
      ...prevState,
      [button]: prevState[button] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(feedback);
    return values.reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = total => {
    const percentage = Math.round((feedback.good * 100) / total);
    return percentage;
  };

  const total = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
