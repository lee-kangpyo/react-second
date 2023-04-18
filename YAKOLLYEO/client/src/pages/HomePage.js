import React from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

const HomePage = () => {
  
  return (
    <>
        <Header isSearchEl="true" />
        <div style={{height:"500px"}}>홈입니다.</div>
        <Footer/>
    </>
  );
};

export default HomePage;