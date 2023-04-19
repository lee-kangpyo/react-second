import React from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import HomeContent from '../components/Home/HomeContent';

const HomePage = () => {
  
  return (
    <>
        <Header isSearchEl="true" />
        <HomeContent/>
        <Footer/>
    </>
  );
};

export default HomePage;