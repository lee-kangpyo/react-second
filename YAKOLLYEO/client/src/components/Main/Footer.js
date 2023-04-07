import React, { useState } from 'react';

function Footer(){
    return(
        <>
            <div className="footer_frame">
                <div className="main_contnet">
                    <div className="footer_f_group">
                        <i className="bg-footerLogo"><span className="blind">로고</span></i>
                        <div>
                            <p className="footer_font">상호 <span className="footer_font_bold">(주)룩인사이트</span> 대표자 <span className="footer_font_bold">가진웅</span> 사업자등록번호 <span className="footer_font_bold">850-87 01176</span></p>
                            <p className="footer_font">주소 <span className="footer_font_bold">서울시 성동구 아차산로 11길 11 406호</span> 통신판매업신고번호 <span className="footer_font_bold">2022-서울성동-01829</span></p>
                        </div>
                    </div>
                    <div className="footer_s_group">
                        <div>
                            <button id="companyInfo" className="footer_font footer_btn">회사소개</button>
                            <button id="termsOfService" className="footer_font footer_btn">이용약관</button>
                            <button id="privacyStatement" className="footer_font footer_btn">개인정보처리방침</button>
                            <button className="footer_font footer_btn" onclick="window.open('https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8508701176','mywin','top=0,width=780,height=860');">사업자정보확인</button>
                        </div>
                        <div>
                            <p className="footer_font footer_font_sub">(주)룩인사이트는 통신판매 중개자로, 통신판매의 당사자가 아닙니다</p>
                            <p className="footer_font footer_font_sub">상품주문, 배송 및 환불의 의무와 책임은 판매자에게 있으니 상품정보와 가격을 반드시 확인해 주세요.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;



