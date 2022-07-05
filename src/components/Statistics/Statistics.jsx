import PropTypes from 'prop-types';
import { Stats } from './Statistics.styled';

function Statistics({
  goodStat,
  neutralStat,
  badStat,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <Stats>
      <div>
        <span> Good: {goodStat}</span>
        <span> Neutral: {neutralStat} </span>
        <span> Bad: {badStat} </span>
      </div>
      <span> Total: {totalFeedback} </span>
      <span> Positive feedback: {positivePercentage}% </span>
    </Stats>
  );
}

Statistics.propTypes = {
  goodStat: PropTypes.number.isRequired,
  neutralStat: PropTypes.number.isRequired,
  badStat: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
