import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import UserComponent from './UserComponent';
import MenuList from './MenuList';
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { useSelector, useDispatch  } from 'react-redux';
import { changeShrinkState } from '../../store/menubarSlice';
import BankInfo from './bankInfo';

function SideBar({shrinkWidth, width}){
    const dispatch = useDispatch();

    const [sideBarWidth, setSideBarWidth] = useState(width); 
    const isShrinked = useSelector((state) => state.isShrinked);
    

    const handleShrink = () => {
        if(isShrinked){
            setSideBarWidth(width); 
            dispatch(changeShrinkState(false))
        }else{
            setSideBarWidth(shrinkWidth); 
            dispatch(changeShrinkState(true))
        }
    }

    return(
        <>
            <div className={styles.sideBar} style={{width:sideBarWidth, transition:'width 0.3s ease'}}>
                <div>
                    <UserComponent />
                    <hr className={styles.hr_style} style={{height:"3px"}}/>
                    <MenuList/>
                </div>
                <div>
                    {(isShrinked)?false:<BankInfo/>}
                    
                    <div style={{padding: "0px 16px"}}>
                        <hr className={styles.hr_style} />
                        <div className={styles.shrink_el} onClick={handleShrink}>{(isShrinked)?<BsChevronBarRight/>:<BsChevronBarLeft/>}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;

