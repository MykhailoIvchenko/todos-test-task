import React from 'react';
import Loader from "../loader/loader";

const LoaderWrapper = ({children, isLoading = false}) => {
  return (
    isLoading ?
      <Loader size={'large'} />
      :
      <>
        {children}
      </>
  );
};

export default LoaderWrapper;
