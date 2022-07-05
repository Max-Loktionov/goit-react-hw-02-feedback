import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div className="notif">
      <span>There is no feedback</span>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
