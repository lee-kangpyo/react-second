import React from 'react';
import Header from '../components/Main/Header'
import Contents from '../components/Main/Contents'

const NotFoundPage = () => {
  return (
    <>
        <Header/>
        <Contents frame="top_frame"/>
        <Contents frame="bottom_frame"/>
    </>
  );
};

export default NotFoundPage;