import { ButtonList, ListItem, ButtonOption } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (
    <ButtonList>
      {options.map(option => (
        <ListItem key={option}>
          {' '}
          <ButtonOption type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </ButtonOption>
        </ListItem>
      ))}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};