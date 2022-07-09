import PropTypes from 'prop-types';

function Notification({ message }) {
  return (
    <div className="notif">
      <span>{message}</span>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
