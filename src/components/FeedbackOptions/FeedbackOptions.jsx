import PropTypes from 'prop-types';
import { Options, BtnFeedback } from './FeedbackOptions.styled';

function FeedbackOptions({ onGood, onNeutral, onBad }) {
  return (
    <Options>
      <BtnFeedback onClick={onGood}>Good</BtnFeedback>
      <BtnFeedback onClick={onNeutral}>Neutral</BtnFeedback>
      <BtnFeedback onClick={onBad}>Bad</BtnFeedback>
    </Options>
  );
}

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
export default FeedbackOptions;
