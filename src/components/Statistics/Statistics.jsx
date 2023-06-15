import PropTypes from 'prop-types';
import { FeedbackList, ListItem } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <FeedbackList>
        <ListItem>Good: {good}</ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
        <ListItem>Total: {total}</ListItem>
        <ListItem>Positive feedback: {positivePercentage}%</ListItem>
      </FeedbackList>
    </>
  );
}


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};