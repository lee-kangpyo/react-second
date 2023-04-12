import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Button from '../Common/Button';

function LoginForm(){
    const initialValues = {
        userId: '',
        password: '',
        rememberMe: false
    };

    const validationSchema = Yup.object().shape({
        userId: Yup.string().matches(/^[a-zA-Z0-9]+$/, '영어와 숫자만 입력 가능합니다.').required('아이디를 입력해주세요.'),
        password: Yup.string().required('비밀번호를 입력해주세요.')
    });

    const onSubmit = values => {
        console.log(values);
        // 서버에 로그인 요청을 보낸다.
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return(
        <form id="loginForm" className="form-signin" onSubmit={formik.handleSubmit}>
            <Input
                type="text"
                name="userId"
                label="아이디"
                value={formik.values.userId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.userId && formik.errors.userId}
            />
            <Input
                type="password"
                name="password"
                label="비밀번호"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
            />
            <div style={{marginTop:"13px"}}>
                <span>
                    <input
                        id="autoCompleteId"
                        type="checkbox"
                        name="rememberMe"
                        checked={formik.values.rememberMe}
                        onChange={formik.handleChange}
                    />
                    <label className="sub_font" htmlFor="autoCompleteId">아이디 저장</label>
                </span>
                <span className="sub_font" style={{float: "right"}}>
                    <a className="forgot-password-txt" href="/user/login/DTPS095.do" id="find_uid">아이디</a>
                    <a className="forgot-password-txt" href="/user/login/DTPS096.do" id="find_pw">비밀번호 찾기</a>
                </span>
            </div>
            <Button type="submit" text="로그인" style={{display: "block", width: "100%", marginBottom: "5px"}}/>
            <Button type="button" text="회원가입" style={{display: "block", width: "100%", background:"#63a1ff"}}/>
        </form>
    );
}

export default LoginForm;