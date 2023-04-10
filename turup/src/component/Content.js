import React, { useState } from 'react';

import "../css/main.css"

function Content(){
    return (
        <>
            <div className='contentBox' style={{textAlign:"center", padding:"80px 0px"}}>
                <div className='content-title'>안녕하세요</div>
                <div className='content-subtitle'>털털한 사람들입니다.</div>
                <br/>
                <div className='content-subtitle2'>털 많은 사람과 털 없는 사람이 모여 털털한 사람들을 만들었습니다 ✌</div>
                <br/>
                <div className='content-subtitle3'>대한민국 면도 역사와 함께 우리는 수염 있으면 지저분한 취급받고 머리없으면 대머리 취급받아왔습니다.</div>
                <div className='content-subtitle3'>털에 대한 올바른 지식으로 세상을 움직일 때 까지,</div>
                <div className='content-subtitle3'>털털한 사람들과 함께 사람답게 살 수 있는 세상를 만들었으면 좋겠습니다.</div>
            </div>
        </>
    )
}

export default Content;