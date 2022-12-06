import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';

function CurrentItem (){
    let watched = JSON.parse(localStorage.getItem("watched"));
    console.log(watched)
    return(
        <>
            <div className="side-float">
                <div className="side-float-header">
                    <span style={{"marginRight":"5px"}}>CART</span> 
                    <Badge pill bg="light" text="dark">{watched.length}</Badge>
                </div>
                <div className="side-float-body">
                    {watched.map((el, idx) => {
                        return (
                            <div key={idx}>
                                <img alt={el.title} src={process.env.PUBLIC_URL + "/shoes"+(idx+1)+".jpg"} width="100%"/>
                            </div>
                        )
                    })}
                </div>
                <div className="side-float-fotter" onClick={() => window.scrollTo(0, 0)}>TOP</div>
            
            </div>
        </>
    )
}

export default CurrentItem;