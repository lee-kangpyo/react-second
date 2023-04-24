import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import Button from '../Common/Button';
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbTruck } from "react-icons/tb";
import { RiGlobalLine, RiNewspaperLine } from "react-icons/ri";
import { TfiAngleRight } from "react-icons/tfi";

function Menu({isShrinked, isUnderLine, text}){
    return(
        <>
            {
                (isShrinked)
                    ?
                        <div className={styles.menu_el}>
                            <div><MdOutlineShoppingCart/> {text}</div> 
                            <TfiAngleRight/>
                        </div>
                    :
                    <div className={styles.menu_el}>
                        <div><MdOutlineShoppingCart/></div> 
                    </div>
            }
            {
                (isUnderLine)
                    ?
                        <hr className={styles.hr_style} style={{padding:"0px"}}/>
                    :
                        false
            }
        </>
    )
}

export default Menu;

