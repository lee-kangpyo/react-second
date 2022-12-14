import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';

function CurrentItem (){
    let navigate = useNavigate()
    let watched = JSON.parse(localStorage.getItem("watched"));
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
                            <div key={idx} onClick={()=>{navigate("/detail/"+el.id)}}>
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