import React from 'react';
import {Alert} from 'antd';

const Notification = ({
  title = 'Notification',
  text = '',
  type = 'info',
}) => {
  return (
    <Alert
      message={title}
      description={text}
      type={type}
      showIcon
    />
  );
};

export default Notification;
