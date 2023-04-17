import React from 'react';
import Header from '../components/Main/Header'
import Contents from '../components/Main/Contents'
import Footer from '../components/Main/Footer';
import Login from '../components/Main/LoginBar';
import "../scss/login.scss";

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