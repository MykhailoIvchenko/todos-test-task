import React from 'react';
import {Spin} from "antd";
import './loader.css';

const Loader = ({size = 'large'}) => {
  return (
    <div className={'Loader'}>
      <Spin tip="Loading..." size={size}>
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Loader;
