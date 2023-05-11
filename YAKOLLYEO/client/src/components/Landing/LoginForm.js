import React , {useState}from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Button from '../Common/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import styles from "../../scss/loginPage.module.scss";

import { cookie } from 'react-cookie';

function LoginForm(){
    const [activeLoginBtn, setActiveLoginBtn] = useState(false);
    const navigate = useNavigate();

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
        setActiveLoginBtn(true);
        // 서버에 로그인 요청을 보낸다.
        axios.post('/user/loginUser', values)
        .then(response => {
            //console.log(response.data);  // 서버에서 보낸 응답 데이터를 콘솔에 출력합니다.
            // 상태를 업데이트하거나, 리다이렉트 등의 작업을 수행합니다.
            if(response.data){
                // accesstoken, refreshtoken을 저장하든지 해야함...
                console.log(response)
                localStorage.setItem("Access", response.headers.authorization)
                sessionStorage.setItem("refresh", response.headers.refresh)
                console.log(localStorage.getItem('Access'));
                console.log(sessionStorage.getItem('refresh'));

                cookie.save('refresh', response.headers.refresh, {
                    path : '/',
                    secure : true,
                    httpOnly : true
                });
                console.log("cookie"+cookie.get("refresh"))

                
                //navigate("/home", {replace:true})
            }else{
                console.log("로그인 실패")
            }
        })
        .catch(error => {
            console.log(error);  // 에러가 발생했을 때 콘솔에 출력합니다.
            // 에러 처리를 수행합니다.
        }).finally(()=>{
            setActiveLoginBtn(false);
        });
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    });

    return(
        <form id="loginForm" className={styles["form-signin"]} onSubmit={formik.handleSubmit}>
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
                        style={{verticalAlign:"middle"}}
                    />
                    <label className={styles.sub_font} htmlFor="autoCompleteId">아이디 저장</label>
                </span>
                <span className={styles.sub_font} style={{float: "right"}}>
                    <a className={styles["forgot-password-txt"]} href="/user/login/DTPS095.do" id="find_uid">아이디</a>
                    <a className={styles["forgot-password-txt"]} href="/user/login/DTPS096.do" id="find_pw">비밀번호 찾기</a>
                </span>
            </div>
            <Button className={styles.cBtn} type="submit" text="로그인" style={{display: "block", width: "100%", marginBottom: "5px"}} disabled={activeLoginBtn}/>
            <Button className={styles.cBtn} type="button" text="회원가입" style={{display: "block", width: "100%", background:"#63a1ff", marginBottom: "5px"}}/>
        </form>
    );
}

export default LoginForm;