import React, { useState } from 'react';
import ContentBox from './ContentBox';
import LoginComponent from './LoginBar';
import NewsLetter from './NewsLetter';
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../scss/loginPage.module.scss";


function Contents({frame}){
    const landing = useSelector((state)=>state.landing);
    var obj = landing[frame];
    
    let frameStyle = '';
    if (frame === 'top_frame') {
      frameStyle = styles.top_frame;
    } else if (frame === 'bottom_frame') {
      frameStyle = styles.bottom_frame;
    }

    return(
        <div className={frameStyle}>
            <div className={styles.main_contnet}>
                {(frame == "top_frame")?<LoginComponent/>:null}
                <div className={styles.title_font}>{obj.title}<span className={styles.mid_line}></span></div>
                <div className={`${styles.title_font} ${styles.bold}`}>{obj.title2}<i className={obj.icon}><span className={styles.blind}>{obj.iconInfo}</span></i></div>
                <div style={{ marginBottom: "32px" }}> 
                    {obj.contents.map((item, idx) => {
                        return <ContentBox key={idx} idx={idx} contents={item}/>
                    })}
                </div>
                {(frame == "bottom_frame")?<NewsLetter/>:null}
            </div>
        </div>

    )
}

export default Contents;