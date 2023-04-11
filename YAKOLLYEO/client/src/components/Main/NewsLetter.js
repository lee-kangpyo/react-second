import React, { useState } from 'react';

function NewsLetter(){
    return(
        <div className="newsletter">
            <div>
                <div>
                <i className="bg-news_icon"><span className="blind">뉴스</span></i>
                    <span>약올려 뉴스</span>
                </div>
                <div id="slide">
                    <i className="bg-left" name="left"><span className="blind">left</span></i>
                    <i className="bg-dot" name="0"><span className="blind">dot</span></i>
                    <i className="bg-dot active" name="1"><span className="blind">dot</span></i>
                    <i className="bg-dot" name="2"><span className="blind">dot</span></i>
                    <i className="bg-right" name="right"><span className="blind">right</span></i>
                </div>
            </div>
        </div>

    )
}
export default NewsLetter;

