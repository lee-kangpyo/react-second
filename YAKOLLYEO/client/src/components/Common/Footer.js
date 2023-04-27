import React from 'react';
import axios from 'axios';
import styles from "../../scss/loginPage.module.scss";

function Footer(){
    const openCompanyInfo = () => {
        window.open('https://lookinsight.imweb.me/26', '_blank');
    };
    const businessInfo = () => {
        window.open('https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8508701176','mywin','top=0,width=780,height=860');
    };

    

    const openInfo = (id) =>{
        axios.post("/api/v1/clkLandingBtn", { id: id } ).then(res => {
            console.log(res.data);
        }) .catch(error => {
            console.error(error);
        });

        /*
        $.post("/api/v1/getS090Info.do", "id="+id, function(data){
			console.log(data.result)
			var msg = "", title = "";
			if(id == "termsOfService"){
				msg = data.msg;
				title = "이용약관";
	 		}else if(id == "privacyStatement"){
	 			msg = data.msg;
	 			title = "개인정보취급방침";
	 		}
			$("#infoLayerTitle").text(title)
			$(".infoLayer > .body").html(msg);
			if(msg) $(".infoLayer").addClass("show");	
		});*/
    }
	
    

    return(
        <>
            <div className={styles.footer_frame}>
                <div className={styles.main_contnet}>
                    <div className={styles.footer_f_group}>
                        <i className={styles["bg-footerLogo"]}><span className={styles.blind}>로고</span></i>
                        <div>
                            <p className={styles.footer_font}>상호 <span className={styles.footer_font_bold}>(주)룩인사이트</span> 대표자 <span className={styles.footer_font_bold}>가진웅</span> 사업자등록번호 <span className={styles.footer_font_bold}>850-87 01176</span></p>
                            <p className={styles.footer_font}>주소 <span className={styles.footer_font_bold}>서울시 성동구 아차산로 11길 11 406호</span> 통신판매업신고번호 <span className={styles.footer_font_bold}>2022-서울성동-01829</span></p>
                        </div>
                    </div>
                    <div className={styles.footer_s_group}>
                        <div>
                            <button onClick={openCompanyInfo} className={`${styles.footer_font} ${styles.footer_btn}`}>회사소개</button>
                            <button onClick={()=>openInfo("termsOfService")} className={`${styles.footer_font} ${styles.footer_btn}`}>이용약관</button>
                            <button onClick={()=>openInfo("privacyStatement")} className={`${styles.footer_font} ${styles.footer_btn}`}>개인정보처리방침</button>
                            <button onClick={businessInfo} className={`${styles.footer_font} ${styles.footer_btn}`}>사업자정보확인</button>
                        </div>
                        <div>
                            <p className={`${styles.footer_font} ${styles.footer_font_sub}`}>(주)룩인사이트는 통신판매 중개자로, 통신판매의 당사자가 아닙니다</p>
                            <p className={`${styles.footer_font} ${styles.footer_font_sub}`}>상품주문, 배송 및 환불의 의무와 책임은 판매자에게 있으니 상품정보와 가격을 반드시 확인해 주세요.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;



