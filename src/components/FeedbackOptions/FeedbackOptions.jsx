import PropTypes from 'prop-types';
import { Options, BtnFeedback } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Options>
      {Object.keys(options).map(nameBtn => {
        return (
          <BtnFeedback name={nameBtn} onClick={onLeaveFeedback} key={nameBtn}>
            {nameBtn}
          </BtnFeedback>
        );
      })}
    </Options>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  key: PropTypes.object,
};
export default FeedbackOptions;
