import React, { useState } from 'react';
import ContentBox from './ContentBox';
import LoginComponent from './LoginBar';
import NewsLetter from './NewsLetter';
import { useDispatch, useSelector } from 'react-redux';


function Contents({frame}){
    const landing = useSelector((state)=>state.landing);
    var obj = landing[frame];
    return(
        <div className={frame}>
            <div className="main_contnet">
                {(frame == "top_frame")?<LoginComponent/>:null}
                <div className="title_font">{obj.title}<span className="mid_line"></span></div>
                <div className="title_font bold">{obj.title2}<i className={obj.icon}><span className="blind">{obj.iconInfo}</span></i></div>
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