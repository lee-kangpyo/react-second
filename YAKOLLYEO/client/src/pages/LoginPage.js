import React from 'react';
import Header from '../components/Common/Header'
import Contents from '../components/Main/Contents'
import Footer from '../components/Common/Footer';


const LoginPage = () => {
  
  return (
    <>
        <Header/>
        <Contents frame="top_frame"/>
        <Contents frame="bottom_frame"/>
        <Footer/>
    </>
  );
};

export default LoginPage;