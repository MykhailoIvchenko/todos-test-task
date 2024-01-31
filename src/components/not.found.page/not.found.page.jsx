import React from 'react';
import {Button, Result, Space} from "antd";
import {useNavigate} from "react-router-dom";
import {routesModel} from "../../utils/models.js";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you try to visit does not exist."
      extra={
        <Space>
          <Button
            type='primary'
            onClick={() => navigate(routesModel.home)}
          >
            Back Home
          </Button>
        </Space>
      }
    />
  );
};

export default NotFoundPage;
