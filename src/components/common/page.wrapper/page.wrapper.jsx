import React from 'react';
import './page.wrapper.css';

const PageWrapper = ({children}) => {
  return (
    <section className={'PageWrapper'}>
      {children}
    </section>
  );
};

export default PageWrapper;
