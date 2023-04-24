import React, { useState } from 'react';
import styles from "../../scss/homePage.module.scss";
import Button from '../Common/Button';
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbTruck } from "react-icons/tb";
import { RiGlobalLine, RiNewspaperLine } from "react-icons/ri";
import { TfiAngleRight } from "react-icons/tfi";
import Menu from './Menu';

function MenuList({isShrinked}){
    return(
        <div className={styles.sideBar_Container} style={{padding:"0px 16px"}}>
            
            <Menu isShrinked={true} text="테스트" isUnderLine={true}/>
            <Menu isShrinked={true} text="테스트" isUnderLine={false}/>
            <Menu isShrinked={false} text="테스트" isUnderLine={false}/>

            <div className={styles.menu_el}>
                <div><MdOutlineShoppingCart/> 주문</div> 
                <TfiAngleRight/>
            </div>
            <hr className={styles.hr_style} style={{padding:"0px"}}/>
            <div className={styles.menu_el}>
                <div><TbTruck/> 주문 / 배송 상태</div> <TfiAngleRight/>
            </div>
            <hr className={styles.hr_style} style={{padding:"0px"}}/>
                <div className={styles.menu_el}>
            <div><RiNewspaperLine/> 거래원장</div> <TfiAngleRight/>
            </div>
            <hr className={styles.hr_style} style={{padding:"0px"}}/>
            <div className={styles.menu_el}>
                <div><RiGlobalLine/> 커넥트 디아이</div> <TfiAngleRight/> 
            </div>
        </div>
    )
}

export default MenuList;

