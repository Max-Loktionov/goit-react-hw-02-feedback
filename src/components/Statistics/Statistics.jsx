import PropTypes from 'prop-types';
import { Stats, Count } from './Statistics.styled';

function Statistics({
  goodStat,
  neutralStat,
  badStat,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <Stats>
      <Count>
        <span> Good: {goodStat}</span>
        <span> Neutral: {neutralStat} </span>
        <span> Bad: {badStat} </span>
      </Count>
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
