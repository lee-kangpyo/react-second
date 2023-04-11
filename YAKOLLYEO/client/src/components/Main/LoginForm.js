import React, { useState } from 'react';
import Input from './Input';
import Button from '../Common/Button';

function LoginForm(){
    return(
        <>
            <form id="loginForm" className="form-signin">
                <Input type="text" name="userId" label="아이디" />
                <Input type="password" name="password" label="비밀번호" />
                <span>
                    <input id="autoCompleteId" type="checkbox" />
                    <label className="sub_font" htmlFor="autoCompleteId">아이디 저장</label>
                </span>
                <span className="sub_font" style={{float: "right"}}>
                    <a className="forgot-password-txt" href="/user/login/DTPS095.do" id="find_uid">아이디</a>
                    <a className="forgot-password-txt" href="/user/login/DTPS096.do" id="find_pw">비밀번호 찾기</a>
                </span>
                <Button text="로그인" style={{display: "block", width: "100%", marginBottom: "5px"}}/>
                <Button text="회원가입" style={{display: "block", width: "100%", background:"#63a1ff"}}/>
            </form>
            <div style={{textAlign: "center", marginBottom: "32px"}}>
                <i className="bg-first_visit"><span className="blind">처음 오셨나요?</span></i>
            </div>
        </>
    );
}

export default LoginForm;