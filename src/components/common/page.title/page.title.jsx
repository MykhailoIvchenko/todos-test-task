import React from 'react';
import './page.title.css';

const PageTitle = ({children}) => {
  return (
    <h2 className={'PageTitle'}>
      {children}
    </h2>
  );
};

export default PageTitle;
