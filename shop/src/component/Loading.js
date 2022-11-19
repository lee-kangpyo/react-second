import React, { useState } from 'react';
import styled from 'styled-components';

let St_blur = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`

let St_blurTxt = styled.span`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
`

function Loading(props){
    if(props.isShow){
        return(
            <>
                <St_blur>
                    <St_blurTxt>loading...</St_blurTxt>
                </St_blur>
            </>
        )
    }
}

export default Loading