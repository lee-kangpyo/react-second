import React, { useState } from 'react';

function ContentBox({idx, title, contents}){
    return(
        <>
            <div className="box_layout">
                <p>0{idx + 1}</p>
                <p className="title" dangerouslySetInnerHTML={{__html:contents.title}} />
                <p className="content" dangerouslySetInnerHTML={{__html:contents.contents}} />
                <i className={contents.icon}><span className="blind">선물상자</span></i>
            </div>
        </>
    )
}

export default ContentBox;

