import React from 'react';
import ErrorNotification from './Error/ErrorNotification';
import SuccessNotification from './Success/SuccessNotification';

const Notification = ({ type, message, status }) => {
  return type == 'error' ? (
    <ErrorNotification message={message} displayStatus={status} />
  ) : (
    <SuccessNotification message={message} displayStatus={status} />
  );
};

export default Notification;
