import React, { useState } from 'react';
import LoginForm from './LoginForm';

function LoginBar(){
    return(
        <>
            <div className='login_container'>
                <p style={{marginBottom: "2rem", fontSize: "28px"}}>로그인</p>
                <LoginForm/>
                <div className="contact_us">
                    <p>고객상담센터</p>
                    <div></div>
                    <p className="core"><i className="bg-call_icon mr-1"><span className="blind">전화기</span></i>Tel. 070-8158-1108</p>
                    <p className="core"><i className="bg-fax_icon mr-1"><span className="blind">팩스</span></i>Fax. 070-8158-1108</p>
                    <div></div>
                    <p className="sub"><i className="bg-mail_icon mr-1"><span className="blind">메일</span></i>help@lookinsight.co.kr</p>
                    <div></div>
                    <p className="sub">평일 09시~18시 (공휴일 휴무)</p>
                </div>
            </div>
        </>
    );
}

export default LoginBar;