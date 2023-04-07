import React from 'react';
import Header from '../components/Main/Header'
import Contents from '../components/Main/Contents'
import Footer from '../components/Main/Footer';

const NotFoundPage = () => {
  
  return (
    <>
        <Header/>
        <Contents frame="top_frame"/>
        <Contents frame="bottom_frame"/>
        <Footer/>
    </>
  );
};

export default NotFoundPage;